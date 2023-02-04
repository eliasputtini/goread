import styled from 'styled-components/native';

import {WebView} from 'react-native-webview';

export const WebViewDetails = styled(WebView)`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 16px;
  justify-content: center;
`;
