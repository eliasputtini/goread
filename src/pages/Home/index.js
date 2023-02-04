import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, Keyboard} from 'react-native';
import {RepositoryInfo} from '../../components/RepositoryInfo';
import {Container, Text, Input, Title} from './styles.js';

import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {getDataRequest} from '../../redux/action';

export function Home() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const {isLoading, isError, repoData, error} = useSelector(
    state => state,
    shallowEqual,
  );

  const handleGetData = async () => {
    Keyboard.dismiss();
    dispatch(getDataRequest(query, page));
  };

  const handleGetMoreData = async () => {
    if (isLoading) {
      return;
    }
    setPage(page + 1);
    Keyboard.dismiss();
    dispatch(getDataRequest(query, page, repoData));
  };

  if (isError) {
    return (
      <Container>
        <Text>An error occurred: {error.message}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Repositórios</Title>
      <Input
        placeholder="Busca por repositórios"
        placeholderTextColor="#48484a"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleGetData}
        returnKeyType="search"
      />

      <FlatList
        data={repoData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RepositoryInfo repo={item} />}
        onEndReached={handleGetMoreData}
        ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
      />
    </Container>
  );
}
