
import react, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';





const paper = require('../signs/paper.png')
const rock = require('../signs/rock.png')
const scissors = require('../signs/scissors.png')



const PlayScreen = () => {

    const [counter, setCounter] = useState(3)

    const signs = [scissors, paper, rock]
    const colors = ['#f542bc', '#789c2a', '#c46f45']
    const getSetGO = ['GO', 'SET', 'GET']
    let randomNumber = Math.floor(Math.random() * 3)



    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => {
                setCounter(counter - 1)
            }, 500);
        } else {
            clearTimeout()
        }

    }, [counter])

    const restartGame = () => {
        setCounter(3)
    }


    return (
        <>
            <View style={styles.container}>
                {counter === 0 ?
                    (<>
                        <Image style={styles.sign} source={signs[randomNumber]} />
                        <View style={styles.btnContainer}>
                            <Button title='PLAY AGAIN' onPress={restartGame} />
                        </View>
                    </>)
                    :
                    <View style={styles.counterContainer}>
                        <Text style={StyleSheet.compose(styles.getSet, { color: colors[counter - 1] })}>{getSetGO[counter - 1]}</Text>
                        <Text style={StyleSheet.compose(styles.counter, { color: colors[counter - 1] })}>{counter}</Text>
                    </View>
                }


            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 200,
    },
    getSet: {
        fontSize: 80
    },
    btnContainer: {
        marginTop: 200,
        width: 240,
        position: 'absolute',
        bottom: 20,
    },
    sign: {
        width: 200,
        height: 200,
    },
    counterContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }

})



export default PlayScreen
