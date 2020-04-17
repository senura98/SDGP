import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource:null,
        }
    }
    componentDidMount(){
        return fetch(url of the api)
    .then((response) => response.json()  )
            .then((responseJson) => {
                this.setState({
                    isLoading:false,
                    dataSource: responseJson.array
                })
            })
            .catch((error)=>{
                console.log(error)
            });
    }
    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }else{
            let name = this.state.dataSource.map((val,key)=>{
                return <View key={key} style={styles.item}>
                    <Text>{val.name}</Text>
                </View>
            })
            return(
                <View style={styles.container}>
                    <Text>Content Loaded</Text>
                </View>
            );

        }
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex:1,
        alignSelf: 'stretch',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',


    }
})

