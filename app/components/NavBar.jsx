import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserInfo } from '../redux/slices/userSlice';
import { NavBarButton, NavBarButtonIcon, NavBarContainer, NavBarIcon, NavBarText, Colors, NavBarTitle } from './styles';
import { Octicons } from '@expo/vector-icons';

const NavBar = (props) => {
  //UseStates
  const dispatch = useDispatch();
  //private route
  const user = useSelector((state) => state.user);

  //colors
  const { tertiary, primary, brand } = Colors;
  //Logic
  const handlePress = () => {
    dispatch(removeUserInfo());
    props.navigation.navigate('Login');
    console.log('logout');
  };
  return (
    <NavBarContainer>
      <NavBarButton>
        <NavBarButtonIcon>
          <Octicons name="sign-out" size={25} color={brand} onPress={handlePress} />
        </NavBarButtonIcon>
      </NavBarButton>
      <NavBarText>
        Hi, <NavBarTitle>{props.name}</NavBarTitle>
      </NavBarText>
      <NavBarIcon>
        <Octicons name="person" size={25} color={tertiary} />
      </NavBarIcon>
    </NavBarContainer>
  );
};

export default NavBar;
