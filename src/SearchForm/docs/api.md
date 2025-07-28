```javascript

```

# API

## Attributes

| Attribute     | Description                                                                                               |          Type           | Accepted Values | Default |
| ------------- | --------------------------------------------------------------------------------------------------------- | :---------------------: | --------------- | :-----: |
| gutterWidth   | The raster attribute is Row                                                                               |         number          | -               |   24    |
| isShowExpend  | Whether to display Collapse or collapse                                                                   |         boolean         | false           |
| showRow       | Expand and stretch to display at most a few lines                                                         |         number          | -               |    -    |
| columns       | Table columns(see the [**CustomColumn attribute **](#CustomColumn- attribute) below)                      |          array          | -               |    -    |
| btnSeparate   | Query the location of the redo button: 1. In the Form, it is on a separate line at the lower right corner |         boolean         | -               |    -    |
| labelPosition | The text alignment method of the label                                                                    | FormProps['labelAlign'] | -               |
| isShowReset   | Whether to display the reset button (the search button must exist)                                        |         string          | -               |  true   |
| searchBtnText | Default search for custom text                                                                            |         string          | -               | search  |
| resetBtnText  | Reset custom text by default                                                                              |         string          | -               |  reset  |
| iconHidden    | Display button icon                                                                                       |         boolean         | -               |  true   |

### CustomColumn Attribute

| Attribute    | Description                                                                                                                                                               |          Type          | Accepted Values                            | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: | ------------------------------------------ | :-----: |
| formType     | Display the type of the field                                                                                                                                             |         string         | input、normalSelect、cascader、date-picker |    -    |
| options      | The formType only takes effect in select and cascader                                                                                                                     | SelectProps['options'] | -                                          |    -    |
| span         | Raster attribute Col                                                                                                                                                      |         number         | -                                          |    6    |
| filterSearch | options that require asynchronous requests                                                                                                                                |        boolean         | -                                          |  false  |
| api          | Some options data needs to be obtained through a function, which returns a promise. To enable this property, filterSearch needs to be set to true (Todo: Not yet enabled) |        function        | -                                          |    -    |
| isRules      | Todo : form表单rules 暂时只支持基础空置校验                                                                                                                               |        boolean         | -                                          |  false  |
| defaultValue | Todo: form rules are currently only supported for basic vacant schools值                                                                                                  |        boolean         | -                                          |    -    |
| isRules      | In the select and cascader typesFileName                                                                                                                                  |    selectFileldName    | -                                          |    -    |

Note: more inheritance FormItemProps property, please refer to the Antd UI Form component documentation (https://ant-design.antgroup.com/components/form-cn).

## Methods

| Method Name    | Description                                         | Parameters |
| -------------- | --------------------------------------------------- | ---------- |
| onUpdateSearch | Click the callback for the search and reset buttons | formItem   |
