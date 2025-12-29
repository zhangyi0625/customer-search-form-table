import React from 'react';
// @ts-ignore  // 临时忽略类型声明缺失，等待官方 @types/react-dom 支持 React 19
import { createRoot } from 'react-dom/client';
import App from './App';
// 由于 React 19 调整了 react-dom 的导出方式，导致 antd 无法直接使用 ReactDOM.render 方法
//  https://blog.csdn.net/cli_3/article/details/147750160
import '@ant-design/v5-patch-for-react-19';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    // <React.StrictMode>
    <App />,
    // </React.StrictMode>,
  );
}
