import { jsx, jsxs } from "react/jsx-runtime";
import index_module from "./index.module.js";
import { memo, useEffect, useState } from "react";
import { Button, Col, Form, Row, Space } from "antd";
import SearchFormItem from "./SearchFormItem.js";
import { DownOutlined, RedoOutlined, SearchOutlined } from "@ant-design/icons";
import { filterKeys, replaceObjectName } from "../utils/tool.js";
import { formatTime } from "../utils/format.js";
import { isArray } from "lodash-es";
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
};
const SearchForm = /*#__PURE__*/ memo((props)=>{
    const { gutterWidth, showRow, columns, labelPosition, btnSeparate, isShowReset, isShowExpend, onUpdateSearch } = props;
    const [searchForm] = Form.useForm();
    const [isExpend, setIsExpend] = useState(false);
    const [searchColumns, setSerachColumns] = useState(columns);
    const onFinish = (value)=>{
        onUpdateSearch(value);
    };
    useEffect(()=>{
        const getData = async (api)=>{
            const result = await replaceObjectName(await api(), [
                'carrierCode',
                'carrierCode'
            ], [
                'id',
                'name'
            ]);
            return result;
        };
        searchColumns.map(async (item)=>{
            if (item.filterSearch) item.options = await getData(item.api);
            if (item.name && item.defaultValue) {
                searchForm.resetFields();
                searchForm.setFieldsValue({
                    [item.name]: item.defaultValue
                });
            }
        });
        setTimeout(()=>{
            setSerachColumns([
                ...searchColumns
            ]);
        }, 500);
    }, [
        ...searchColumns
    ]);
    const onSearch = ()=>{
        const nameKey = [];
        let params = {};
        searchColumns.map((item)=>{
            if ('date-picker' === item.formType && searchForm.getFieldValue([
                item.name
            ])) nameKey.push(item.name);
        });
        if (0 === nameKey.length) params = {
            ...searchForm.getFieldsValue()
        };
        else nameKey.map((item)=>{
            params = {
                ...filterKeys(searchForm.getFieldsValue(), nameKey, false),
                ...params,
                fndCode: (isArray(searchForm.getFieldValue('fndCode')) ? searchForm.getFieldValue('fndCode')[1] : searchForm.getFieldValue('fndCode')) ?? '',
                [`${item}Start`]: formatTime(searchForm.getFieldsValue()[item][0], 'Y-M-D h:m:s'),
                [`${item}End`]: formatTime(searchForm.getFieldsValue()[item][0], 'Y-M-D h:m:s')
            };
        });
        onUpdateSearch(params);
    };
    const onReset = ()=>{
        searchForm.resetFields();
        onSearch();
    };
    const changeExpend = ()=>{
        setIsExpend(!isExpend);
    };
    return /*#__PURE__*/ jsxs("div", {
        className: index_module["search-form"],
        children: [
            /*#__PURE__*/ jsx(Form, {
                onFinish: onFinish,
                ...formItemLayout,
                colon: false,
                labelAlign: labelPosition,
                form: searchForm,
                children: /*#__PURE__*/ jsxs(Row, {
                    gutter: gutterWidth,
                    className: 'gap-y-[10px]',
                    children: [
                        columns.map((item, index)=>/*#__PURE__*/ jsx(Col, {
                                span: item.span,
                                className: isExpend && showRow && index + 1 > 4 * showRow ? index_module["no-show"] : '',
                                hidden: item.hidden,
                                children: /*#__PURE__*/ jsx(SearchFormItem, {
                                    label: item.label,
                                    name: item.name,
                                    api: item.api,
                                    options: item.options,
                                    formType: item.formType,
                                    span: item.span,
                                    tag: item.tag,
                                    isRules: item.isRules ?? false,
                                    publicSettingKey: item.publicSettingKey,
                                    selectFileldName: item.selectFileldName
                                })
                            }, index)),
                        !btnSeparate && /*#__PURE__*/ jsx(Col, {
                            children: /*#__PURE__*/ jsxs(Space, {
                                children: [
                                    /*#__PURE__*/ jsx(Button, {
                                        type: "primary",
                                        htmlType: "submit",
                                        icon: /*#__PURE__*/ jsx(SearchOutlined, {}),
                                        children: "\u641C\u7D22"
                                    }),
                                    isShowReset && /*#__PURE__*/ jsx(Button, {
                                        type: "default",
                                        icon: /*#__PURE__*/ jsx(RedoOutlined, {}),
                                        onClick: onReset,
                                        children: "\u91CD\u7F6E"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            btnSeparate && /*#__PURE__*/ jsx("div", {
                className: "flex items-center justify-end mt-[10px]",
                children: /*#__PURE__*/ jsxs(Space, {
                    children: [
                        /*#__PURE__*/ jsx(Button, {
                            type: "primary",
                            htmlType: "submit",
                            onClick: onSearch,
                            icon: /*#__PURE__*/ jsx(SearchOutlined, {}),
                            children: "\u641C\u7D22"
                        }),
                        isShowReset && /*#__PURE__*/ jsx(Button, {
                            type: "default",
                            icon: /*#__PURE__*/ jsx(RedoOutlined, {}),
                            onClick: onReset,
                            children: "\u91CD\u7F6E"
                        }),
                        isShowExpend && /*#__PURE__*/ jsxs("a", {
                            style: {
                                fontSize: '12px'
                            },
                            onClick: changeExpend,
                            children: [
                                /*#__PURE__*/ jsx(DownOutlined, {
                                    rotate: isExpend ? 180 : 0
                                }),
                                "Collapse"
                            ]
                        })
                    ]
                })
            })
        ]
    });
});
export { SearchForm };
