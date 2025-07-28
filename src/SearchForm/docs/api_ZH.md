# API 文档

## 属性

| 参数          | 说明                                                           |          类型           | 可选值           | 默认值  |
| ------------- | -------------------------------------------------------------- | :---------------------: | ---------------- | :-----: | --- | --- |
| gutterWidth   | 栅格属性Row                                                    |         number          | -                |   24    |
| isShowExpend  | 是否显示展开、收缩（Collapse）                                 |         boolean         | -                |  false  |
| showRow       | 展开伸缩至多展示几行                                           |         number          | -                |    -    |
| columns       | 表格columns(见下方[**CustomColumn 属性**](#CustomColumn-属性)) |          array          | -                |    -    |
| btnSeparate   | 查询重制按钮所在位置 1、在Form中                               |                         | 单独一行在右下角 | boolean | -   | -   |
| labelPosition | label 标签的文本对齐方式                                       | FormProps['labelAlign'] | -                |
| isShowReset   | 是否展示重置按钮（搜索按钮必须存在）                           |         string          | -                |  true   |
| searchBtnText | 搜索自定义文字 默认搜索                                        |         string          | -                |  搜索   |
| resetBtnText  | 重置自定义文字 默认重置                                        |         string          | -                |  重置   |
| iconHidden    | 显示按钮icon                                                   |         boolean         | -                |  true   |

### CustomColumn 属性

| 参数         | 说明                                                                                                    |          类型          | 可选值                                     | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------- | :--------------------: | ------------------------------------------ | :----: |
| formType     | 展示字段的类型                                                                                          |         string         | input、normalSelect、cascader、date-picker |   -    |
| options      | 仅在formType在select、cascader生效                                                                      | SelectProps['options'] | -                                          |   -    |
| span         | 栅格属性Col                                                                                             |         number         | -                                          |   6    |
| filterSearch | 需要异步请求的options                                                                                   |        boolean         | -                                          | false  |
| api          | 部分options数据需通过函数获取，返回一个promise,开启此属性需要将filterSearch设置为true（Todo：暂未开放） |        function        | -                                          |   -    |
| isRules      | Todo : form表单rules 暂时只支持基础空置校验                                                             |        boolean         | -                                          | false  |
| defaultValue | 设置formItem初始值                                                                                      |        boolean         | -                                          |   -    |
| isRules      | select、cascader类型中FileName                                                                          |    selectFileldName    | -                                          |   -    |

注：更多继承FormItemProps属性，请参考 Antd UI[Form组件的文档](https://ant-design.antgroup.com/components/form-cn)。

## 函数

| 方法名         | 说明                   | 参数     |
| -------------- | ---------------------- | -------- |
| onUpdateSearch | 搜索、重置按钮点击回调 | formItem |
