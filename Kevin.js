import * as React from 'react';
import { View, StyleSheet,Image} from 'react-native';

export default function Kevin({navigation}) {
return (
    <View style={styles.container}> 
    <View style={{alignItems:'center', fontFamily: 'monospace',}}><h1>Mc Kevin</h1></View>
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}> 
       <Image source = {{uri:'https://i.pinimg.com/564x/52/97/5d/52975d54f1054b00b164b1f3ba8ce712.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
       <Image source = {{uri:'https://i.pinimg.com/564x/61/83/79/6183790066e0d5b8690fe6326b48eed3.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
       <Image source = {{uri:'https://i.pinimg.com/564x/39/64/76/396476cee46f01d04f7be05c2919ce0d.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
         <Image source = {{uri:'https://i.pinimg.com/564x/75/b3/19/75b319ce683de1ac7cf7295f251201c1.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>

          </View> 
      </View>
 
 );
}
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      flexDirection:'column',
    },
}) 
