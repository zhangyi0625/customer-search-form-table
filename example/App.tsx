import { Button, SearchForm } from '../src/index';

const App = () => {
  const handleClick = () => {
    console.log('handleClick');
  };

  const onUpdateSearch = () => {
    console.log('onUpdateSearch');
  };

  const columns = [
    {
      label: '测试',
      name: 'test',
      formType: 'input',
      span: 6,
    },
    {
      label: '起运港',
      name: 'porCode',
      formType: 'normalSelect',
      options: [],
      span: 6,
    },
    {
      label: '目的港',
      name: 'fndCode',
      formType: 'normalSelect',
      options: [],
      span: 6,
    },
    {
      label: '细分航线',
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
      label: '放舱日期',
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
        btnSeparate={true}
        isShowReset={true}
        isShowExpend={false}
        onUpdateSearch={() => onUpdateSearch()}
      />
    </>
  );
};

export default App;
