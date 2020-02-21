import React, { Component } from 'react';
import { Text,   View, Image} from 'react-native';

export default class StyleTransfer extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex: 1, backgroundColor:'white'}}/>
        <View style={{flex: 7}}>
          <Image 
              style={{flex:1}}
              source={require('./../test.jpg')}
          />        
        </View>
        <View style={{flex:2, backgroundColor:'yellow'}}>
          <View style={{flex: 1, backgroundColor:'white'}}/>
          <View style={{flex: 2, flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text>LIBRARIES</Text>
            </View>
            <View style={{flex:1}}>
              <Image
                style={{flex:1}}
                source={require('./../snow.jpg')}
              />
            </View>
            <View style={{flex:1}}>
              <Image
                style={{flex:1}}
                source={require('./../monet.jpg')}
              />
            </View>
            <View style={{flex:1}}>
              <Image
                style={{flex:1}}
                source={require('./../tmp.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
};