import React from 'react';
import { Button, SearchForm } from '../src/index';

const App = () => {
  const handleClick = () => {
    console.log('handleClick');
  };

  const onUpdateSearch = () => {
    console.log('onUpdateSearch');
  };

  return (
    <>
      <div className="">Hellop World</div>
      <Button
        label="测试button"
        size="medium"
        onClick={() => handleClick()}
      ></Button>
      <SearchForm
        columns={[]}
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
