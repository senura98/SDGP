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
import weightIcon from './Images/weight.png';
import firstPeriodIcon from './Images/firstPeriod.png';
import maritalStatusIcon from './Images/status.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RadioGroup, RadioButton} from 'react-native-custom-radio-button'

const stack = createStackNavigator();

class initialDetails extends Component {

    state = {
        maritalStatus: null
    }

    constructor(props) {
        super(props);
        this.state = {
            //images: infoIcon, infoIcon2,
        }
    }

    maritalOnSelect(index, value){
        this.setState({
            maritalStatus: this.state.maritalStatus === value
        })
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
                            title: "1 of 10",
                            headerStyle: {backgroundColor: '#ED3030'},
                            headerTintColor: 'white',
                        }}
                    />
                    <stack.Screen
                        name="Question 2"
                        component={Question2}
                        options={{
                            title: "2 of 10",
                            headerStyle: {backgroundColor: '#ED3030'},
                            headerTintColor: 'white',
                        }}
                    />
                    <stack.Screen
                        name="Question 3"
                        component={Question3}
                        options={{
                            title: "3 of 10",
                            headerStyle: {backgroundColor: '#ED3030'},
                            headerTintColor: 'white',
                        }}
                    />
                    <stack.Screen
                        name="Question 4"
                        component={Question4}
                        options={{
                            title: "4 of 10",
                            headerStyle: {backgroundColor: '#ED3030'},
                            headerTintColor: 'white',
                        }}
                    />
                    <stack.Screen
                        name="Question 5"
                        component={Question5}
                        options={{
                            title: "5 of 10",
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
                <Text style={styles.dateButtonText}>Show Date Picker</Text>
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
            <Text style={styles.questionText}>What's your Height?</Text>
            <TextInput
                placeholder="Enter in meters"
                style={{
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'silver',
                    backgroundColor: '#e8e6e6',
                    marginTop: 10,
                    textAlign: 'center',
                    fontSize: 20,
                    borderRadius: 25,
                    width: 350,
                    alignSelf: 'center'
                }}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Question 3')}>
                <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
        </View>
    );
}

function Question3({navigation}) {
    return (
        <View style={styles.Q2View}>
            <Image source={weightIcon} style={styles.dateIcon}/>
            <Text style={styles.questionText}>What's your Weight?</Text>
            <TextInput
                placeholder="Enter in kilograms"
                style={{
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'silver',
                    backgroundColor: '#e8e6e6',
                    marginTop: 10,
                    textAlign: 'center',
                    fontSize: 20,
                    borderRadius: 25,
                    width: 350,
                    alignSelf: 'center'
                }}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Question 4')}>
                <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
        </View>
    );
}

function Question4({navigation}) {
    return (
        <View style={styles.Q2View}>
            <Image source={firstPeriodIcon} style={styles.dateIcon}/>
            <Text style={styles.questionText}>What's your age at first period?</Text>
            <TextInput
                placeholder="Enter Here"
                style={{
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'silver',
                    backgroundColor: '#e8e6e6',
                    marginTop: 10,
                    textAlign: 'center',
                    fontSize: 20,
                    borderRadius: 25,
                    width: 350,
                    alignSelf: 'center'
                }}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Question 5')}>
                <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
        </View>
    );
}

function Question5({navigation}) {
    return (
        <View style={styles.Q2View}>
            <Image source={maritalStatusIcon} style={styles.dateIcon}/>
            <Text style={styles.questionText}>What's your marital status?</Text>
            <RadioGroup>
                <RadioButton value={'Married'}>
                   <Text>Hello</Text>
                </RadioButton>
                {/*<RadioButton value={'Live-in relationship'}>*/}
                {/*    <Text>Live-in relationship</Text>*/}
                {/*</RadioButton>*/}
                {/*<RadioButton value={'Single'}>*/}
                {/*    <Text>Single</Text>*/}
                {/*</RadioButton>*/}
            </RadioGroup>
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
        fontSize: 25,
        marginTop: 10
    },
    datePickerStyle: {
        alignItems: 'center',
        width: 300,
        marginTop: 30
    },
    dateButton: {
        alignItems: 'center',
        backgroundColor: '#e8e6e6',
        padding: 10,
        marginBottom: 10,
        width: 350,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 30
    },
    dateButtonText: {
        fontSize: 20,
        color: 'black'
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
