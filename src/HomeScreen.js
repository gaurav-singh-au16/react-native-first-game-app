import react, {useState} from 'react';
import { Button, StyleSheet, Text, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import PlayScreen from './PlayScreen';

const HomeScreen = () => {

  const [play, setPlay] = useState(false)


  return (
    <>
    {
    play? <PlayScreen/>:
    (<View>
      <Text style={styles.heading}>Rock Paper Scissors</Text>
      <Text style={styles.heading_2}>✊ ✋ ✌️</Text>
      <View style={styles.btnContainer}>
        <Button title='PLAY' onPress={()=>setPlay(true)}/>
      </View>
      <Icon
        style={styles.reachCode}
        name='linkedin'
        onPress={() =>
          Linking.openURL(
            'https://www.linkedin.com/in/gaurav-singh-17b9a873/',
          )
        }>
        Connect
      </Icon>
      <Icon
        style={styles.srcCode}
        name='github'
        onPress={() =>
          Linking.openURL(
            'https://github.com/gaurav-singh-au16',
          )
        }>
        Source Code
      </Icon>
    </View>)
    } 
    </>
  );
}


const styles = StyleSheet.create({
    heading : {
        fontSize: 30,
        color: '#ffff'
    },
    heading_2 : {
        fontSize: 70
    },
    btnContainer : {
        marginTop: 70
    },
    reachCode: {
      position: 'absolute',
      marginTop: 350,
      marginLeft: 78,
      fontSize: 20,
      color: '#0069c0',
      textDecorationLine: 'underline',
    },
    srcCode: {
      position: 'absolute',
      marginTop: 400,
      marginLeft: 65,
      fontSize: 20,
      textDecorationLine: 'underline',
    },

})



export default HomeScreen
