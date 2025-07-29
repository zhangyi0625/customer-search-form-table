import './index.css';
import { memo, useEffect, useState } from 'react';
import { Button, Col, Form, Row, Space } from 'antd';
import { DownOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';
import SearchFormItem from './SearchFormItem';
import type { CustomColumn, SearchFormPorps } from './type';
import { filterKeys, replaceObjectName } from '../utils/tool';
import { formatTime } from '../utils/format';
import { isArray } from 'lodash-es';

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
    showRow,
    columns,
    labelPosition = 'left',
    btnSeparate = true,
    isShowReset = true,
    isShowExpend = false,
    searchBtnText,
    resetBtnText,
    iconHidden = false,
    onUpdateSearch,
  } = props;

  const [searchForm] = Form.useForm();

  const [isExpend, setIsExpend] = useState<boolean>(false);

  const [searchColumns, setSerachColumns] = useState<CustomColumn[]>(columns);

  const onFinish = (value: unknown) => {
    onUpdateSearch(value);
  };

  useEffect(() => {
    const getData = async (api?: any) => {
      const result = await replaceObjectName(
        await api(),
        ['carrierCode', 'carrierCode'],
        ['id', 'name'],
      );
      return result;
    };
    searchColumns.map(async (item: CustomColumn) => {
      // console.log(item.filterSearch, item.name);
      if (item.filterSearch) item.options = await getData(item.api);
      if (item.name && item.defaultValue) {
        searchForm.resetFields();
        searchForm.setFieldsValue({ [item.name]: item.defaultValue });
      }
    });

    // setTimeout(() => {
    setSerachColumns([...searchColumns]);
    // }, 500);
  }, [...searchColumns]);

  const onSearch = () => {
    // 针对处理时间传值表达式：name + 'Start' || 'End'
    const nameKey: string[] = [];
    let params = {};
    searchColumns.map((item) => {
      if (
        item.formType === 'date-picker' &&
        searchForm.getFieldValue([item.name])
      ) {
        nameKey.push(item.name);
      }
    });
    if (nameKey.length === 0) {
      params = {
        ...searchForm.getFieldsValue(),
      };
    } else {
      nameKey.map((item) => {
        params = {
          ...filterKeys(searchForm.getFieldsValue(), nameKey, false),
          ...params,
          // fndCode:
          //   (isArray(searchForm.getFieldValue('fndCode'))
          //     ? searchForm.getFieldValue('fndCode')[1]
          //     : searchForm.getFieldValue('fndCode')) ?? '',
          [`${item}Start`]: formatTime(
            searchForm.getFieldsValue()[item][0],
            'Y-M-D h:m:s',
          ),
          [`${item}End`]: formatTime(
            searchForm.getFieldsValue()[item][0],
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

  const changeExpend = () => {
    setIsExpend(!isExpend);
  };

  const getColClass = (index: number) => {
    return !btnSeparate
      ? isExpend && showRow && index + 1 >= showRow * 4
      : isExpend && showRow && index + 1 > showRow * 4;
  };

  return (
    <div className={'search-form'}>
      <Form
        onFinish={onFinish}
        {...formItemLayout}
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
                  <a style={{ fontSize: '12px' }} onClick={changeExpend}>
                    <DownOutlined rotate={isExpend ? 180 : 0} />
                    Collapse
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
              <a style={{ fontSize: '12px' }} onClick={changeExpend}>
                <DownOutlined rotate={isExpend ? 180 : 0} />
                Collapse
              </a>
            )}
          </Space>
        </div>
      )}
    </div>
  );
});
