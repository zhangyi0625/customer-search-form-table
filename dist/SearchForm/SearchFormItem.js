import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState } from "react";
import { Cascader, DatePicker, Form, Input, Select } from "antd";
import { debounce } from "lodash-es";
const fetchSearch = debounce((value, callback)=>{
    value.api({
        keyword: value.value,
        tag: value.tag
    }).then((res)=>{
        callback(res);
    });
}, 300);
const SearchFormItem_SearchFormItem = /*#__PURE__*/ memo((props)=>{
    const { label, name, formType, api, tag, options, isRules, selectFileldName } = props;
    const { RangePicker } = DatePicker;
    const portNameOptions = [
        'porCode',
        'fndCode',
        'porId',
        'fndId'
    ];
    const [defalueOptions, setDefaultOptions] = useState(options);
    const handleSearch = (newVal, type, API, tag)=>{
        fetchSearch({
            value: newVal,
            name: type,
            api: API,
            tag
        }, setDefaultOptions);
    };
    const selectFoucs = (name, API, tag)=>{
        if (portNameOptions.includes(name)) fetchSearch({
            value: null,
            name: name,
            api: API,
            tag
        }, setDefaultOptions);
        else setDefaultOptions(options);
    };
    const selectOptions = ()=>(defalueOptions || []).map((item)=>portNameOptions.includes(name) ? {
                label: /*#__PURE__*/ jsxs("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsxs("p", {
                            children: [
                                item.localName,
                                " - ",
                                item.name
                            ]
                        }),
                        /*#__PURE__*/ jsxs("p", {
                            children: [
                                item.countryLocalName,
                                " - ",
                                item.countryName
                            ]
                        })
                    ]
                }),
                value: 'porCode' === name || 'fndCode' === name ? item.unlocode : item.id
            } : {
                value: item.id,
                label: item.name
            });
    const filter = (inputValue, path)=>path.some((option)=>option.text.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    return /*#__PURE__*/ jsx("div", {
        className: 'search-form-item',
        children: /*#__PURE__*/ jsxs(Form.Item, {
            label: label,
            name: name,
            rules: isRules ? [
                {
                    required: true,
                    message: `\u{8BF7}${'input' === formType ? "\u8F93\u5165" : "\u9009\u62E9"}${label}`
                }
            ] : void 0,
            children: [
                'input' === formType && /*#__PURE__*/ jsx(Input, {
                    autoFocus: false,
                    allowClear: true,
                    autoComplete: "off",
                    placeholder: `\u{8BF7}\u{8F93}\u{5165}${label}`
                }),
                'select' === formType && /*#__PURE__*/ jsx(Select, {
                    allowClear: true,
                    placeholder: `\u{8BF7}\u{8F93}\u{5165}${label}`,
                    showSearch: true,
                    defaultActiveFirstOption: false,
                    filterOption: false,
                    onSearch: (value)=>handleSearch(value, name, api, tag),
                    onFocus: ()=>selectFoucs(name, api, tag),
                    popupMatchSelectWidth: portNameOptions.includes(name) ? 240 : true,
                    classNames: {
                        popup: {
                            root: portNameOptions.includes(name) ? 'portSelect' : ''
                        }
                    },
                    options: selectOptions()
                }),
                'cascader' === formType && /*#__PURE__*/ jsx(Cascader, {
                    options: options,
                    placeholder: `\u{8BF7}\u{8F93}\u{5165}${label}`,
                    showSearch: {
                        filter
                    },
                    allowClear: true,
                    fieldNames: {
                        label: 'text',
                        children: 'children'
                    }
                }),
                'date-picker' === formType && /*#__PURE__*/ jsx(RangePicker, {
                    format: 'YY-MM-DD HH:mm:ss'
                })
            ]
        })
    });
});
const SearchFormItem = SearchFormItem_SearchFormItem;
export { SearchFormItem as default };
