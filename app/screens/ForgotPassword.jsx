import React, { useState } from 'react';
import {
  ButtonText,
  ErrorMessage,
  InnerContainer,
  PageText,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
} from '../components/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MyStyledTextInput from '../components/MyStyledTextInput';
import { useMutation } from 'react-query';
import { forgetPassword } from '../api/authApi';
import { Text } from 'react-native';
import MyModal from '../components/MyModal';

const ForgotPassword = ({ navigation }) => {
  //UseStates
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  //Formik and yup
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Adresse Email invalide').required('Adresse Email est obligatoire'),
  });

  //Logic
  const { isLoading, mutate, error } = useMutation(forgetPassword, {
    mutationKey: 'forgetPassword',
    onSuccess: (data) => {
      console.log(data.data);
      setStatus('success');
      setIsModalVisible(true);
    },
    onError: (error) => {
      console.log(error.message);
      setStatus('error');
    },
  });

  const handleSubmit = (values) => {
    const data = {
      email: values.email,
    };
    mutate(data);
  };
  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Mot de passe oublié</PageTitle>
        <PageText>Entrer votre adresse email pour recevoir un code de vérification</PageText>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyStyledTextInput
                name="email"
                label="Adresse Email"
                icon="mail"
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Continuer</ButtonText>
              </StyledButton>
              {status === 'error' && <ErrorMessage>Utilisateur Non Trouvé</ErrorMessage>}
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
      {status === 'success' && <MyModal view={isModalVisible} setView={setIsModalVisible} navigation={navigation} />}
    </StyledContainer>
  );
};

export default ForgotPassword;
