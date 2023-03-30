import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import styles from '../../styles/welcome';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

/*
 *  +-----------------------------------+
 *  | Estrutura da tela de boas vindas. |
 *  +-----------------------------------+
*/ 

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.containerLogo}>
                <Animatable.Image
                animation = 'flipInX'
                delay = {200}
                source = {require('../../img/logo.png')}
                style = {styles.imgLogo}
                />
            </View>

            <Animatable.View animation = 'fadeInUp' delay = {800} style = {styles.minorContainer}>
                <Text style = {styles.title}>Seja bem vindo(a)!</Text>
                <Text style = {styles.text}>Com o nosso aplicativo você está cada vez mais perto de conhecer o seu animal de estimação!</Text>
                <Text style = {styles.instruction}>Faça seu login para continuar!</Text>

                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('LogIn')}>
                    <Text style = {styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};