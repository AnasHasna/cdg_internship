import React from 'react';
import { Text } from 'react-native';
import { StyledContainer } from '../components/styles';

const TaskDetail = ({ route }) => {
  const { taskId } = route.params;
  return (
    <StyledContainer>
      <Text>{taskId}</Text>
    </StyledContainer>
  );
};

export default TaskDetail;
