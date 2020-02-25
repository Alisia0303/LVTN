import React, { Component } from 'react';
import { Text,   View, Image, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class StyleTransfer extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex: 1, backgroundColor:'white'}}/>
        <View style={{flex: 7}}>
          <Image 
              style={{flex:1}}
              source={require('./../test.jpg')}
              style={{width: '100%', height: '100%'}}
          />        
        </View>
        <View style={{flex:2}}>
          <View style={{flex: 1, backgroundColor:'white', flexDirection:'row'}}>
            <View style={{flex:1}}>
                <Icon name="download" size={30} style={[styles.downButton]}  />
            </View>
            <View style={{flex:1}}>
                <Icon name="share-square" size={30} style={[styles.shareButton]}  />
            </View>
          </View>
          <View style={{flex: 2, flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={styles.lib}>LIBRARIES</Text>
            </View>
            <View style={{flex:1}}>
              <ImageBackground source={require('./../snow.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.despStyles}>
                  <Text style={{color:'white'}}>SNOW</Text>
                </View>
              </ImageBackground>
            </View>
              
            <View style={{flex:1}}>
              <ImageBackground source={require('./../monet.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.despStyles}>
                  <Text style={{color:'white'}}>PAINTING</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{flex:1}}>
              <ImageBackground source={require('./../tmp.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.despStyles}>
                  <Text style={{color:'white'}}>MORE</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles=StyleSheet.create({
  shareButton :{
    padding:10,
    position: 'absolute', right: 10,
  },
  downButton:{
    padding:10,
    position: 'absolute', left: 10,
  },
  lib:{
    fontSize:19,
    top: 30,
  },
  despStyles:{
    position: 'absolute', 
    top: 90, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    
    alignItems: 'center'}
   
});