import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import styles from '../../styles/logIn';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import inputLogIn from './input';

/*
 *  +-----------------------------------+
 *  | Estrutura da tela de login.       |
 *  +-----------------------------------+
*/ 

export default function LogIn() {
    const navigation = useNavigation();
    const [formInputs, setFormInputs] = useState(inputLogIn);
    console.log(formInputs);

    function handleInputChange(inputName, text) {
        if (setFormInputs) {
            setFormInputs({
                ...formInputs,
                [inputName]: text,
              });
        }
    }

    return (
        <View style = {styles.mainContainer}>
            <Animatable.View animation = 'fadeInLeft' delay = {500} style = {styles.formContainer}>
                <Text style = {styles.formTitle}>Acessar sua conta</Text>
            </Animatable.View>

            <Animatable.View animation = 'fadeInUp' style = {styles.form}>
            <Text style = {styles.formInstruction}>Preencha os campos para acessar sua conta.</Text>
                <Text style = {styles.formText}>E-mail:</Text>
                <TextInput
                placeholder = 'exemplo@email.com'
                style = {styles.formInput}
                value = {formInputs.email}
                onChangeText = {(text) => handleInputChange('email', text)}
                />

                <Text style = {styles.formText}>Senha:</Text>
                <TextInput
                placeholder = '********'
                style = {styles.formInput}
                value = {formInputs.password}
                onChangeText = {(text) => handleInputChange('password', text)}
                />

                <TouchableOpacity style = {styles.buttonLogIn} onPress = { () => navigation.navigate('Home') }>
                    <Text style = {styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonRegister} onPress = { () => navigation.navigate('SignUp')}>
                    <Text style = {styles.registerText}>Não possui uma conta? Cadastre-se aqui!</Text>
                </TouchableOpacity>

                <Animatable.Image
                    animation = 'fadeInLeft'
                    delay = {200}
                    source = {require('../../img/logo.png')}
                    style = {styles.logo}
                />
            </Animatable.View>
        </View>
    );
};