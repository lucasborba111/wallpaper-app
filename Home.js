import React from 'react';
import { Text,View } from 'react-native';
import { Card } from 'react-native-elements';

export default function Home({navigation}) {
  return (
        <View style={{alignItems:'center'}}>
              <Card.Image style={{ width: '300px',height: '95px' ,borderRadius: 21, marginTop: 20}} source={require('./assets/hariel.jpg')}> 
                <Text style={{color: 'white', fontSize: 24, paddingTop: 55, paddingLeft: 15}} 
                onPress={() => navigation.navigate("Hariel")}>
                  MC Hariel
                </Text>
              </Card.Image>
        
          <Card.Image style={{ width: '300px',height: '95px' ,borderRadius: 21, marginTop: 20}} source={require('./assets/kevin.jpg')}>
            <Text style={{color: 'white', fontSize: 24, paddingTop: 55, paddingLeft: 15}}
            onPress={() => navigation.navigate("Kevin")}>
              MC Kevin
            </Text>
          </Card.Image>

          <Card.Image style={{ width: '300px',height: '95px' ,borderRadius: 21, marginTop: 20}} source={require('./assets/poze.png')}>
            <Text style={{color: 'white', fontSize: 24, paddingTop: 55, paddingLeft: 15}}
            onPress={() => navigation.navigate("Poze")}>
              MC Poze
            </Text>
          </Card.Image>

          <Card.Image style={{ width: '300px',height: '95px' ,borderRadius: 21, marginTop: 20}} source={require('./assets/ryan.jpg')}>
            <Text style={{color: 'white', fontSize: 24, paddingTop: 55, paddingLeft: 15}}
            onPress={() => navigation.navigate("Ryansp")}>
              MC Ryan SP
            </Text>
          </Card.Image>

          <Card.Image style={{ width: '300px',height: '95px' ,borderRadius: 21, marginTop: 20}} source={require('./assets/pedrinho.jpg')}>
            <Text style={{color: 'white', fontSize: 24, paddingTop: 55, paddingLeft: 15}}
            onPress={() => navigation.navigate("Pedrinho")}>
              MC Pedrinho
            </Text>
        </Card.Image>
      </View>
  );
}