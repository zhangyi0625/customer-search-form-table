import './index.scss';
import React, { memo, useEffect, useState } from 'react';
import { Empty, Spin, Table, TableProps } from 'antd';
import { TablePaginationConfig } from 'antd/lib';
import type { SearchTableProps } from './type';

export const SearchTable: React.FC<SearchTableProps> = memo((props) => {
  const {
    columns,
    fetchData,
    searchFilter,
    rowKey = 'id',
    isSelection = true,
    isPagination = true,
    fetchResultKey = 'data',
    totalKey = 'total',
    selectionParentType = 'checkbox',
    immediate = false,
    multipleSelected = [],
    pageIndexKey = 'pageIndex',
    pageSizeKey = 'pageSize',
    onUpdatePagination,
    onUpdateSelection,
  } = props;

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox',
  );

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[] | number[]>(
    [],
  );

  const [tableEmptyText, setTableEmptyText] = useState<string>('暂无数据');

  const [currentPagination, setCurrentPagination] =
    useState<TablePaginationConfig>({
      current: 1,
      pageSize: 10,
      total: 0,
    });

  const loadTableData = async (paginationConfig = currentPagination) => {
    setLoading(true);
    try {
      const response = await fetchData(searchFilter);
      if (
        response.data &&
        response.data.code &&
        response.data.code == 500 &&
        response.data.error
      ) {
        setTableEmptyText('操作异常，详情查看接口报错error');
        setTableData([]);
        setCurrentPagination({
          ...paginationConfig,
          total: 0,
        });
        setSelectedRowKeys(multipleSelected.length ? multipleSelected : []);
        return;
      }
      const data = response.data ? response.data : response;
      const resp = data[fetchResultKey] ?? data;
      setTableData(resp);
      setCurrentPagination({
        ...paginationConfig,
        current: searchFilter[pageIndexKey],
        pageSize: searchFilter[pageSizeKey],
        total: data[totalKey],
      });
      setSelectedRowKeys(multipleSelected.length ? multipleSelected : []);
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!immediate) {
      loadTableData();
    }
    setSelectionType(selectionParentType ?? selectionType);
  }, [
    // currentPagination.pageSize,
    // currentPagination.pageSizeOptions,
    immediate,
    selectionParentType,
    searchFilter,
  ]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setCurrentPagination({
      ...currentPagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
    onUpdatePagination(pagination);
  };

  const rowSelection: TableProps['rowSelection'] = {
    selectedRowKeys,
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      if (onUpdateSelection && isSelection) {
        onUpdateSelection(
          selectedRows.map((item: any) => item[rowKey as string]),
          selectedRows,
        );
        setSelectedRowKeys(
          selectedRows.map((item: any) => item[rowKey as string]),
        );
      }
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Spin spinning={loading}>
      <Table
        className={'search-table'}
        {...props}
        columns={columns}
        dataSource={tableData}
        pagination={isPagination && currentPagination}
        onChange={handleTableChange}
        rowSelection={
          isSelection
            ? {
                type: selectionType,
                ...rowSelection,
              }
            : undefined
        }
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={tableEmptyText ?? ''}
            ></Empty>
          ),
        }}
      />
    </Spin>
  );
});
