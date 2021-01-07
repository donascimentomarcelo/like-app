import React from 'react'
import { StyleSheet, View } from 'react-native'

const FormSearchBar = ({children}) => {
    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}

export default FormSearchBar

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 65,
        top: -30,
        backgroundColor: 'white',
        width: '85%'
    }
});
