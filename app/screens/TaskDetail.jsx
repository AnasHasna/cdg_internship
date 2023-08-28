import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import {
  ButtonContainer,
  ButtonText,
  Colors,
  CommentContainer,
  CommentText,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInputArea,
  StyledTextInputAreaTask,
  TaskInfoContainer,
  TaskInfoText,
  TaskSliderCOntainer,
  TaskSliderLabel,
} from '../components/styles';
import Slider from '@react-native-community/slider';
import { useSelector } from 'react-redux';
import { deleteTask, getTaskInfo, updateTaskInfo } from '../api/taskApi';
import { useMutation, useQuery } from 'react-query';
import { Formik } from 'formik';
import { RadioButton, useTheme } from 'react-native-paper';

const TaskDetail = ({ route, navigation }) => {
  const { brand } = Colors;
  const { taskId } = route.params;
  const user = useSelector((state) => state.user);
  const token = user.userInfo.token;
  const [taskData, setTaskData] = useState({});
  const [updateTask, setUpdateTask] = useState(false);
  const [progressValue, setProgressValue] = useState(taskData.progress);

  //logic
  const { isLoading, data, refetch } = useQuery({
    queryKey: 'getTaskInfo',
    queryFn: () => getTaskInfo(taskId, token),
  });
  useEffect(() => {
    if (data && data.data) {
      setTaskData(data.data.task);
      const interval = setInterval(() => {
        refetch();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [data]);

  const { mutate } = useMutation(deleteTask, {
    mutationKey: 'deleteTask',
    onSuccess: () => {
      navigation.navigate('Home');
      console.log('task deleted');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: mutate2 } = useMutation(updateTaskInfo, {
    mutationKey: 'updateTask',
    onSuccess: () => {
      setUpdateTask(!updateTask);
      console.log('task updated');
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleTaskDelete = () => {
    mutate({ taskId, token });
  };

  const handleTaskUpdate = () => {
    setUpdateTask(true);
  };

  const radioOptions = [
    { label: 'En Attente', value: 'attente' },
    { label: 'En Développement', value: 'développement' },
    { label: 'Terminé', value: 'terminé' },
  ];
  //   console.log(taskData);

  const handleSubmit = (values) => {
    values.progress = parseInt(progressValue);
    let data2 = values;
    console.log(data2);
    mutate2({ taskId: taskId, data2, token });
  };

  return (
    <StyledContainer>
      <TaskInfoContainer>
        <TaskInfoText
          style={{
            textAlign: 'center',
            fontSize: 25,
          }}
        >
          {taskData.title}
        </TaskInfoText>
        <TaskInfoText>Description: {taskData.description}</TaskInfoText>
        <TaskInfoText>
          Status:{' '}
          {taskData.status === 'attente' ? (
            <Text
              style={{
                color: 'red',
              }}
            >
              En Attente
            </Text>
          ) : taskData.status === 'développement' ? (
            <Text>En Développement</Text>
          ) : (
            <Text
              style={{
                color: 'green',
              }}
            >
              Terminé
            </Text>
          )}
        </TaskInfoText>
        <TaskSliderCOntainer>
          <TaskSliderLabel>Progrés:</TaskSliderLabel>
          <Slider
            style={{
              width: '40%',
              height: 40,
            }}
            minimumValue={0}
            maximumValue={100}
            value={taskData.progress}
            disabled={true} // Set disabled to true to disable the slider
            maximumTrackTintColor={brand}
          />
          <TaskSliderLabel>{taskData.progress}%</TaskSliderLabel>
        </TaskSliderCOntainer>
        <TaskInfoText>Commentaire:</TaskInfoText>
        {taskData.comments &&
          taskData.comments.map((comment) => (
            <CommentContainer>
              <CommentText>{comment}</CommentText>
            </CommentContainer>
          ))}
      </TaskInfoContainer>
      <ButtonContainer>
        <TouchableOpacity
          style={{
            backgroundColor: '#337CCF',
            padding: 16,
            borderRadius: 10,
            margin: 10,
          }}
          onPress={handleTaskUpdate}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
            }}
          >
            Modifier
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: 16,
            borderRadius: 10,
            margin: 10,
          }}
          onPress={handleTaskDelete}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
            }}
          >
            Supprimer
          </Text>
        </TouchableOpacity>
      </ButtonContainer>
      {updateTask && (
        <View
          style={{
            marginBottom: 40,
            marginLeft: 20,
          }}
        >
          <Formik
            initialValues={{
              description: taskData.description,
              progress: taskData.progress,
              status: taskData.status,
            }}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  width: '90%',
                  alignItems: 'left',
                  marginBottom: '100px',
                  margin: '10px',
                  padding: '20px',
                }}
              >
                <View>
                  <StyledInputLabel>Description</StyledInputLabel>
                  <StyledTextInputAreaTask
                    label="Description"
                    name="description"
                    placeholder="Description"
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                  />
                </View>
                <View>
                  <StyledInputLabel>Status</StyledInputLabel>
                  {radioOptions.map((option) => (
                    <View key={option.value} style={styles.radioOption}>
                      <RadioButton
                        value={option.value}
                        status={values.status === option.value ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('status')(option.value)}
                        color={brand} // Use the brand color for the radio buttons
                      />
                      <Text>{option.label}</Text>
                    </View>
                  ))}
                </View>
                <View>
                  <StyledInputLabel>Progrés</StyledInputLabel>
                  <Slider
                    style={{
                      width: '90%',
                      height: 40,
                    }}
                    minimumValue={0}
                    maximumValue={100}
                    value={values.progress}
                    maximumTrackTintColor={brand}
                    onValueChange={(value) => setProgressValue(value)}
                  />
                </View>
                <View
                  style={{
                    marginBottom: '30px',
                  }}
                >
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Modifier</ButtonText>
                  </StyledButton>
                </View>
              </View>
            )}
          </Formik>
        </View>
      )}
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TaskDetail;
