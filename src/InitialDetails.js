import * as React from 'react';
import {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, Image, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import infoIcon from './Images/info.png';
import infoIcon2 from './Images/info2.png';
import logo from './Images/icure.jpg';
import DatePicker from 'react-native-datepicker';

const stack = createStackNavigator();

class initialDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: infoIcon, infoIcon2,
            date: "14-04-2020"
        }
    }

    render() {
        return (
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen
                        name="InitialPage"
                        component={GatherInfo}
                        options={{headerShown: false}}
                    />
                    <stack.Screen
                        name="Question 1"
                        component={Question1}
                        options={{title: "1 of 9", headerStyle: {backgroundColor: '#ED3030'}, headerTintColor: 'white'}}
                    />
                </stack.Navigator>
            </NavigationContainer>
        );
    }
}

function GatherInfo({navigation}) {
    return (
        <View style={styles.mainView}>
            <Text style={styles.title}>User Information</Text>
            <Image source={infoIcon2} style={styles.infoIcon}/>
            <Text style={styles.subTitle}>Help me to understand you!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Question 1')}>
                <Text style={styles.buttonText} >Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

function Question1() {
    return (
        <View style={styles.Q1View}>
            <Text style={styles.questionText}>What is your Date of Birth?</Text>
            <DatePicker
                style={{width: 200}}
                date={this.state.date}
                placeholder="Select DOB"
                format="DD-MM-YYYY"
            />
        </View>
    )
}

export default initialDetails;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
        paddingBottom: 100,
        paddingTop: 20
    },
    mainView: {
        padding: 15,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    subTitle: {
        fontSize: 19,
        textAlign: 'center',
        marginTop: 10
    },
    infoIcon: {
        height:200,
        width:200,
        alignSelf: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ED3030',
        padding: 10,
        marginBottom: 10,
        width: 350,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 180
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    Q1View: {
        backgroundColor: 'white',
        padding: 15,
        flex: 1,
        justifyContent: 'center'
    },
    questionText: {
        textAlign: 'center',
        fontSize: 30
    }
});
