```javascript

```

# API

## Attributes

| Attribute             | Description                                                                                               |          Type           | Accepted Values |                                            Default                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------- | :---------------------: | --------------- | :--------------------------------------------------------------------------------------------: |
| gutterWidth           | The raster attribute is Row                                                                               |         number          | -               |                                               24                                               |
| isShowExpend          | Whether to display expansion (Expend) Collapse (Collapse) collapse                                        |         boolean         | true、false     |                                             false                                              |
| advancedFilterText    | Search conditions expand, collapse text (Advanced filtering)                                              |        string[]         | -               |                                      [ Collapse, Expend ]                                      |
| showRow               | Expand and stretch to display at most a few lines                                                         |         number          | -               |                                               -                                                |
| columns               | Table columns(see the [**CustomColumn attribute **](#CustomColumn- attribute) below)                      |          array          | -               |                                               -                                                |
| btnSeparate           | Query the location of the redo button: 1. In the Form, it is on a separate line at the lower right corner |         boolean         | true、false     |                                              true                                              |
| labelPosition         | The text alignment method of the label                                                                    | FormProps['labelAlign'] | left、right     |                                              left                                              |
| defaultFormItemLayout | label layout and control layout                                                                           |         object          | -               | {labelCol: {xs: { span: 24 },sm: { span: 6 }},wrapperCol: {xs: { span: 24 },sm: { span: 18 }}} |
| isShowReset           | Whether to display the reset button (the search button must exist)                                        |         string          | true、false     |                                              true                                              |
| searchBtnText         | Default search for custom text                                                                            |         string          | -               |                                             search                                             |
| resetBtnText          | Reset custom text by default                                                                              |         string          | -               |                                             reset                                              |
| iconHidden            | Display button icon                                                                                       |         boolean         | true、false     |                                             false                                              |

### CustomColumn Attribute

| Attribute         | Description                                                                                                                                                              |          Type          | Accepted Values                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------: | -------------------------------------------------------- | :-----: |
| formType          | Display the type of the field                                                                                                                                            |         string         | input、normalSelect、cascader、date-picker、range-picker |    -    |
| options           | The formType only takes effect in select and cascader                                                                                                                    | SelectProps['options'] | -                                                        |    -    |
| span              | Raster attribute Col                                                                                                                                                     |         number         | -                                                        |    6    |
| selectFetch       | options that require asynchronous requests                                                                                                                               |        boolean         | -                                                        |  false  |
| api               | Some options data needs to be obtained through a function, which returns a promise. To enable this property, selectFetch needs to be set to true (Todo: Not yet enabled) |        function        | -                                                        |    -    |
| selectResultKey   | The key of the response returned by the asynchronous reques值                                                                                                            |         string         | -                                                        |  data   |
| isRules           | Todo: form rules are currently only supported for basic vacant schools验                                                                                                 |        boolean         | -                                                        |  false  |
| defaultValue      | Set the initial value of formItem值                                                                                                                                      |         string         | -                                                        |    -    |
| selectFileldName  | In the select and cascader typesFileName                                                                                                                                 |    selectFileldName    | -                                                        |  null   |
| hiddenItem        | Whether formItem is displayed when there are different query headers for tab switching                                                                                   |        boolean         | -                                                        |  false  |
| customPlaceholder | The prompt for custom components (recommended to be set when the label in formItem is null)                                                                              |         string         | -                                                        |  null   |

Note: more inheritance FormItemProps property, please refer to the Antd UI Form component documentation (https://ant-design.antgroup.com/components/form-cn).

## Methods

| Method Name    | Description                                         | Parameters |
| -------------- | --------------------------------------------------- | ---------- |
| onUpdateSearch | Click the callback for the search and reset buttons | formItem   |
