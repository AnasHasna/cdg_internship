import React from 'react';
import {
  Colors,
  InnerContainer,
  TaskCardButton,
  TaskCardContainer,
  TaskCardIcon,
  TaskCardSubText,
  TaskCardText,
  TaskCardTextContainer,
} from './styles';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const TaskCard = (props) => {
  const { tertiary } = Colors;

  // Créez un objet Date à partir de la chaîne ISO
  const createdAtDate = new Date(props.date);

  // Obtenez les composants de la date (jour, mois, année)
  const jour = createdAtDate.getDate();
  const mois = createdAtDate.getMonth() + 1; // Les mois sont indexés à partir de 0, alors ajoutez 1
  const annee = createdAtDate.getFullYear();

  // Formatez la date comme "jour/mois/année"
  const dateFormated = `${jour}/${mois}/${annee}`;

  const handlePress = () => {
    props.navigation.navigate('TaskDetail', { taskId: props.id });
  };

  return (
    <TaskCardContainer>
      <TaskCardIcon>
        <Octicons name="paste" size={34} />
      </TaskCardIcon>
      <TaskCardTextContainer>
        <TaskCardText>{props.name}</TaskCardText>
        <TaskCardSubText>Créer le: {dateFormated}</TaskCardSubText>
      </TaskCardTextContainer>
      <TaskCardButton>
        <Octicons name="kebab-horizontal" size={24} onPress={handlePress} />
      </TaskCardButton>
    </TaskCardContainer>
  );
};

export default TaskCard;
