import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import {
  ButtonText,
  ErrorMessage,
  PageText,
  StyledButton,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInputArea,
} from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { addUserToProject, createProject } from '../api/projectApi';

const AddUserToProjectModal = (props) => {
  //Redux
  const token = useSelector((state) => state.user.userInfo.token);
  const user_id = useSelector((state) => state.user.userInfo._id);

  //Yup validation
  const validationSchema = Yup.object().shape({
    key: Yup.string().required('Le titre est obligatoire'),
  });

  const [error, setError] = useState('');

  const openModal = () => {
    props.setView(true);
  };

  const closeModal = () => {
    props.setView(false);
  };
  //Logic
  const { isLoading, mutate } = useMutation(addUserToProject, {
    mutationKey: 'addUserToProject',
    onSuccess: (data) => {
      console.log(data.data);
      closeModal();
    },
    onError: (error) => {
      console.log(error);
      setError(error.response.data.message);
    },
  });

  const handleSubmit = (values) => {
    const data = {
      key: parseInt(values.key),
      userId: user_id,
    };
    mutate({ data, token });

    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={props.view} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <PageText>Entrer le clé du projet</PageText>
            <Formik initialValues={{ key: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <StyledFormArea>
                  <View>
                    <StyledInputLabel>Clé du projet</StyledInputLabel>
                    <StyledTextInputArea
                      label="Key"
                      name="key"
                      placeholder="Key"
                      onChangeText={handleChange('key')}
                      onBlur={handleBlur('key')}
                      value={values.key}
                    />
                    {errors.key && <ErrorMessage>{errors.key}</ErrorMessage>}
                  </View>
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Continuer</ButtonText>
                  </StyledButton>
                </StyledFormArea>
              )}
            </Formik>
          </View>
          {error && <ErrorMessage>{error}</ErrorMessage>}
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
    padding: 40,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default AddUserToProjectModal;
