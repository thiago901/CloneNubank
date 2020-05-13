import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';
import logo from '../../assets/Nubank_Logo.png';

const Header = ({ openCard }) => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Thiago</Title>
      </Top>
      <Icon
        name={openCard ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
        size={20}
        color="#fff"
      />
    </Container>
  );
};

export default Header;
