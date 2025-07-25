import { Button, SearchForm } from '../src/index';

const App = () => {
  const handleClick = () => {
    console.log('handleClick');
  };

  const onUpdateSearch = (info) => {
    console.log('onUpdateSearch', info);
  };

  const columns = [
    {
      label: '测试',
      name: 'test',
      formType: 'input',
      span: 6,
    },
    {
      label: '测试1',
      name: 'test1',
      formType: 'input',
      span: 6,
    },
    {
      label: '测试2',
      name: 'test2',
      formType: 'input',
      span: 6,
    },
    {
      label: '测试3',
      name: 'test3',
      formType: 'input',
      span: 6,
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
      span: 6,
    },
    {
      label: 'porCode',
      name: 'porCode',
      formType: 'normalSelect',
      options: [],
      span: 6,
      // filterSearch: true,
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
      span: 6,
    },
    {
      label: 'fndCode',
      name: 'fndCode',
      formType: 'normalSelect',
      options: [],
      span: 6,
    },
    {
      label: 'area',
      name: 'router',
      formType: 'normalSelect',
      options: [],
      selectFileldName: {
        label: 'routeName',
        value: 'id',
      },
      span: 6,
    },
    {
      label: 'date',
      name: 'create',
      formType: 'date-picker',
      span: 6,
    },
  ];

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
        btnSeparate={true}
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
