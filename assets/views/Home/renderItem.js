import styles from '../../styles/home';
import React from "react";
import { Image, Text, View, TouchableOpacity} from 'react-native';
import getItemCategory from './getItemCategory';

// Renderização dos itens da lista
const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}  style={styles.item}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.img }} style={styles.itemImage}/>
        <View sytle = {styles.infoContainer} >
          <Text style={styles.itemText}>{item.name}</Text>
          <View>
            <Image/>
          </View>
          <Text style={styles.animalAge}>{getItemCategory(item.categoryId)} </Text>
          <Text style={styles.animalAge}>{item.age} </Text>
        </View>
        <Text style={styles.animalId}>{item.id}</Text>
      </View>
    </TouchableOpacity>
);

export default renderItem;