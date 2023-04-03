import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFF'
    },
    petImage: {
      flex: 1,
      width: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      marginBottom: 50,
    },
    petInfoContainer: {
      flex: 1,
      backgroundColor: '#CB3BE6',
      marginBottom: 30,
      width: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    name: {
      fontSize: 40,
      fontFamily: 'OpenSans_700Bold',
      color: '#CB3BE6',
      marginVertical: 20,
      paddingLeft: '10%',
      backgroundColor: '#FFC31E',
      width: '50%',
      borderBottomRightRadius: 25,
      borderTopRightRadius: 25
    },
    descriptionTitle: {
      color: '#FFF',
      fontFamily: 'Montserrat_700Bold',
      fontSize: 24,
      marginBottom: 20,
      alignSelf: 'center',
      marginTop: 20
    },
    description: {
      fontSize: 16,
      marginBottom: 10,
      color: '#FFF',
      fontFamily: 'Montserrat_400Regular',
      paddingHorizontal: '10%',
    },
    ageTitle: {
      color: '#FFF',
      fontFamily: 'Montserrat_700Bold',
      fontSize: 20,
      marginBottom: 10,
      alignSelf: 'center'
    },
    age: {
      fontSize: 35,
      marginVertical: 20,
      paddingRight: '5%',
      color: '#ddd',
      fontFamily: 'Montserrat_700Bold',
  
    },
    bar: {
      height: 1,
      width: '100%',
      backgroundColor: '#FFC31E',
      position: 'absolute',
      bottom: '20%',
      marginTop: 10
    },
    contact: {
      fontSize: 16,
      marginBottom: 10,
      color: '#FFF',
      fontFamily: 'Montserrat_400Regular',
      alignSelf: 'center',
      position: 'absolute',
      bottom: '5%'
      
    },
    backButton: {
      backgroundColor: '#FFC31E',
      marginBottom: '5%',
      borderRadius: 50,
      width: '50%',
      alignItems: 'center',
      alignSelf: 'center'
  
    },
    buttonText: {
      padding: 20,
      color: "#FFF",
      fontFamily: 'Montserrat_700Bold',
      fontSize: 20,
      
    }
  });