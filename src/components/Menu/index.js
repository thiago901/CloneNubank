import React from 'react';
import { Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode-generator';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignoutButtom,
  SignoutButtomText,
} from './styles';

const Menu = ({ translateY, themeSwitcher }) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          value="https://google.com"
          size={90}
          bgColor={themeSwitcher.darkModeValue ? '#2d3436' : '#8b10ae'}
          fgColor="#fff"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajude</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configuração do cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configuração do App</NavText>
        </NavItem>
        <NavItem>
          <Icon name="style" size={20} color="#FFF" />
          <NavText>
            {themeSwitcher.darkModeValue ? 'Modo Dark' : 'Modo Normal'}
          </NavText>
          <Switch
            value={themeSwitcher.darkModeValue}
            onValueChange={themeSwitcher.onDarkChangeMode}
          />
        </NavItem>
      </Nav>
      <SignoutButtom onPress={() => {}}>
        <SignoutButtomText>SAIR DO APP</SignoutButtomText>
      </SignoutButtom>
    </Container>
  );
};

export default Menu;
