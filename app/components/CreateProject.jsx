import React, { useState } from 'react';
import {
  CreateProjectButton,
  CreateProjectContainer,
  CreateProjectSubText,
  CreateProjectText,
  CreateProjectTextContainer,
  InnerContainer,
} from './styles';
import { Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import CreateProjectModal from './CreateProjectModal';
import CreateTaskModal from './CreateTaskModal';

const CreateProject = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handlePress = () => {
    setIsModalVisible(true);
  };
  return (
    <InnerContainer>
      <CreateProjectContainer>
        <CreateProjectTextContainer>
          {props.type === 'task' ? (
            <CreateProjectText>Créer une nouvelle tâche</CreateProjectText>
          ) : (
            <CreateProjectText>Créer un nouveau projet</CreateProjectText>
          )}
          {props.type === 'task' ? (
            <CreateProjectSubText>Créer une nouvelle tâche pour ce projet</CreateProjectSubText>
          ) : (
            <CreateProjectSubText>Ici, Vous pouvez créer votre nouveau projet</CreateProjectSubText>
          )}
        </CreateProjectTextContainer>
        <CreateProjectButton onPress={handlePress}>
          <Octicons name="plus" size={24} color="black" />
        </CreateProjectButton>
      </CreateProjectContainer>
      {isModalVisible && props.type === 'task' ? (
        <CreateTaskModal view={isModalVisible} setView={setIsModalVisible} id={props.id} />
      ) : (
        <CreateProjectModal view={isModalVisible} setView={setIsModalVisible} />
      )}
    </InnerContainer>
  );
};

export default CreateProject;
