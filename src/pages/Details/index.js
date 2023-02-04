import React from 'react';

import {WebView} from 'react-native-webview';

export function Details(props) {
  const {html_url} = props.route.params.item;

  return <WebView source={{uri: html_url}} />;
}
