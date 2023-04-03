import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 28,
        color: '#CB3BE6',
        marginLeft: '5%',
        marginTop: '5%'
    },
    text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        color: '#2E2E2E',
        marginVertical: 10,
        marginHorizontal: '5%'
    },
    category: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 16,
      backgroundColor: '#FFC31E',
      marginHorizontal: 8,
      marginVertical: 8,
      alignSelf: 'flex-start'
    },
    categoryText: {
      fontSize: 16,
      color: '#FFFFFF',
      fontFamily: 'Montserrat_700Bold'
    },
    item: {
      paddingHorizontal: 16,
      paddingLeft: 8,
      borderRadius: 8,
      backgroundColor: '#e4cbf7',
      marginBottom: 8,
    },
    itemText: {
      fontSize: 24,
      color: '#CB3BE6',
      fontFamily: 'Montserrat_700Bold',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'

    },
    itemImage: {
      width: 128,
      height: 128,
      marginRight: 16,
      borderRadius: 15
    },
    animalIcon: {
    },
    animalAge: {
        fontFamily: 'Montserrat_400Regular',
        color: '#2E2E2E',
        marginTop: 10,
    },
    infoContainer: {
        flexDirection: 'column'
    },
    animalId: {
        alignSelf: 'flex-end',
        fontFamily: 'OpenSans_700Bold',
        color: '#FFF',
        fontSize: 38,
        
    }
  });