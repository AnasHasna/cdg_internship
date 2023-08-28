import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import {
  ButtonText,
  ErrorMessage,
  PageText,
  StyledButton,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  StyledTextInputArea,
} from './styles';
import MyStyledTextInput from './MyStyledTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { createProject } from '../api/projectApi';
import { createTask } from '../api/taskApi';

const CreateTaskModal = (props) => {
  //Redux
  const token = useSelector((state) => state.user.userInfo.token);
  const user_id = useSelector((state) => state.user.userInfo._id);
  const projectId = props.id;
  //   console.log(user_id);
  //Yup validation
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Le titre est obligatoire'),
  });

  //useState
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const openModal = () => {
    props.setView(true);
  };

  const closeModal = () => {
    props.setView(false);
  };
  //Logic
  const { isLoading, mutate } = useMutation(createTask, {
    mutationKey: 'createTask',
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
      title: values.title,
      description: values.description,
      projectId: projectId,
    };
    mutate({ data, token });
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={props.view} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <PageText>Entrer le titre et la description de votre tâche</PageText>
            <Formik
              initialValues={{ title: '', description: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <StyledFormArea>
                  <View>
                    <StyledInputLabel>Titre</StyledInputLabel>
                    <StyledTextInputArea
                      label="Name"
                      name="title"
                      placeholder="Titre"
                      onChangeText={handleChange('title')}
                      onBlur={handleBlur('title')}
                      value={values.title}
                    />
                    {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                  </View>
                  <View>
                    <StyledInputLabel>Description</StyledInputLabel>
                    <StyledTextInputArea
                      label="Description"
                      name="description"
                      placeholder="Description"
                      onChangeText={handleChange('description')}
                      onBlur={handleBlur('description')}
                      value={values.description}
                    />
                  </View>
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Créer</ButtonText>
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
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default CreateTaskModal;
