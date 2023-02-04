import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 16px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NamesContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const OwnerName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #48484a;
`;

export const RepoName = styled.Text`
  font-size: 16px;
  color: #48484a;
`;

export const StarsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Stars = styled.Text`
  font-size: 16px;
  color: #48484a;
  margin-left: 16px;
`;
