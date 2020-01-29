import React, { Component } from 'react';
import { Text, Image, TextInput, TouchableOpacity , SafeAreaView, KeyboardAvoidingView, Linking } from 'react-native';
import styles from '../styles';
import { makeLoginCall } from '../actions/actions_login';
import { connect } from 'react-redux';
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    constructor(props) {
        super(props)
    }
    
    handleEmail = (email) => {
        this.setState({email: email})
    }
    handlePassword = (password) => {
        this.setState({password: password})
    }
    loginSuccessfully = () => {
        alert(this.props.state.login.message);
        this.props.login(this.state);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SafeAreaView style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/Images/Shorelinelogo.png')}/>
                </SafeAreaView>
                <SafeAreaView style={styles.formContainer}>
                    <TextInput 
                        placeholder=" *E-mail" 
                        placeholderTextColor="white" 
                        returnKeyType="next" 
                        keyboardType="email-address" 
                        onSubmitEditing={()=> this.passwordInput.focus() } 
                        style={styles.input}
                        onChangeText={this.handleEmail}
                    ></TextInput>
                    <TextInput 
                        placeholder=" *Password" 
                        placeholderTextColor="white" 
                        returnKeyType="go" 
                        style={styles.input} 
                        ref={(input) => this.passwordInput = input} 
                        onChangeText={this.handlePassword}
                        secureTextEntry
                    ></TextInput>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loginSuccessfully()}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={styles.signUpText}>New User? 
                        <Text style={{ textDecorationLine: 'underline' }} onPress={() => this.props.navigation.navigate('SignUp')}>Sign-Up</Text>
                    </Text>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
} 

function mapStateToProps(state) {
    return {
        state: state.login
    }
}

 function mapDispatchToProps(dispatch) {
    return {
      login: (body) => dispatch(makeLoginCall(body))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(SignIn)
