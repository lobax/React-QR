/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import QRCode from 'react-native-qrcode'; 
import QRCodeScanner from 'react-native-qrcode-scanner';
import Swiper from 'react-native-swiper';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    state = { 
        text: 'http://google.com',
    };
    render() {
        return (
            <Swiper>
                <View style={styles.container}>
                    <QRCode
                        value={this.state.text} 
                        size={200}
                        bgColor='black'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({text: text})}
                        value={this.state.text}
                    />
                </View>
                
                <View> 
                    <QRCodeScanner
                        
                    />
                </View> 
            </Swiper> 
           );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20,
        borderRadius: 5,
        padding: 5,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
