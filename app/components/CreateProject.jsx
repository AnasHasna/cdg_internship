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

const CreateProject = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handlePress = () => {
    setIsModalVisible(true);
  };
  return (
    <InnerContainer>
      <CreateProjectContainer>
        <CreateProjectTextContainer>
          <CreateProjectText>Créer un nouveau projet</CreateProjectText>
          <CreateProjectSubText>Ici, Vous pouvez créer votre nouveau projet</CreateProjectSubText>
        </CreateProjectTextContainer>
        <CreateProjectButton onPress={handlePress}>
          <Octicons name="plus" size={24} color="black" />
        </CreateProjectButton>
      </CreateProjectContainer>
      {isModalVisible && <CreateProjectModal view={isModalVisible} setView={setIsModalVisible} />}
    </InnerContainer>
  );
};

export default CreateProject;
