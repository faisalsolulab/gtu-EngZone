import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../header';
import { ScrollView } from 'react-native-gesture-handler';

class Description extends React.Component{
  
  render(){
    console.log('PROPS', this.props.navigation.state.params)
    
    return(
      <View style={{flex:1}}>
        <Header navigation={this.props.navigation}/>
        <View style={{flex:1}}>
            <Image source={{uri:this.props.navigation.state.params.image}} style={styles.coverImage} resizeMode='cover'/>
            <View style={{flex:1}}>
              <Text style={{fontSize:25, color:'black', flex:0.3, marginLeft:'3%', marginTop:'2%'}}>Maths 1 {`(Sem-${this.props.navigation.state.params.semesterId})`}</Text>
              <Text style={{fontSize:15, marginLeft:'3%', flex:0.3}}>Subject Code: {this.props.navigation.state.params.subjectCode}</Text>
              <Text style={{fontSize:20, color:'black', flex:0.3,  marginLeft:'3%'}}>Description</Text>
              <ScrollView>
                <Text style={{fontSize:15, color:'black', flex:8, marginLeft:'3%'}}>
                  {this.props.navigation.state.params.description}
                </Text>
              </ScrollView>
              <View style={styles.bottomTab}>
                <Text style={{color:'white', fontSize:20, marginLeft:'5%'}}>Price: ₹{this.props.navigation.state.params.price}</Text>
                <TouchableOpacity style={{marginLeft:'40%'}} onPress={() => this.props.navigation.navigate('paytm')}>
                <Text style={{color:'white', fontSize:20, }}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  coverImage:{
    height:'25%',
    width:'100%'
  },
  bottomTab:{
    height:'10%',
    width:'100%',
    backgroundColor:'blue',
    flexDirection:'row',
    alignItems:'center'
  }
})

export default Description;