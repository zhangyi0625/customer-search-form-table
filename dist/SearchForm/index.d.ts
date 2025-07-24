import { SelectProps } from 'antd';
export interface CustomColumn {
    label: string;
    name: string;
    api?: any;
    formType: string;
    options?: SelectProps['options'];
    publicSettingKey?: string;
    span: number;
    tag?: string | undefined | 'POR' | 'FND';
    filterSearch?: boolean;
    isRules?: boolean;
    defaultValue?: string | null;
    hidden?: boolean;
    selectFileldName?: {
        label: string;
        value: string;
        children?: string;
    };
}
type SearchFormPorps = {
    gutterWidth: number;
    showRow?: number;
    columns: CustomColumn[];
    btnSeparate: boolean;
    labelPosition: 'left' | 'right';
    isShowReset: boolean;
    isShowExpend: boolean;
    onUpdateSearch: (filter?: unknown) => void;
};
export declare const SearchForm: React.FC<SearchFormPorps>;
export {};
