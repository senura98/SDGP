// import React from 'react';
// import {Component} from 'react';
// import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
//
// class Profile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             dataSource:null,
//         }
//     }
//     componentDidMount(){
//         return fetch(url of the api)
//     .then((response) => response.json()  )
//             .then((responseJson) => {
//                 this.setState({
//                     isLoading:false,
//                     dataSource: responseJson.array
//                 })
//             })
//             .catch((error)=>{
//                 console.log(error)
//             });
//     }
//     render(){
//         if(this.state.isLoading){
//             return(
//                 <View style={styles.container}>
//                     <ActivityIndicator/>
//                 </View>
//             )
//         }else{
//             let name = this.state.dataSource.map((val,key)=>{
//                 return <View key={key} style={styles.item}>
//                     <Text>{val.name}</Text>
//                 </View>
//             })
//             return(
//                 <View style={styles.container}>
//                     <Text>Content Loaded</Text>
//                 </View>
//             );
//
//         }
//     }
// }
// const styles =StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     item: {
//         flex:1,
//         alignSelf: 'stretch',
//         margin:10,
//         alignItems: 'center',
//         justifyContent: 'center',
//
//
//     }
// })
import React from 'react'
import {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';

class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text styles={{fontSize:20, textAlign:'center'}}>Profile</Text>
                <View style={styles.content}>
                    <Text style={styles.details}>1.Name</Text>
                    <Text style={styles.details}>2.Date of birth</Text>
                    <Text style={styles.details}>3.E-mail</Text>
                    <Text style={styles.details}>4.Height</Text>
                    <Text style={styles.details}>5.Weight</Text>
                    <Text style={styles.details}>6.Martial status</Text>
                    <Text style={styles.details}>7.Breast-feeding</Text>
                    <Text style={styles.details}>8.Alcohol</Text>
                    <Text style={styles.details}>9.Smoking</Text>
                    <Text style={styles.details}>10.Menstrual cycle</Text>
                    <Text style={styles.details}>11.Breast cancer history</Text>

                </View>
                
            </View>

        );
    }
}
export default Profile;
const styles=StyleSheet.create({
    containerInfo:{
    backgroundColor: '#f542a1',
    fontSize:20

    },
    content:{
        alignItems: 'flex-start'
    },
    details:{
        padding: 10
    }
});

