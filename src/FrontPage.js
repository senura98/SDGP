import * as React from 'react';
import {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import logo from './Images/icure.jpg'

class FrontPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: logo
        }
    }

    render () {
        return (
            <View style={styles.logoView}>
                <Image source={this.state.images} style={styles.logo} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>New User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Existing User</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FrontPage;

const styles = StyleSheet.create({
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        height: 300,
        width: 300,
        marginBottom: 150,
        marginTop: 100
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ED3030',
        padding: 10,
        marginBottom: 10,
        width: 350,
        borderRadius: 25
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});
