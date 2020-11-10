import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ErrorComponent = ({ message, hasError }) => {
    return hasError ?
        (
            <View>
                <Image 
                        style={styles.avatar}
                        source={require('./../../../assets/error.png')}/>
                <Text style={styles.styleError}>{message}</Text>
            </View>
        )
    : null
}

const styles = StyleSheet.create({
    styleError: {
        color: 'red',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    avatar: {
        aspectRatio: 1,
        width: 100,
        height: 100,
        alignSelf: 'center'
    }
});

export default ErrorComponent;

