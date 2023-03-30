import { StyleSheet } from "react-native";

/*
 * +------------------------------------+
 * | Estilização da página de cadastro. |
 * +------------------------------------+
 */

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#CB3BE6'
    },
    formContainer: {
        marginTop: '14%',
        paddingStart: '5%',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: '5%'
    },
    formTitle: {
        marginTop: 40,
        fontFamily: 'OpenSans_700Bold',
        alignSelf: 'center',
        fontSize: 36,
        color: '#FFFFFF',
    },
    formInstruction: {
        fontFamily: 'Montserrat_700Bold',
        color: '#CB3BE6',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    formText: {
        fontFamily: 'Montserrat_700Bold',
        color: '#CB3BE6',
        fontSize: 16,
        marginTop: 28
    },
    inputField: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderBottomColor: '#CB3BE6',
    },
    buttonRegister: {
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
    buttonLogIn: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    logInText: {
        color: '#CB3BE6',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingHorizontal: '10%',
    }
});