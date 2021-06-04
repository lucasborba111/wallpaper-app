import * as React from 'react';
import { View, StyleSheet,Image} from 'react-native';

export default function Home({navigation}) {
return (
    <View style={styles.container}> 
    <View style={{alignItems:'center', fontFamily: 'monospace',}}><h1>Mc Poze</h1></View>
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}> 
       <Image source = {{uri:'https://i.pinimg.com/564x/be/a7/89/bea789aa8b8db13fe6234cc15b4219e4.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
       <Image source = {{uri:'https://i.pinimg.com/236x/3d/e3/aa/3de3aaac3d68e1bcbe99c725f47cad92.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
       <Image source = {{uri:'https://i.pinimg.com/236x/65/29/60/6529609b931e335568b04c3d71fd16b9.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
         <Image source = {{uri:'https://pm1.narvii.com/7714/a4560e2b448e44f826a8f576a88b13a65a8350a0r1-1080-1312v2_hq.jpg'}}
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
