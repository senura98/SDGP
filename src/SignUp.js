import * as React from 'react';
import {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, Image, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import logo from './Images/icure.jpg'

class SignUp extends Component {

    render () {
        return(
            <View style={styles.mainView}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.textBox}
                    placeholder = "Email"
                />
                <TextInput
                    style={styles.textBox}
                    placeholder = "New Password"
                />
                <TextInput
                    style={styles.textBox}
                    placeholder = "Confirm Password"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignUp;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white',
        // margin: 20,
        padding: 20
    },
    textBox: {
        height: 40,
        borderColor: 'silver',
        borderBottomWidth: 3,
        marginBottom: 20
    },
    title: {
        fontSize: 50,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#ED3030',
        padding: 13,
        marginBottom: 10,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});
