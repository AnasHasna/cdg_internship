import React, { useState } from 'react';
import {
  ButtonText,
  ExtraText,
  ExtraView,
  InnerContainer,
  Line,
  PageLogo,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  TextLink,
  TextLinkContent,
} from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import * as Yup from 'yup';
import { Formik } from 'formik';
import MyStyledTextInput from '../components/MyStyledTextInput';
import { Colors } from '../components/styles';
import { useMutation } from 'react-query';
import { register } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/slices/userSlice';

const Register = ({ navigation }) => {
  //UseStates
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  // styles
  const { darkLight } = Colors;
  // Formik validation
  const initialValues = {
    fullName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  };
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Le nom complet est obligatoire'),
    email: Yup.string().email('Adresse Email invalide').required('Adresse Email est obligatoire'),
    role: Yup.string().required('Le rôle est obligatoire'),
    password: Yup.string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
      .required('Mot de passe est obligatoire'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
      .required('Confirmer le mot de passe est obligatoire'),
  });

  // Logic
  const handleSubmit = async (values) => {
    const data = {
      fullName: values.fullName,
      email: values.email,
      role: values.role,
      password: values.password,
    };
    mutate(data);
  };

  const { isLoading, mutate } = useMutation(register, {
    mutationKey: 'register',
    onSuccess: (data) => {
      console.log(data.data);
      dispatch(setUserInfo({ ...data.data }));
      navigation.navigate('Welcome');
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
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyStyledTextInput
                name="fullName"
                label="Nom complet"
                icon="person"
                placeholder="Nom et Prénom"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              <MyStyledTextInput
                name="email"
                label="Adresse Email"
                icon="mail"
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyStyledTextInput
                name="role"
                label="Rôle"
                icon="gear"
                placeholder="Rôle"
                onChangeText={handleChange('role')}
                onBlur={handleBlur('role')}
                value={values.role}
              />
              <MyStyledTextInput
                name="password"
                label="Mot de passe"
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
              <MyStyledTextInput
                name="confirmPassword"
                label="Confirmer le mot de passe"
                icon="lock"
                placeholder="* * * * * * * *"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <StyledButton onPress={handleSubmit}>
                <ButtonText>S'identifier</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Vous n'avez pas de compte déjà ?</ExtraText>
                <TextLink
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                >
                  <TextLinkContent>Se Connecter</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Register;
