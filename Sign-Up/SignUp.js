import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from '../styles';
import { makeSignUpCall } from '../actions/actions_signup';
import { connect } from 'react-redux';

class SignUp extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
    }
    constructor(props) {
        super(props);
    }

    handleFirstname = (firstname) => {
        this.setState({firstname: firstname})
    }
    handleLastname = (lastname) => {
        this.setState({lastname: lastname})
    }
    handleEmail = (email) => {
        this.setState({email: email})
    }
    handlePassword = (password) => {
        this.setState({password: password})
    }
    handleConfirmPassword = (confirm_password) => {
        this.setState({confirm_password: confirm_password})
    }
    signUpSuccessfully = () => {
        alert(this.props.state.signUp.message);
        this.props.signUp(this.state);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SafeAreaView style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/Images/Shorelinelogo.png')}/>
                </SafeAreaView>
                <SafeAreaView style={styles.formContainer}>
                    <TextInput 
                        placeholder=" *First Name" 
                        placeholderTextColor="white" 
                        returnKeyType="next" 
                        onSubmitEditing={()=> this.lastnameInput.focus() } 
                        style={styles.input}
                        onChangeText={this.handleFirstname}
                    ></TextInput>
                    <TextInput 
                        placeholder=" *Last Name" 
                        placeholderTextColor="white" 
                        returnKeyType="next" 
                        ref={(input) => this.lastnameInput = input} 
                        onSubmitEditing={()=> this.emailInput.focus()} 
                        style={styles.input}
                        onChangeText={this.handleLastname}
                    ></TextInput>
                    <TextInput 
                        placeholder=" *E-mail" 
                        placeholderTextColor="white" 
                        returnKeyType="next" 
                        keyboardType="email-address" 
                        onSubmitEditing={()=> this.passwordInput.focus()} 
                        ref={(input) => this.emailInput = input} 
                        style={styles.input}
                        onChangeText={this.handleEmail}
                    ></TextInput>
                    <TextInput 
                        placeholder=" *Password" 
                        placeholderTextColor="white" 
                        returnKeyType="next" 
                        style={styles.input} 
                        ref={(input) => this.passwordInput = input} 
                        onSubmitEditing={()=> this.confirmPasswordInput.focus()} 
                        secureTextEntry
                        onChangeText={this.handlePassword}
                    ></TextInput>
                    <TextInput 
                        placeholder=" *Confirm Password" 
                        placeholderTextColor="white" 
                        returnKeyType="go" 
                        style={styles.input} 
                        ref={(input) => this.confirmPasswordInput = input} 
                        secureTextEntry
                        onChangeText={this.handleConfirmPassword}
                    ></TextInput>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.signUpSuccessfully()}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <Text style={styles.signUpText}>
                        <Text style={{ textDecorationLine: 'underline' }} onPress={() => this.props.navigation.navigate('SignIn')}>Go back to Sign-In</Text>
                    </Text>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.signup
    }
    
}

 function mapDispatchToProps(dispatch) {
    return {
      signUp: (body) => dispatch(makeSignUpCall(body))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(SignUp)
