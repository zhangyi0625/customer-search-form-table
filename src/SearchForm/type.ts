import type { SelectProps, FormItemProps, FormProps } from 'antd';

type FormItemType = Pick<FormItemProps, 'label' | 'name'>;

export interface CustomColumn extends FormItemType {
  /** formItem 类型 */
  formType:
    | 'input'
    | 'normalSelect'
    | 'cascader'
    | 'date-picker'
    | 'focusSelect'
    | string;
  /** select || cascader */
  options?: SelectProps['options'] | never;
  /** Col */
  span: number;
  /** 需要异步请求的options */
  selectFetch: boolean;
  /** select搜索需要通过接口,函数返回一个promise,设置该属性后，apiByUrl属性则无效 */
  api?: any;
  /** 异步请求返回结果response的key值 */
  selectResultKey?: 'data' | string;
  /** select搜索需要通过接口地址，设置该属性后，selectFetch属性则无效（设置该属性基本用于select下拉框展开时搜索远程数据，需要将formType改为focusSelect） */
  apiByUrl?: string;
  /** 接口地址调用方法，该属性配合apiByUrl使用 */
  apiByUrlMethod?: 'get' | 'post' | string;
  /** 接口地址需要传的参数，该属性配合apiByUrl使用 */
  apiByUrlParams?: object;
  /** 接口地址需要的请求头信息，该属性配合apiByUrl使用 */
  apiByUrlHeaders?: object;
  /** 远程搜索关键字 配合接口传参属性（注：该属性值必须存在apiByUrlParams中，设置后会把select组件的filterOption设置为false），该属性配合apiByUrl使用 */
  setSearchKey?: string;
  // Todo : form表单rules 暂时只支持基础空置校验
  isRules?: boolean;
  // 设置formItem初始值
  defaultValue?: string | number | null;
  /** select、cascader中FileName */
  selectFileldName?: SelectProps['fieldNames'] | null;
  /** 是否显示formItem 用于tab切换时存在不同的查询表头 */
  hiddenItem: boolean;
  /** 自定义组件的提示语（推荐在formItem中label为null时设置） */
  customPlaceholder?: string | null | string[];
}

export type SearchFormPorps = {
  /** Row */
  gutterWidth: number;
  /** 是否显示展开(Expend)、收起（Collapse） */
  isShowExpend: boolean;
  /** 搜索条件展开、收起文字（高级筛选） */
  advancedFilterText?: string[];
  /** 展开伸缩至多展示几行 */
  showRow?: number;
  /** form columns */
  columns: CustomColumn[];
  /** 查询重制按钮所在位置 1、在Form中 2、单独一行在右下角 */
  btnSeparate: boolean;
  /** labelPosition */
  labelPosition: FormProps['labelAlign'];
  /** label标签布局以及控件布局 */
  defaultFormItemLayout?: {
    labelCol: FormItemProps['labelCol'];
    wrapperCol: FormItemProps['wrapperCol'];
  };
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
