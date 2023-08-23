import React, { useState } from 'react';
import {
  CreateProjectButton,
  CreateProjectContainer,
  CreateProjectSubText,
  CreateProjectText,
  CreateProjectTextContainer,
  InnerContainer,
} from './styles';
import { Octicons } from '@expo/vector-icons';
import CreateProjectModal from './CreateProjectModal';
import AddUserToProjectModal from './AddUserToProjectModal';

const AddUserToProject = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handlePress = () => {
    setIsModalVisible(true);
  };
  return (
    <InnerContainer>
      <CreateProjectContainer>
        <CreateProjectTextContainer>
          <CreateProjectText>Intégrer un projet</CreateProjectText>
          <CreateProjectSubText>Intégrer a votre projet</CreateProjectSubText>
        </CreateProjectTextContainer>
        <CreateProjectButton onPress={handlePress}>
          <Octicons name="plus" size={24} color="black" />
        </CreateProjectButton>
      </CreateProjectContainer>
      {isModalVisible && <AddUserToProjectModal view={isModalVisible} setView={setIsModalVisible} />}
    </InnerContainer>
  );
};

export default AddUserToProject;
