import React from 'react';

import {WebViewDetails} from './styles';

export function Details(props) {
  const html_url = props.route.params.item;

  return <WebViewDetails source={{uri: html_url}} />;
}
