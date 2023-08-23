import React from 'react';
import { Text } from 'react-native';
import {
  CreateProjectSubText,
  CreateProjectText,
  CreateProjectTextContainer,
  InnerContainer,
  InnerContainerProjectDetail,
  ProjectDetailButton,
  ProjectDetailContainer,
  ProjectDetailSubText,
  ProjectDetailText,
} from './styles';
import { Octicons } from '@expo/vector-icons';

const ProjectDetail = (props) => {
  const handlePress = () => {
    props.navigation.navigate('TaskHome', { id: props.id });
  };
  return (
    <ProjectDetailContainer>
      <CreateProjectTextContainer>
        <ProjectDetailText>Nb Taches</ProjectDetailText>
        <ProjectDetailText>{props.name}</ProjectDetailText>
        <ProjectDetailSubText>{props.nbUsers} Utilisateurs dans ce projet</ProjectDetailSubText>
      </CreateProjectTextContainer>
      <ProjectDetailButton>
        <Octicons name="kebab-horizontal" size={30} color="white" onPress={handlePress} />
      </ProjectDetailButton>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
