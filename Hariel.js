import * as React from 'react';
import { View, StyleSheet,Image} from 'react-native';

//export const Artistas ({navigation})
export default function Hariel({navigation}) {
return (
  
    <View style={styles.container}> 
    <View style={{alignItems:'center', fontFamily: 'monospace',}}><h1>Mc Hariel</h1></View>
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}> 
       <Image source = {{uri:'https://i.pinimg.com/564x/c1/f2/2a/c1f22a0c562f42279a47dcc07aaf8cf2.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>

       <Image source = {{uri:' https://i.pinimg.com/564x/9e/7c/01/9e7c01affb00740afed3d9bec58fa51c.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>

       <Image source = {{uri:'https://i.pinimg.com/564x/c5/fb/7c/c5fb7ca8ee7e884a0126d02a989f1231.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
         
         <Image source = {{uri:'https://i.pinimg.com/564x/3a/e1/04/3ae1046b77b18bd910b65963bbaf53f9.jpg'}}
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
//export default Artistas;