import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, Keyboard} from 'react-native';
import {RepositoryInfo} from '../../components/RepositoryInfo';
import {Container, Text, Input, Title} from './styles.js';

import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {getDataRequest, getMoreDataRequest} from '../../redux/action';

export function Home() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const {isLoading, isError, repoData} = useSelector(
    state => state,
    shallowEqual,
  );

  useEffect(() => {
    console.log(repoData.length);
  }, [repoData]);

  const handleGetData = async () => {
    Keyboard.dismiss();
    setPage(page + 1);
    dispatch(getDataRequest(query, page));
  };

  const handleGetMoreData = async () => {
    if (isLoading) {
      return;
    }
    setPage(page + 1);
    Keyboard.dismiss();
    dispatch(getMoreDataRequest(query, page, repoData));
  };

  if (isError) {
    return (
      <Container>
        <Text>Erro ao buscar, tente novamente em alguns minutos</Text>
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
        style={{width: '100%'}}
        renderItem={({item}) => <RepositoryInfo repo={item} />}
        onEndReached={!isLoading && repoData.length > 1 && handleGetMoreData}
        ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
      />
    </Container>
  );
}
