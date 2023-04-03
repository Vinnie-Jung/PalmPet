import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import animalData from '../../api/animals.json';
import categoryData from '../../api/category.json';
import styles from '../../styles/home';
import { useNavigation } from '@react-navigation/native';
import renderItem from './renderItem';


export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  // Filtrando os animais com base na categoria selecionada
  useEffect(() => {
    if (selectedCategory) {
      const filtered = animalData.filter(animal => animal.category === selectedCategory.id);
      setFilteredAnimals(filtered);
    } else {
      setFilteredAnimals(animalData);
    }
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Home</Text>
      <Text style = {styles.text}>Escolha uma categoria para vizualizar.</Text>

      {/* Lista de categorias */}
      <FlatList
        style={{ maxHeight: 100, height: 90 }}
        showsHorizontalScrollIndicator={false}
        data={categoryData}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item)} style={styles.category}>
            <View>
              <Text style={styles.categoryText} >{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Lista de animais filtrada */}
      <FlatList
        style={{ marginVertical: 20 }}
        data={filteredAnimals}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem} // Importada de renderItem.js
      />
    </View>
  );
}