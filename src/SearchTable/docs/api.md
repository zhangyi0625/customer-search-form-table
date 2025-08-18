```javascript

```

# API

## Attributes

| Attribute           | Description                                                                                                       |         Type          | Accepted Values | Default  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | :-------------------: | --------------- | :------: |
| columns             | Table items                                                                                                       | TableProps['columns'] | -               |    -     |
| fetchData           | 返回表格数据函数，返回一个promise                                                                                 |       function        | -               |    -     |
| fetchResultKey      | The function that returns table data returns a promise                                                            |        string         | -               |   data   |
| searchFilter        | The query conditions required for the table                                                                       |        object         | -               |    -     |
| isSelection         | Whether the table needs to be checked                                                                             |        boolean        | true、false     |   true   |
| isPagination        | Does the table need to be paginated                                                                               |        boolean        | true、false     |   true   |
| totalKey            | The key value corresponding to the number of table data                                                           |        string         |                 |   data   |
| selectionParentType | Table selection type                                                                                              |        string         | checkbox、radio | checkbox |
| immediate           | Whether to load the table data immediately (for some business logic requirements)                                 |        boolean        | true、false     |  false   |
| isCache             | Cache part of the base data (temporarily used for react-redux, corresponding to the key value of the cached data) |        string         | -               |    -     |
| showTableRadius     | Whether to hide the rounded corners at the top of the table                                                       |        boolean        | true、false     |  false   |
| multipleSelected    | Echo the table with selected data (rowKey defaults to id)                                                         |  string[]、number[]   | -               |    []    |

Note: more inheritance TableProps property, please refer to the Antd UI Table component documentation (https://ant-design.antgroup.com/components/table-cn).

## Methods

| Method Name        | Description                                         | Parameters         |
| ------------------ | --------------------------------------------------- | ------------------ |
| onUpdateSearch     | Click the callback for the search and reset buttons | formItem           |
| onUpdatePagination | Pagination callback function                        | pagination         |
| onUpdateSelection  | Check the callback function                         | foridAdrr, dataRow |
