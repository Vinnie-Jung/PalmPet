import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import styles from '../../styles/signUp';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import defaultInput from './defaultInput';
import handleRegister from './handleRegister';

/*
 *  +-----------------------------------+
 *  | Estrutura da tela de cadastro.    |
 *  +-----------------------------------+
*/ 

export default function SignIn() {
    const navigation = useNavigation();
    const [formInputs, setFormInputs] = useState(defaultInput);

    function handleInputChange(inputName, text) {
        if (setFormInputs) {
            setFormInputs({
                ...formInputs,
                [inputName]: text,
              });
        }
    };

    return (
        <View style = {styles.mainContainer}>
            <Animatable.Text style = {styles.formTitle} animation = 'fadeInLeft' delay = {200}>
                Cadastre-se!
            </Animatable.Text>

            <Animatable.View style = {styles.formContainer} animation = 'fadeInUp' delay = {200}>
                <Text style = {styles.formInstruction}>Preencha os campos abaixo para prosseguir.</Text>
                <Text style = {styles.formText}>E-mail:</Text>
                <TextInput
                style = {styles.inputField}
                placeholder = 'exemplo@email.com'
                value = {formInputs.email}
                onChangeText = { (text) => handleInputChange('email', text) }
                />

                <Text style = {styles.formText}>Confirme o e-mail:</Text>
                <TextInput
                style = {styles.inputField}
                placeholder = 'exemplo@email.com'
                value = {formInputs.emailConfirm}
                onChangeText = { (text) => handleInputChange('emailConfirm', text) }
                />

                <Text style = {styles.formText}>Crie uma senha:</Text>
                <TextInput
                style = {styles.inputField}
                placeholder = '********'
                secureTextEntry
                value = {formInputs.password}
                onChangeText = { (text) => handleInputChange('password', text) }
                />

                <Text style = {styles.formText}>Repita a senha criada:</Text>
                <TextInput
                style = {styles.inputField}
                placeholder = '********'
                secureTextEntry
                value = {formInputs.passwordConfirm}
                onChangeText = { (text) => handleInputChange('passwordConfirm', text) }
                />

                <TouchableOpacity style = {styles.buttonRegister} onPress = {() => handleRegister(formInputs, navigation)}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonLogIn} onPress = {() => navigation.navigate('LogIn')}>
                    <Text style = {styles.logInText}>Já possui uma conta? Clique aqui!</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};