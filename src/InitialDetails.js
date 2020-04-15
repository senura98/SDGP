import * as React from 'react';
import {Component} from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, Image, TextInput, Platform, } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import infoIcon from './Images/info.png';
import infoIcon2 from './Images/info2.png';
import dateIcon from './Images/date.png';
import DateTimePicker from '@react-native-community/datetimepicker';

const stack = createStackNavigator();

class initialDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: infoIcon, infoIcon2,
        }
    }

    render() {

        return (
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen
                        name="InitialPage"
                        component={GatherInfo}
                        options={{headerShown: false,}}
                    />
                    <stack.Screen
                        name="Question 1"
                        component={Question1}
                        options={{
                            title: "1 of 9",
                            headerStyle: {backgroundColor: '#ED3030'},
                            headerTintColor: 'white',
                        }}
                    />
                    <stack.Screen
                        name="Question 2"
                        component={Question2}
                        options={{
                            title: "2 of 9",
                            headerStyle: {backgroundColor: '#ED3030'},
                            headerTintColor: 'white',
                        }}
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

function Question1({navigation}) {
    //const {date} = this.state;

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    }

    const showDatePicker = () => {
        showMode('date');
    }

    return (
        <View style={styles.Q1View}>
            <Image source={dateIcon} style={styles.dateIcon}/>
            <Text style={styles.questionText}>What is your Date of Birth?</Text>
            <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
                <Text style={styles.buttonText}>Show Date Picker</Text>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24hours={true}
                    display="spinner"
                    onChange={onChange}
                    maximumDate={new Date()}
                />
            )}

            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Question 2')}>
                <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
        </View>
    )
}

function Question2({navigation}) {
    return (
        <View style={styles.Q2View}>
            <Image source={dateIcon} style={styles.dateIcon}/>
            <Text style={styles.questionText}>What's your Height in meters?</Text>
            <TextInput
                placeholder="Enter here"
                style={{
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'silver',
                    backgroundColor: '#e8e6e6',
                    marginTop: 10,
                    textAlign: 'center',
                    fontSize: 20
                }}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.nextButton} >
                <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
        </View>
    );
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
        //justifyContent: 'center',
        paddingTop: 150
    },
    questionText: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 10
    },
    datePickerStyle: {
        alignItems: 'center',
        width: 300,
        marginTop: 30
    },
    dateButton: {
        alignItems: 'center',
        backgroundColor: '#ED3030',
        padding: 10,
        marginBottom: 10,
        width: 350,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 30
    },
    nextButton: {
        alignItems: 'center',
        backgroundColor: '#ED3030',
        padding: 10,
        marginBottom: 10,
        width: 350,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 130
    },
    dateIcon: {
        height:200,
        width:200,
        alignSelf: 'center'
    },
    Q2View: {
        backgroundColor: 'white',
        padding: 15,
        flex: 1,
        //justifyContent: 'center',
        paddingTop: 150
    }
});
