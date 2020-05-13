import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const Content = styled.View`
  flex: 1;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  max-height: 400px;

  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #999;
  font-size: 13px;
`;

export const Discription = styled.Text`
  color: ${(props) => (props.visibility ? '#333' : '#eee')};
  font-size: 32px;
  margin-top: 3px;
  background: ${(props) => (props.visibility ? '#fff' : '#eee')};
`;

export const Annotation = styled.Text`
  background: #eee;
  padding: 30px;
  border-radius: 4px;
`;
export const CardFooter = styled.View`
  color: #333;
  font-size: 12px;
`;

export const ButtomVisiblity = styled.TouchableOpacity``;
