import { StyleSheet } from 'react-native';
//import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#CB3BE6'
    },
    formContainer: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    formTitle: {
        marginTop: 40,
        fontFamily: 'Montserrat_700Bold',
        alignSelf: 'center',
        fontSize: 36,
        color: '#FFFFFF',
    },
    form: {
        flex: 1.5,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    formInstruction: {
        fontFamily: 'Montserrat_700Bold',
        color: '#CB3BE6',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 30
    },
    formText: {
        fontFamily: 'Montserrat_700Bold',
        color: '#CB3BE6',
        fontSize: 16,
        marginTop: 28
    },
    formInput: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderBottomColor: '#CB3BE6'
    },
    buttonLogIn: {
        backgroundColor: '#CB3BE6',
        width: '90%',
        borderRadius: 15,
        paddingVertical: 15,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#FFFFFF'
    },
    buttonRegister: {
        alignSelf: 'center',
        marginTop: 50,
    },
    registerText: {
        color: '#CB3BE6',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    logo: {
        width: '30%',
        height: '17%',
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: 35
    }
});