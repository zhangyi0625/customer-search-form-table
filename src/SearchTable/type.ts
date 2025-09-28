import type { TablePaginationConfig, TableProps } from 'antd';

export interface SearchTableProps
  extends Omit<TableProps, 'columns' | 'datasource'> {
  /** 表格列项 */
  columns: TableProps['columns'];
  /** 返回表格数据函数，返回一个promise */
  fetchData: (pagination: TablePaginationConfig | any) => Promise<any>;
  /** 异步请求返回结果response的key值 */
  fetchResultKey?: 'data' | string;
  /** 表格所需要的查询条件 */
  searchFilter?: any;
  /** 表格是否需要表格勾选 */
  isSelection: boolean;
  /** 表格是否需要分页 */
  isPagination: boolean;
  /** 表格数据数量对应的key值 */
  totalKey: string;
  /** 表格勾选类型checkbox || radio */
  selectionParentType?: 'checkbox' | 'radio';
  /** 是否立马加载表格数据（针对部分业务逻辑需要） */
  immediate?: boolean;
  /** 缓存部分基数数据 (暂时用于react-redux,对应缓存数据的key值) */
  isCache?: string;
  /** 回显表格勾选数据（rowKey默认为id） */
  multipleSelected?: string[] | number[];
  /** 页码数 的 key 值 */
  pageIndexKey?: string;
  /** 每页展示个数 的 key 值 */
  pageSizeKey?: string;
  /** 分页回调函数 */
  onUpdatePagination: (pagination: TablePaginationConfig) => void;
  /** 勾选回调函数 */
  onUpdateSelection?: (idAdrr: string[], dataRow?: any) => void;
}
