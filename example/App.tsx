import { useState } from 'react';
import { Button, SearchForm } from '../src/index';
import axios from 'axios';

const getLocation = () => {
  return axios.get('/api/common/carrier/brand/list', {});
};

const App = () => {
  const handleClick = () => {
    console.log('handleClick');
    columns.map((item) => {
      if (item.formType === 'normalSelect') item.hiddenItem = true;
    });
    setColumns([...columns]);
  };

  const onUpdateSearch = (info) => {
    console.log('onUpdateSearch', info);
  };

  const column = [
    {
      label: '测试',
      name: 'test',
      formType: 'input',
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
    {
      label: '测试1',
      name: 'test1',
      formType: 'input',
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
    {
      label: '测试2',
      name: 'test2',
      formType: 'input',
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
    {
      label: '测试3',
      name: 'test3',
      formType: 'normalSelect',
      options: [],
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
    {
      label: '测试4',
      name: 'test4',
      formType: 'normalSelect',
      options: [],
      selectFetch: true,
      api: getLocation,
      selectFileldName: {
        label: 'carrierCode',
        value: 'carrierCode',
      },
      selectResultKey: 'data',
      span: 6,
      hiddenItem: false,
    },
    {
      label: '测试5',
      name: 'test5',
      formType: 'normalSelect',
      options: [
        {
          label: '一一一',
          value: 1,
        },
        {
          label: '二二二',
          value: 2,
        },
        {
          label: '三三三',
          value: 3,
        },
        {
          label: '四四四',
          value: 4,
        },
      ],
      selectFetch: false,
      span: 6,
      hiddenItem: false,
    },
    {
      label: '是否启用',
      name: 'enabled',
      formType: 'normalSelect',
      options: [
        {
          label: '启用',
          value: 1,
        },
        {
          label: '不启用',
          value: 0,
        },
      ],
      defaultValue: 1,
      span: 6,
      selectFetch: false,
      hiddenItem: false,
    },
    {
      label: 'porCode',
      name: 'porCode',
      formType: 'focusSelect',
      options: [],
      selectFetch: true,
      apiByUrl: '/api/common/location/list',
      apiByUrlMethod: 'get',
      apiByUrlParams: {
        tag: 'POR',
        keyword: null,
      },
      selectFileldName: {
        label: 'localName',
        value: 'unlocode',
      },
      selectResultKey: 'data',
      span: 6,
      hiddenItem: false,
    },
    {
      label: '搜索测试',
      name: 'select',
      formType: 'normalSelect',
      options: [
        {
          name: '111',
          value: '111',
        },
        {
          name: '222',
          value: '222',
        },
      ],
      selectFileldName: {
        label: 'name',
        value: 'value',
      },
      selectFetch: false,
      span: 6,
      hiddenItem: false,
    },
    {
      label: 'fndCode',
      name: 'fndCode',
      formType: 'normalSelect',
      options: [],
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
    {
      label: 'area',
      name: 'router',
      formType: 'normalSelect',
      options: [],
      selectFetch: false,
      selectFileldName: {
        label: 'routeName',
        value: 'id',
      },
      hiddenItem: false,
      span: 6,
    },
    {
      label: 'date',
      name: 'create',
      formType: 'date-picker',
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
  ];

  const [columns, setColumns] = useState(column);

  //   GITHUB_TOKEN: secrets.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
  // NPM_TOKEN: secrets.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

  return (
    <>
      <div className="">Hellop World</div>
      <Button
        label="测试button"
        size="medium"
        onClick={() => handleClick()}
      ></Button>
      <SearchForm
        columns={columns}
        gutterWidth={24}
        labelPosition="left"
        showRow={2}
        btnSeparate={false}
        isShowReset={true}
        isShowExpend={true}
        iconHidden={true}
        searchBtnText="查询"
        onUpdateSearch={onUpdateSearch}
      />
    </>
  );
};

export default App;
