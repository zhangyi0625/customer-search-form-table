# API 文档

## 属性

| 参数               | 说明                                                           |          类型           | 可选值      |        默认值        |
| ------------------ | -------------------------------------------------------------- | :---------------------: | ----------- | :------------------: |
| gutterWidth        | 栅格属性Row                                                    |         number          | -           |          24          |
| isShowExpend       | 是否显示展开(Expend)、收起（Collapse）                         |         boolean         | true、false |        false         |
| advancedFilterText | 搜索条件展开、收起文字（高级筛选）                             |        string[]         | -           | [ Collapse, Expend ] |
| showRow            | 展开伸缩至多展示几行                                           |         number          | -           |          -           |
| columns            | 表格columns(见下方[**CustomColumn 属性**](#CustomColumn-属性)) |          array          | -           |          -           |
| btnSeparate        | 查询重制按钮所在位置 1、在Form中 2、单独一行在右下角           |         boolean         | true、false |         true         |
| labelPosition      | label 标签的文本对齐方式                                       | FormProps['labelAlign'] | left、right |         left         |
| isShowReset        | 是否展示重置按钮（搜索按钮必须存在）                           |         string          | true、false |         true         |
| searchBtnText      | 搜索自定义文字 默认搜索                                        |         string          | -           |         搜索         |
| resetBtnText       | 重置自定义文字 默认重置                                        |         string          | -           |         重置         |
| iconHidden         | 显示按钮icon                                                   |         boolean         | true、false |        false         |

### CustomColumn 属性

| 参数             | 说明                                                                                                                                               |           类型            | 可选值                                                  | 默认值 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------: | ------------------------------------------------------- | :----: |
| formType         | 展示字段的类型                                                                                                                                     |          string           | input、normalSelect、cascader、date-picker、focusSelect |   -    |
| options          | 仅在formType在select、cascader生效                                                                                                                 |  SelectProps['options']   | -                                                       |   -    |
| span             | 栅格属性Col                                                                                                                                        |          number           | -                                                       |   6    |
| selectFetch      | 需要异步请求的options                                                                                                                              |          boolean          | true、false                                             | false  |
| api              | select搜索需要通过接口,函数返回一个promise,设置该属性后，apiByUrl属性则无效                                                                        |         function          | -                                                       |   -    |
| selectResultKey  | 异步请求返回结果response的key值                                                                                                                    |          string           | -                                                       |  data  |
| apiByUrl         | select搜索需要通过接口地址，设置该属性后，selectFetch属性则无效（设置该属性基本用于select下拉框展开时搜索远程数据，需要将formType改为focusSelect） |          string           | -                                                       |   -    |
| apiByUrlMethod   | 接口地址调用方法，该属性配合apiByUrl使用                                                                                                           |          string           | get、post                                               |   -    |
| apiByUrlParams   | 接口地址需要传的参数，该属性配合apiByUrl使用                                                                                                       |          object           | -                                                       |   -    |
| isRules          | Todo : form表单rules 暂时只支持基础空值校验                                                                                                        |          boolean          | -                                                       | false  |
| defaultValue     | 设置formItem初始值                                                                                                                                 |          string           | -                                                       |   -    |
| selectFileldName | select、cascader中FileName                                                                                                                         | SelectProps['fieldNames'] | -                                                       |  null  |
| hiddenItem       | 是否显示formItem 用于tab切换时存在不同的查询表头                                                                                                   |          boolean          | -                                                       | false  |

注：更多继承FormItemProps属性，请参考 Antd UI[Form组件的文档](https://ant-design.antgroup.com/components/form-cn)。

## 函数

| 方法名         | 说明                   | 参数     |
| -------------- | ---------------------- | -------- |
| onUpdateSearch | 搜索、重置按钮点击回调 | formItem |
