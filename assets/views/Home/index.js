import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import animalData from '../../api/animals.json';
import categoryData from '../../api/category.json';
import styles from '../../styles/home';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  function getItemCategory(item) {
    let count = 0;
    while (categoryData[count].id !== item) {
      count++;
    }
    return categoryData[count].name;
  }

  // Filtrando os animais com base na categoria selecionada
  useEffect(() => {
    if (selectedCategory) {
      const filtered = animalData.filter(animal => animal.category === selectedCategory.id);
      setFilteredAnimals(filtered);
    } else {
      setFilteredAnimals(animalData);
    }
  }, [selectedCategory]);

  // Renderização dos itens da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}  style={styles.item}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.img }} style={styles.itemImage}/>
        <View sytle = {styles.infoContainer} >
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.animalAge}>{getItemCategory(item.categoryId)} </Text>
          <Text style={styles.animalAge}>{item.age} </Text>
        </View>
        <Text style={styles.animalId}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Lista de categorias */}

      <Text style = {styles.title}>Home</Text>
      <Text style = {styles.text}>Escolha uma categoria para vizualizar.</Text>

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
        renderItem={renderItem}
      />
    </View>
  );
}