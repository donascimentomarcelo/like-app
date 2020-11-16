import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ErrorMessageComponent = ({message, hasError}) => {
    return hasError ? 
    (
            <View style={styles.container}>
                <Text style={styles.text}>{ message }</Text>
            </View> 
    ) : 
    null
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingTop: 15
    },
    text: {
        color: 'red',
        fontWeight: 'bold'
    }
});

export default ErrorMessageComponent;
