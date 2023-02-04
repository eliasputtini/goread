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
