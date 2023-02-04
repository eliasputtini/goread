import styled from 'styled-components/native';
import {TextInput, Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 16px;
  justify-content: center;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: left;
  color: black;
  ${Platform.select({
    android: `
      font-family: 'SFProDisplay-Semibold';
      font-size: 50px
    `,
  })}
`;

export const Text = styled.Text`
  color: #48484a;
  font-size: 16px;
  ${Platform.select({
    android: `
      font-family: 'SFProDisplay-Regular';
    `,
  })}
  margin: 8px;
`;

export const Input = styled(TextInput)`
  width: 100%;
  margin: 40px;
  padding: 10px;
  border-radius: 5px;
  color: #48484a;
  background-color: #eeeeef;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Container2 = styled.View`
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
