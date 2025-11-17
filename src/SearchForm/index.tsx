import './index.scss';
import { memo, useEffect, useState } from 'react';
import { Button, Col, Form, Row, Space } from 'antd';
import { DownOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';
import SearchFormItem from './SearchFormItem';
import type { CustomColumn, SearchFormPorps } from './type';
import { filterKeys, replaceObjectName } from '../utils/tool';
import { formatTime } from '../utils/format';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

export const SearchForm: React.FC<SearchFormPorps> = memo((props) => {
  const {
    gutterWidth = 24,
    defaultColsNumber,
    columns,
    labelPosition = 'left',
    btnSeparate = true,
    isShowReset = true,
    isShowExpend = false,
    searchBtnText,
    resetBtnText,
    iconHidden = false,
    advancedFilterText = ['Expend', 'Collapse'],
    defaultFormItemLayout = formItemLayout,
    onUpdateSearch,
  } = props;

  const [searchForm] = Form.useForm();

  const [isExpend, setIsExpend] = useState<boolean>(true);

  const [searchColumns, setSerachColumns] = useState<CustomColumn[]>(columns);

  const [advancedFilter, setAdvancedFilter] = useState<string>(
    advancedFilterText[0],
  );

  const onFinish = () => {
    // onUpdateSearch(value);
    onSearch();
  };

  useEffect(() => {
    const getData = async (
      api?: any,
      selectFileldName?: CustomColumn['selectFileldName'] & {
        [key: string]: any;
      },
      selectResultKey?: CustomColumn['selectResultKey'],
    ) => {
      const result = await replaceObjectName(
        selectResultKey ? (await api())[selectResultKey] : await api,
        Object.keys(selectFileldName ?? {}).map(
          (key: string) => selectFileldName![key],
        ),
        Object.keys(selectFileldName ?? {}),
      );
      return result;
    };
    searchColumns.map(async (item: CustomColumn) => {
      if (item.selectFetch && !item.apiByUrl)
        item.options = await getData(
          item.api,
          item.selectFileldName ?? {},
          item.selectResultKey,
        );
      if (
        item.name &&
        item.defaultValue !== null &&
        item.defaultValue !== undefined
      ) {
        searchForm.resetFields();
        searchForm.setFieldsValue({ [item.name]: item.defaultValue });
      }
    });
    setTimeout(() => {
      setSerachColumns([...searchColumns]);
    }, 300);
  }, [...searchColumns]);

  const onSearch = () => {
    // 针对处理时间传值表达式：name + 'Start' || 'End'
    const filterTypeByTime: { key: string; type: CustomColumn['formType'] }[] =
      [];
    let params = {};
    searchColumns.map((item) => {
      if (
        (item.formType === 'range-picker' || item.formType === 'date-picker') &&
        searchForm.getFieldValue([item.name])
      ) {
        filterTypeByTime.push({
          key: item.name,
          type: item.formType,
        });
      }
    });
    if (filterTypeByTime.length === 0) {
      params = {
        ...searchForm.getFieldsValue(),
      };
    } else {
      filterTypeByTime.map((item) => {
        params = {
          ...filterKeys(
            searchForm.getFieldsValue(),
            [...filterTypeByTime.map((items) => items.key)],
            false,
          ),
          ...params,
          [item.type === 'range-picker' ? `${item.key}Start` : `${item.key}`]:
            item.type === 'range-picker'
              ? formatTime(
                  searchForm.getFieldsValue()[item.key][0],
                  'Y-M-D h:m:s',
                )
              : formatTime(
                  searchForm.getFieldsValue()[item.key],
                  'Y-M-D h:m:s',
                ),
          [item.type === 'range-picker' ? `${item.key}End` : `${item.key}`]:
            item.type === 'range-picker'
              ? formatTime(
                  searchForm.getFieldsValue()[item.key][1],
                  'Y-M-D' + ' 23:59:59',
                )
              : formatTime(
                  searchForm.getFieldsValue()[item.key],
                  'Y-M-D h:m:s',
                ),
        };
      });
    }
    onUpdateSearch(params);
  };

  const onReset = () => {
    searchForm.resetFields();
    onSearch();
  };

  const getColClass = (index: number) => {
    return !btnSeparate
      ? isExpend && defaultColsNumber && index + 1 >= defaultColsNumber * 4
      : isExpend && defaultColsNumber && index + 1 > defaultColsNumber * 4;
  };

  const changeShowExpend = () => {
    setIsExpend(!isExpend);
    setAdvancedFilter(
      advancedFilter === advancedFilterText[0]
        ? advancedFilterText[1]
        : advancedFilterText[0],
    );
  };

  return (
    <div className={'search-form'}>
      <Form
        onFinish={onFinish}
        {...defaultFormItemLayout}
        colon={false}
        labelAlign={labelPosition}
        form={searchForm}
      >
        <Row gutter={gutterWidth ?? 24}>
          {columns.map((item, index) => (
            <Col
              key={index}
              span={item.span}
              className={getColClass(index) || item.hiddenItem ? 'no-show' : ''}
              hidden={item.hiddenItem}
            >
              <SearchFormItem {...item} />
            </Col>
          ))}
          {!btnSeparate && (
            <Col>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={iconHidden && <SearchOutlined />}
                >
                  {searchBtnText ?? '搜索'}
                </Button>
                {isShowReset && (
                  <Button
                    type="default"
                    icon={iconHidden && <RedoOutlined />}
                    onClick={onReset}
                  >
                    {resetBtnText ?? '重置'}
                  </Button>
                )}
                {isShowExpend && (
                  <a style={{ fontSize: '12px' }} onClick={changeShowExpend}>
                    <DownOutlined rotate={!isExpend ? 180 : 0} />
                    {advancedFilter}
                  </a>
                )}
              </Space>
            </Col>
          )}
        </Row>
      </Form>
      {btnSeparate && (
        <div className={'btnSeparate'}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              onClick={onSearch}
              icon={iconHidden && <SearchOutlined />}
            >
              {searchBtnText ?? '搜索'}
            </Button>
            {isShowReset && (
              <Button
                type="default"
                icon={iconHidden && <RedoOutlined />}
                onClick={onReset}
              >
                {resetBtnText ?? '重置'}
              </Button>
            )}
            {isShowExpend && (
              <a style={{ fontSize: '12px' }} onClick={changeShowExpend}>
                <DownOutlined rotate={!isExpend ? 180 : 0} />
                {advancedFilter}
              </a>
            )}
          </Space>
        </div>
      )}
    </div>
  );
});
