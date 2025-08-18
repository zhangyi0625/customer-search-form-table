# API 文档

## 属性

| 参数                | 说明                                                       |         类型          | 可选值          |  默认值  |
| ------------------- | ---------------------------------------------------------- | :-------------------: | --------------- | :------: |
| columns             | 表格列项                                                   | TableProps['columns'] | -               |    -     |
| fetchData           | 返回表格数据函数，返回一个promise                          |       function        | -               |    -     |
| fetchResultKey      | 异步请求返回结果response的key值                            |        string         | -               |   data   |
| searchFilter        | 表格所需要的查询条件                                       |        object         | -               |    -     |
| isSelection         | 表格是否需要表格勾选                                       |        boolean        | true、false     |   true   |
| isPagination        | 表格是否需要分页                                           |        boolean        | true、false     |   true   |
| totalKey            | 表格数据数量对应的key值                                    |        string         |                 |   data   |
| selectionParentType | 表格勾选类型                                               |        string         | checkbox、radio | checkbox |
| immediate           | 是否立马加载表格数据（针对部分业务逻辑需要）               |        boolean        | true、false     |  false   |
| isCache             | 缓存部分基数数据 (暂时用于react-redux,对应缓存数据的key值) |        string         | -               |    -     |
| showTableRadius     | 是否隐藏表格顶部圆角                                       |        boolean        | true、false     |  false   |
| multipleSelected    | 回显表格勾选数据（rowKey默认为id）                         |  string[]、number[]   | -               |    []    |

注：更多继承TableProps属性，请参考 Antd UI[Table组件的文档](https://ant-design.antgroup.com/components/table-cn)。

## 函数

| 方法名             | 说明         | 参数               |
| ------------------ | ------------ | ------------------ |
| onUpdatePagination | 分页回调函数 | pagination         |
| onUpdateSelection  | 勾选回调函数 | foridAdrr, dataRow |
