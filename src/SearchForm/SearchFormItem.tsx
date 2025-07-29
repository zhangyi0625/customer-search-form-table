import { memo, useState } from 'react';
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
  } = props;

  const { RangePicker } = DatePicker;

  const portNameOptions = ['porCode', 'fndCode', 'porId', 'fndId'];

  const [defalueOptions, setDefaultOptions] =
    useState<SelectProps['options']>(options);

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
    fetchSearch({ value: null, name: name, ...params }, setDefaultOptions);
  };

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
      >
        {formType === 'input' && (
          <Input
            autoFocus={false}
            allowClear
            autoComplete="off"
            placeholder={`请输入${label}`}
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
            placeholder={`请选择${label}`}
            showSearch
            defaultActiveFirstOption={false}
            filterOption={(input, option) =>
              String(option?.label ?? '')
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            onFocus={() =>
              selectFoucs(name, {
                apiByUrl,
                apiByUrlMethod,
                apiByUrlParams,
                selectResultKey,
              })
            }
            popupMatchSelectWidth={portNameOptions.includes(name) ? 240 : true}
            options={selectOptions()}
          />
        )}
        {formType === 'normalSelect' && (
          <Select
            allowClear
            placeholder={`请选择${label}`}
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
            placeholder={`请输入${label}`}
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
          <RangePicker format={'YY-MM-DD HH:mm:ss'} />
        )}
      </Form.Item>
    </div>
  );
});

export default SearchFormItem;
