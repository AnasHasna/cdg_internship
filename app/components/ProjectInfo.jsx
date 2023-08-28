import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProjectInfo = ({ nomProjet, description, tempsCreation, utilisateurs }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nomProjet}>{nomProjet}</Text>
      <Text style={styles.description}>Description: {description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Créé il y a</Text>
        <Text style={styles.infoValue}>{tempsCreation} heures</Text>
      </View>
      <View style={styles.utilisateursContainer}>
        <Text style={styles.utilisateursTitle}>Membres du projet :</Text>
        {utilisateurs.map((utilisateur) => (
          <Text style={styles.utilisateur} key={utilisateur._id}>
            {utilisateur.fullName}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 13,
    elevation: 2,
  },
  nomProjet: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    marginRight: 4,
    color: '#888',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
  },
  utilisateursContainer: {
    marginTop: 8,
  },
  utilisateursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  utilisateur: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProjectInfo;
