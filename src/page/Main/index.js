import React, { useState } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Discription,
  Annotation,
  ButtomVisiblity,
} from './styles';

const Main = ({ themeSwitcher }) => {
  const [visibility, setVisibility] = useState(true);
  const translateY = new Animated.Value(0);
  let offset = 0;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header openCard={false} />

      <Content>
        <Menu themeSwitcher={themeSwitcher} translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <Title>
                <Icon name="attach-money" size={28} color="#666" />
                <Title>Conta</Title>
              </Title>
              <ButtomVisiblity onPress={() => setVisibility(!visibility)}>
                <Icon name="visibility-off" size={28} color="#666" />
              </ButtomVisiblity>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Discription visibility={visibility}>R$ 458.365,14</Discription>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 800,00 recebida de Thiago Santos Rocha ontem
                às 21:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
