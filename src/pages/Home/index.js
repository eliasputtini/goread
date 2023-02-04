import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator, Keyboard} from 'react-native';
import {getSearchRepo} from '../../services/api.js';
import {
  Container,
  Text,
  Input,
  Title,
  Container2,
  ProfilePicture,
  InfoContainer,
  OwnerName,
  RepoName,
  StarsContainer,
  Stars,
  NamesContainer,
} from './styles.js';

const RepositoryInfo = ({repo}) => {
  console.log(repo.name);
  return (
    <Container2>
      <InfoContainer>
        <ProfilePicture source={{uri: repo.owner.avatar_url}} />
        <NamesContainer>
          <OwnerName>{repo.owner.login}</OwnerName>
          <RepoName>{repo.name}</RepoName>
        </NamesContainer>
      </InfoContainer>
      <StarsContainer>
        <Stars>{repo.stargazers_count} stars</Stars>
      </StarsContainer>
    </Container2>
  );
};

export function Home() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const result = await getSearchRepo(
        `${query}in:name&page=${page}&per_page=10`,
      );
      setData(result.items);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    handleSubmit();
  };

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  if (error) {
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
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
      />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RepositoryInfo repo={item} />}
        onEndReached={handleLoadMore}
        ListFooterComponent={loading && <ActivityIndicator size="large" />}
      />

      {loading && data.length < 1 ? (
        <>
          <ActivityIndicator size="large" />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
