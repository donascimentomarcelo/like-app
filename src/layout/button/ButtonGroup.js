import React from 'react'
import { StyleSheet, View } from 'react-native'

const ButtonGroup = (props) => {
    return (
        <View style={styles.buttonGroup}>
            {props.children}
        </View>
    )
}

export default ButtonGroup

const styles = StyleSheet.create({
    buttonGroup: {
        marginBottom: 10,
        marginTop: 10
    }
})
