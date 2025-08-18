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

  const [selected, setSelected] = useState<string[] | number[]>([]);

  const getCabinManageListByPage = () => {
    return axios.get('/api/customer/frt/order/page', {
      headers: {
        authorization: 'Bearer 95c5bc360ee8457eb4afb97701187ab0',
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
    setSelected([1097]);
    console.log(info, 'info', selected);
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
      setSearchKey: 'keyword',
      apiByUrlHeaders: {
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
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
      label: null,
      name: 'customPlaceholder',
      customPlaceholder: '自定义组件的提示语:customPlaceholder',
      formType: 'input',
      span: 6,
      hiddenItem: false,
      selectFetch: false,
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

  const exampleColumns = [
    {
      label: null,
      name: 'enabled',
      formType: 'normalSelect',
      customPlaceholder: '请选择目标客户',
      options: [
        {
          label: '全部客户',
          value: '',
        },
        {
          label: '1',
          value: 1,
        },
        {
          label: '2',
          value: 0,
        },
      ],
      defaultValue: '',
      span: 6,
      selectFetch: false,
      hiddenItem: false,
    },
    {
      label: null,
      name: 'testselect',
      formType: 'normalSelect',
      customPlaceholder: '请选择',
      options: [
        {
          name: '全部客户',
          id: 'null',
        },
        {
          name: '1',
          id: 1 * 1,
        },
        {
          name: '2',
          id: 2 * 2,
        },
        {
          name: '54',
          id: 54 * 54,
        },
      ],
      selectFileldName: {
        label: 'name',
        value: 'id',
      },
      span: 6,
      selectFetch: false,
      hiddenItem: false,
    },
    {
      label: null,
      name: 'project',
      customPlaceholder: '请输入项目编号或项目名称',
      formType: 'input',
      span: 6,
      selectFetch: false,
      hiddenItem: false,
    },
    {
      label: null,
      name: 'name',
      customPlaceholder: '请输入客户名称或手机号',
      formType: 'input',
      span: 6,
      selectFetch: false,
      hiddenItem: false,
    },
    {
      label: null,
      name: 'customer',
      customPlaceholder: '业务员',
      formType: 'input',
      span: 6,
      selectFetch: false,
      hiddenItem: false,
    },
    {
      label: null,
      name: 'create',
      formType: 'date-picker',
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
    {
      label: 'date',
      name: 'createTime',
      formType: 'date-picker',
      span: 6,
      hiddenItem: false,
      selectFetch: false,
    },
  ];

  return (
    <>
      <div className="">Hellop World</div>
      <div onClick={() => handleClick()}>测试button</div>
      <Card style={{ margin: '20px 0' }}>
        <SearchForm
          columns={column}
          gutterWidth={24}
          labelPosition="left"
          showRow={1}
          defaultFormItemLayout={{
            labelCol: {
              xs: { span: 24 },
              sm: { span: 0 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 24 },
            },
          }}
          btnSeparate={false}
          isShowReset={true}
          isShowExpend={true}
          iconHidden={true}
          searchBtnText="查询"
          advancedFilterText={['展开', '收起']}
          onUpdateSearch={onUpdateSearch}
        />
      </Card>
      <Card style={{ margin: '20px 0' }}>
        <SearchForm
          columns={exampleColumns}
          gutterWidth={24}
          labelPosition="left"
          showRow={1}
          defaultFormItemLayout={{
            labelCol: {
              xs: { span: 24 },
              sm: { span: 0 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 24 },
            },
          }}
          btnSeparate={false}
          isShowReset={true}
          isShowExpend={true}
          iconHidden={true}
          searchBtnText="查询"
          advancedFilterText={['展开', '收起']}
          onUpdateSearch={onUpdateSearch}
        />
      </Card>
      <Card style={{ margin: '20px 0' }}>
        <div
          style={{ background: '#fafafa' }}
          className="h-[54px] leading-[54px] w-full mt-[8px] flex items-center px-[12px]"
        ></div>
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
          multipleSelected={selected ?? []}
          isSelection={true}
          selectionParentType="radio"
          isPagination={true}
          onUpdatePagination={onUpdatePagination}
          onUpdateSelection={(options: string[] | number[]) =>
            setSelected(options)
          }
        />
      </Card>
    </>
  );
};

export default App;
