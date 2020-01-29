import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2980b9',
      justifyContent: 'center',
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 300,
      height: 100,
      resizeMode: 'contain'
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginBottom: 20,
      color: '#fff'
    },
    formContainer: {
      padding: 20
    },
    buttonContainer: {
      backgroundColor: '#3498db',
      paddingVertical: 15
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white'
    },
    signUpText: {
      color: 'white',
      textAlign: 'right',
      marginTop: 10
    }
  });