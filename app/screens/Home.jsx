import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonText, InnerContainer, StyledButton, StyledContainer } from '../components/styles';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user);

  return (
    <StyledContainer>
      <NavBar name={user.userInfo.fullName} navigation={navigation} />
      <Text>Welcome {user.userInfo.fullName}</Text>
    </StyledContainer>
  );
};

export default Home;
