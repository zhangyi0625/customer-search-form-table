import { memo, useMemo, useState } from 'react';
import {
  Form,
  Select,
  Input,
  DatePicker,
  Cascader,
  GetProp,
  CascaderProps,
} from 'antd';
import { SelectProps } from 'antd/lib';
import { debounce } from 'lodash-es';
import type { CustomColumn } from './type';
import axios from 'axios';

type fetchValueType = Pick<
  CustomColumn,
  'name' | 'apiByUrl' | 'apiByUrlMethod' | 'apiByUrlParams' | 'selectResultKey'
> & {
  value: string | null;
};

type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];

const fetchSearch = debounce(
  (value: fetchValueType, callback: (data: any) => void) => {
    (axios as any)
      [
        value.apiByUrlMethod ?? 'get'
      ](value.apiByUrl, value.apiByUrlMethod === 'get' ? { params: value.apiByUrlParams } : value.apiByUrlParams)
      .then((res: any) => {
        callback(res[value.selectResultKey ?? 'data']);
      });
  },
  300,
);

const SearchFormItem: React.FC<CustomColumn> = memo((props) => {
  const {
    label,
    name,
    formType,
    apiByUrl,
    apiByUrlMethod,
    apiByUrlParams,
    selectResultKey,
    options,
    isRules,
    selectFileldName,
    customPlaceholder,
  } = props;

  const { RangePicker } = DatePicker;

  const portNameOptions = ['porCode', 'fndCode', 'porId', 'fndId'];

  const [defalueOptions, setDefaultOptions] =
    useState<SelectProps['options']>(options);

  const [focusSelectLoading, setFocusSelectLoading] = useState<boolean>(false);

  const handleSearch = (
    newVal: string,
    params: Pick<
      CustomColumn,
      'apiByUrl' | 'apiByUrlMethod' | 'apiByUrlParams' | 'selectResultKey'
    >,
  ) => {
    // fetchSearch({ value: newVal, ...params }, setDefaultOptions);
  };

  const selectFoucs = (
    name: string,
    params: Pick<
      CustomColumn,
      'apiByUrl' | 'apiByUrlMethod' | 'apiByUrlParams' | 'selectResultKey'
    >,
  ) => {
    setFocusSelectLoading(true);
    fetchSearch({ value: null, name: name, ...params }, setDefaultOptions);
    // setTimeout(() => {
    setFocusSelectLoading(false);
    // }, 1000);
  };

  const getPlaceholderBack = useMemo(() => {
    return !label && customPlaceholder
      ? customPlaceholder
      : `请${formType === 'input' ? '输入' : '选择'}${label}`;
  }, [label, customPlaceholder]);

  const selectOptions = () => {
    return (defalueOptions || []).map((item) =>
      portNameOptions.includes(name)
        ? {
            label: (
              <div className="">
                <p>
                  {item.localName} - {item.name}
                </p>
                <p>
                  {item.countryLocalName} - {item.countryName}
                </p>
              </div>
            ),
            value:
              name === 'porCode' || name === 'fndCode'
                ? item.unlocode
                : item.id,
          }
        : {
            value: item[selectFileldName?.value as string],
            label: item[selectFileldName?.label as string],
          },
    );
  };

  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(
      (option) =>
        (option.text as string)
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1,
    );

  return (
    <div className={'search-form-item'}>
      <Form.Item
        label={label}
        name={name}
        rules={
          isRules
            ? [
                {
                  required: true,
                  message: `请${
                    formType === 'input' ? '输入' : '选择'
                  }${label}`,
                },
              ]
            : undefined
        }
        labelCol={!label ? { sm: { span: 0 } } : undefined}
        wrapperCol={!label ? { sm: { span: 24 } } : undefined}
      >
        {formType === 'input' && (
          <Input
            autoFocus={false}
            allowClear
            autoComplete="off"
            placeholder={getPlaceholderBack}
          />
        )}
        {/* {formType === 'select' && (
          <Select
            allowClear
            placeholder={`请输入${label}`}
            showSearch
            defaultActiveFirstOption={false}
            filterOption={false}
            onSearch={(value: string) => handleSearch(value, name, api, tag)}
            onFocus={() => selectFoucs(name, api, tag)}
            popupMatchSelectWidth={portNameOptions.includes(name) ? 240 : true}
            classNames={{
              popup: {
                root: portNameOptions.includes(name) ? 'portSelect' : '',
              },
            }}
            options={selectOptions()}
          />
        )} */}
        {formType === 'focusSelect' && (
          <Select
            allowClear
            placeholder={getPlaceholderBack}
            showSearch
            defaultActiveFirstOption={false}
            filterOption={(input, option) =>
              String(option?.label ?? '')
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            loading={focusSelectLoading}
            onFocus={() =>
              selectFoucs(name, {
                apiByUrl,
                apiByUrlMethod,
                apiByUrlParams,
                selectResultKey,
              })
            }
            popupMatchSelectWidth={portNameOptions.includes(name) ? 240 : true}
            classNames={{
              popup: {
                root: 'portSelect',
              },
            }}
            options={selectOptions()}
          />
        )}
        {formType === 'normalSelect' && (
          <Select
            style={{ width: '100%' }}
            allowClear
            placeholder={getPlaceholderBack}
            showSearch
            options={options}
            filterOption={(input, option) =>
              String(option?.label ?? '')
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            fieldNames={
              selectFileldName ?? {
                label: 'label',
                value: 'value',
              }
            }
          />
        )}
        {formType === 'cascader' && (
          <Cascader
            options={options}
            placeholder={getPlaceholderBack}
            showSearch={{ filter }}
            allowClear
            fieldNames={
              selectFileldName ?? {
                label: 'label',
                value: 'value',
                children: 'children',
              }
            }
          />
        )}
        {formType === 'date-picker' && (
          <RangePicker style={{ width: '100%' }} format={'YY-MM-DD HH:mm:ss'} />
        )}
      </Form.Item>
    </div>
  );
});

export default SearchFormItem;
