import React, { useState } from 'react';
import {
  ButtonText,
  Colors,
  InnerContainer,
  LeftIcon,
  PageLogo,
  PageTitle,
  RightIcon,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  ErrorMessage,
} from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik, useFormikContext } from 'formik';
import { View } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import * as Yup from 'yup';
import { auth } from '../api/authApi';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/slices/userSlice';

const Login = () => {
  //UseStates
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  //Formik and Yup
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Adresse Email invalide').required('Adresse Email est obligatoire'),
    password: Yup.string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
      .required('Mot de passe est obligatoire'),
  });

  //Logic
  const handleSubmit = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    mutate(data);
  };

  const { isLoading, mutate } = useMutation(auth, {
    mutationKey: 'auth',
    onSuccess: (data) => {
      console.log(data.data);
      dispatch(setUserInfo(data.data));
      console.log('succes');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo source={require('../assets/logo_cdg.png')} />
        <PageTitle>Gestionnaire Des Tâches</PageTitle>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyStyledTextInput
                label="Adresse Email"
                name="email"
                icon="mail"
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyStyledTextInput
                label="Mot de passe"
                name="password"
                icon="lock"
                placeholder="* * * * * * * *"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <StyledButton onPress={handleSubmit}>
                <ButtonText>{isLoading ? 'Loading' : 'Se Connecter'}</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Vous n'avez pas de compte déjà ?</ExtraText>
                <TextLink onPress={() => {}}>
                  <TextLinkContent>S'inscrire</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const { brand, darkLight } = Colors;

const MyStyledTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  const { handleChange, handleBlur, values, errors, touched } = useFormikContext();
  const fieldError = errors[props.name]; // Access the error for this field
  const fieldTouched = touched[props.name]; // Check if the field has been touched
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput
        {...props}
        onChangeText={handleChange(props.name)} // Use props.name here
        onBlur={handleBlur(props.name)}
      />
      {fieldError &&
        fieldTouched && ( // Display error only if field has been touched and has an error
          <ErrorMessage>{fieldError}</ErrorMessage>
        )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
