import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#A82CBF'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#A82CBF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo: {
        width: '60%',
        height: '50%',
        resizeMode: 'cover',
        borderRadius: 1000
    },
    minorContainer: {
        flex: 1.5,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center',
        color: '#2E2E2E'
    },
    text: {
        color: '#2E2E2E',
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingVertical: 15
    },
    instruction: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#B3B3B3',
        marginTop: 14
    },
    button: {
        position: 'absolute',
        backgroundColor: '#CB3BE6',
        borderRadius: 50,
        paddingVertical: 8,
        width: '70%',
        alignSelf: 'center',
        bottom: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    }
});