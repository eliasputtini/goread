import React from 'react';
import {
  Container,
  ProfilePicture,
  InfoContainer,
  OwnerName,
  RepoName,
  StarsContainer,
  Stars,
  NamesContainer,
} from './styles.js';

import {useNavigation} from '@react-navigation/native';

export const RepositoryInfo = ({repo}) => {
  const navigation = useNavigation();

  const handleNavigate = item => {
    navigation.navigate('Detalhes', {item});
  };
  return (
    <Container onPress={() => handleNavigate(repo.html_url)}>
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
    </Container>
  );
};
