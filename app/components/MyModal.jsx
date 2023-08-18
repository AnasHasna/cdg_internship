import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { ButtonText, PageText, StyledButton, StyledFormArea } from './styles';
import { Formik } from 'formik';
import MyStyledTextInput from './MyStyledTextInput';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { resetPassword } from '../api/authApi';

const MyModal = (props) => {
  const [hidePassword, setHidePassword] = useState(true);

  const openModal = () => {
    props.setView(true);
  };

  const closeModal = () => {
    props.setView(false);
  };

  //Formik and yup
  const initialValues = {
    verifyCode: null,
    password: '',
    confirmPassword: '',
  };
  const validationSchema = Yup.object().shape({
    verifyCode: Yup.number().required('Code de vérification est obligatoire'),
    password: Yup.string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
      .required('Mot de passe est obligatoire'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
      .required('Confirmer le mot de passe est obligatoire'),
  });

  //logic
  const handleSubmit = (values) => {
    const data = {
      verifyCode: parseInt(values.verifyCode),
      password: values.password,
    };
    mutate(data);
    closeModal();
  };

  const { isLoading, mutate } = useMutation(resetPassword, {
    mutationKey: 'resetPassword',
    onSuccess: (data) => {
      console.log(data.data);
      props.navigation.navigate('Login');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={props.view} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <PageText>Entrer votre code de vérification et votre nouveau mot de passe</PageText>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <MyStyledTextInput
                    label="Code de vérification"
                    keyboardType="numeric"
                    name="verifyCode"
                    icon="shield-lock"
                    placeholder="Code de vérification"
                    onChangeText={handleChange('verifyCode')}
                    onBlur={handleBlur('verifyCode')}
                    value={values.verifyCode}
                  />
                  <MyStyledTextInput
                    label="Nouveau mot de passe"
                    name="password"
                    icon="lock"
                    placeholder="Mot de passe"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <MyStyledTextInput
                    label="Confirmer le mot de passe"
                    name="confirmPassword"
                    icon="lock"
                    placeholder="Confirmer le mot de passe"
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Confirmer</ButtonText>
                  </StyledButton>
                </StyledFormArea>
              )}
            </Formik>

            {/* <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text>Close Modal</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default MyModal;
