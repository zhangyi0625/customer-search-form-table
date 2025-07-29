import type { SelectProps, FormItemProps, FormProps } from 'antd';

type FormItemType = Pick<FormItemProps, 'label' | 'name' | 'hidden'>;

export interface CustomColumn extends FormItemType {
  /** formItem 类型 */
  formType: 'input' | 'normalSelect' | 'cascader' | 'date-picker' | string;
  /** select || cascader */
  options?: SelectProps['options'] | never;
  /** Col */
  span: number;
  // tag?: string | undefined | 'POR' | 'FND';
  /** select搜索需要通过接口 */
  api?: any;
  /** 需要异步请求的options */
  filterSearch?: boolean;
  // Todo : form表单rules 暂时只支持基础空置校验
  isRules?: boolean;
  // 设置formItem初始值
  defaultValue?: string | null;
  /** select、cascader中FileName */
  selectFileldName?: SelectProps['fieldNames'] | null;
  /** 是否显示formItem 用于tab切换时存在不同的查询表头 */
  hiddenItem: boolean;
}

export type SearchFormPorps = {
  /** Row */
  gutterWidth: number;
  /** 是否显示展开、收缩（Collapse） */
  isShowExpend: boolean;
  /** 展开伸缩至多展示几行 */
  showRow?: number;
  /** form columns */
  columns: CustomColumn[];
  /** 查询重制按钮所在位置 1、在Form中 2、单独一行在右下角 */
  btnSeparate: boolean;
  /** labelPosition */
  labelPosition: FormProps['labelAlign'];
  /** 是否展示重置按钮（搜索按钮必须存在） */
  isShowReset: boolean;
  /** 搜索自定义文字 默认搜索 */
  searchBtnText?: string | '重置';
  /** 重置自定义文字 默认重置 */
  resetBtnText?: string | '重置';
  /** 显示按钮icon */
  iconHidden: boolean;
  /** 搜索、重置点击回调 */
  onUpdateSearch: (filter?: unknown) => void;
};
