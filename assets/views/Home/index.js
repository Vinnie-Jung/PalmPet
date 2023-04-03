import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import animalData from '../../api/animals.json';
import categoryData from '../../api/category.json';
import styles from '../../styles/home';
import { useNavigation } from '@react-navigation/native';
import getItemCategory from './getItemCategory';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const navigation = useNavigation();

  // Filtrando os animais com base na categoria selecionada
  useEffect(() => {
    if (selectedCategory) {
      const filtered = animalData.filter(animal => animal.categoryId === selectedCategory.id);
      setFilteredAnimals(filtered);
    } else {
      setFilteredAnimals(animalData);
    }
  }, [selectedCategory]);

  // Renderização dos itens da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}  style={styles.item}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.img }} style={styles.itemImage}/>
        <View sytle = {styles.infoContainer} >
          <Text style={styles.itemText}>{item.name}</Text>
          <View>
          </View>
          <Text style={styles.animalAge}>{getItemCategory(item.categoryId)} </Text>
          <Text style={styles.animalAge}>{item.age} </Text>
        </View>
        <Text style={styles.animalId}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  // Filtragem de animais por categoria
  const handleCategoryFilter = (categoryId) => {
    if (selectedCategory && selectedCategory.id === categoryId) {
      setSelectedCategory(null);
    } else {
      const category = categoryData.find(category => category.id === categoryId);
      setSelectedCategory(category);
    }
  };

  // Renderização das categorias
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategoryFilter(item.id)} style={[styles.category, selectedCategory && selectedCategory.id === item.id && styles.selectedCategory]}>
      <View>
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

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
        renderItem={renderCategoryItem}
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