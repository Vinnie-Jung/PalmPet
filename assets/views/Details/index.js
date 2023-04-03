import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import animalData from '../../api/animals.json';
import styles from '../../styles/details';

const PetDetails = ({ route }) => {
  const [pet, setPet] = useState({});
  const navigation = useNavigation();

  const fetchPetDetails = async (id) => {
    try {
      const data = animalData.filter(item => item.id === id)[0]; // filtrando o pet pelo id
      setPet(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const { id } = route.params;
    fetchPetDetails(id);
  }, [route.params]);

  return (
    <View style={styles.container}>
        <View style = {styles.petImage}>
            <Image source={{ uri: pet.img }} style={styles.image} /> 
        </View>

        <View style={styles.header}>
            <Text style={styles.name}>{pet.name}</Text>
            <Text style={styles.age}>{`${pet.age}`}</Text>
        </View>
        <View style={styles.petInfoContainer}>
            <Text style={styles.descriptionTitle}>Descrição:</Text>
            <Text style={styles.description}>{pet.description}</Text>
            <View style={styles.bar}/>
            <Text style={styles.contact}>{`Contact: ${pet.phone} - ${pet.email}`}</Text>
        </View>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style = {styles.backButton}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PetDetails;