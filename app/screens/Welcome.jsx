import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonText, InnerContainer, StyledButton, StyledContainer } from '../components/styles';
import { removeUserInfo } from '../redux/slices/userSlice';

const Welcome = ({ navigation }) => {
  //UseStates
  const dispatch = useDispatch();
  //private route
  const user = useSelector((state) => state.user);
  //Logic
  const handleSubmit = () => {
    dispatch(removeUserInfo());
    navigation.navigate('Login');
  };

  return (
    <StyledContainer>
      <Text>Welcome {user.userInfo.fullName}</Text>
      <InnerContainer>
        <StyledButton onPress={handleSubmit}>
          <ButtonText>Se déconnecter</ButtonText>
        </StyledButton>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Welcome;
