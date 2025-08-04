import { useEffect, useState } from 'react';
import { SearchForm } from '../src/index';
import { SearchTable } from '../src/index';
import axios from 'axios';
import { Button, Card, Space, TableProps } from 'antd';
import { formatTime } from '../src/utils/format';

const getLocation = () => {
  return axios.get('/api/common/carrier/brand/list', {});
};

const App = () => {
  const [immediate, setImmediate] = useState<boolean>(false);

  const [selected, setSelected] = useState<string[]>([]);

  const getCabinManageListByPage = () => {
    return axios.get('/api/customer/frt/order/page', {
      headers: {
        authorization: 'Bearer 721f250ef87742b29373a0b0ac26bb65',
      },
      params: {
        ...searchDefaultForm,
      },
    });
  };
  const handleClick = () => {
    columns.map((item) => {
      if (item.formType === 'normalSelect') item.hiddenItem = true;
    });
    setColumns([...columns]);
    setImmediate(false);
  };

  const onUpdateSearch = (info) => {
    setSearchDefaultForm({ ...searchDefaultForm });
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

  const tableColumns: TableProps['columns'] = [
    {
      title: '船公司',
      key: 'carrier',
      dataIndex: 'carrier',
      align: 'center',
    },
    {
      title: '订单号',
      key: 'orderNo',
      dataIndex: 'orderNo',
      align: 'center',
    },
    {
      title: '起运港',
      key: 'por',
      align: 'center',
      render(value) {
        return (
          <div>
            {value.por.localName}-{value.por.name}
          </div>
        );
      },
    },
    {
      title: '目的港',
      key: 'fnd',
      align: 'center',
      render(value) {
        return (
          <div>
            {value.fnd.localName}-{value.fnd.name}
          </div>
        );
      },
    },
    {
      title: '公司名称',
      key: 'affiliateName',
      dataIndex: 'affiliateName',
      align: 'center',
    },
    {
      title: '细分航线',
      key: 'routeName',
      align: 'center',
      render(value) {
        return <div>{value.routeName}</div>;
      },
    },
    {
      title: 'ETD',
      key: 'etd',
      align: 'center',
      render(value) {
        return <div>{formatTime(value.etd, 'Y-M-D')}</div>;
      },
    },
    {
      title: '放舱时间',
      key: 'cabinTime',
      align: 'center',
      render(value) {
        return <div>{value.cabinTime}</div>;
      },
    },
    {
      title: '操作',
      width: '8%',
      dataIndex: 'action',
      fixed: 'right',
      align: 'center',
      render(_, record) {
        return (
          <Space>
            <Button
              type="default"
              onClick={() => setOperationLog({ visible: true, id: record.id })}
            >
              操作日志
            </Button>
          </Space>
        );
      },
    },
  ];

  const setOperationLog = ({}) => {};

  const [searchDefaultForm, setSearchDefaultForm] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const onUpdatePagination = (pagination: any) => {
    setSearchDefaultForm({
      ...searchDefaultForm,
      pageIndex: pagination.current as number,
      pageSize: pagination.pageSize as number,
    });
  };

  useEffect(() => {}, [immediate]);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 19 },
    },
  };

  return (
    <>
      <div className="">Hellop World</div>
      <div onClick={() => handleClick()}>测试button</div>
      <div style={{ margin: '20px 0' }}></div>
      <Card>
        <SearchForm
          columns={column}
          gutterWidth={24}
          labelPosition="left"
          showRow={2}
          defaultFormItemLayout={formItemLayout}
          btnSeparate={false}
          isShowReset={true}
          isShowExpend={true}
          iconHidden={true}
          searchBtnText="查询"
          advancedFilterText={['收起', '展开']}
          onUpdateSearch={onUpdateSearch}
        />
      </Card>
      <div style={{ margin: '20px 0' }}></div>
      <Card>
        <SearchTable
          columns={tableColumns}
          size="middle"
          bordered
          rowKey="id"
          immediate={immediate}
          totalKey="total"
          scroll={{ x: 'max-content', y: 358 }}
          fetchData={getCabinManageListByPage}
          searchFilter={searchDefaultForm}
          fetchResultKey="entries"
          isSelection={true}
          isPagination={true}
          onUpdatePagination={onUpdatePagination}
          onUpdateSelection={(options: string[]) => setSelected(options)}
        />
      </Card>
    </>
  );
};

export default App;
