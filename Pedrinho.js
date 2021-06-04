import * as React from 'react';
import { View, StyleSheet,Image} from 'react-native';

export default function Pedrinho({navigation}) {
return (
    <View style={styles.container}> 
    <View style={{alignItems:'center',fontFamily: 'monospace'}}><h1>Mc Pedrinho</h1></View>
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}> 
       <Image source = {{uri:'https://i.pinimg.com/originals/5c/d8/5c/5cd85cb359e32c20931038dfc9b0f76e.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
       <Image source = {{uri:'https://i.pinimg.com/736x/84/f8/40/84f840187572d4738041c1e9ac11cc90.jpg'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
       <Image source = {{uri:'https://fsb.zobj.net/crop.php?r=SKoGgKYMw0jx34_tiSwaH3gveyzhhNfTLH0MfhAtk-GA2XepvWJxemM7bi_KS-iANPHmxkyJ-pPj3ElHXz7kd_vPJA8NICURZhrhYhQPtxNIEHjYwkd6dkgY9CEsXBvtYKEGelmmR77BfDUa'}}
   style = {{ width: '50%', height: '50vh' ,borderRadius:10 }}/>
         <Image source = {{uri:'https://i.pinimg.com/originals/f0/de/4e/f0de4eb4789b785709b8b6f6792d06c7.jpg'}}
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
