import { ConfigProvider, App as AntdApp } from 'antd';
import { antdTheme } from '../../config/theme';

export default function AppProviders({ children }) {
  return (
    <ConfigProvider theme={antdTheme}>
      <AntdApp component={false}>{children}</AntdApp>
    </ConfigProvider>
  );
}
