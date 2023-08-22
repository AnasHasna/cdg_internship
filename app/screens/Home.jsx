import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonText, InnerContainer, StyledButton, StyledContainer } from '../components/styles';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import CreateProject from '../components/CreateProject';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user);

  return (
    <StyledContainer>
      <NavBar name={user.userInfo.fullName} navigation={navigation} />
      <CreateProject />
    </StyledContainer>
  );
};

export default Home;
