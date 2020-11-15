import React from 'react'
import { StyleSheet, View } from 'react-native'

const FormRow = ({children, first, last}) => {
    return (
        <View style={[
            first ? styles.first : null,
            last ? styles.last : null,
            styles.container
        ]}>
            { children }
        </View>
    )
}

export default FormRow

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1
    },
    first: {
        marginTop: 10
    },
    last: {
        marginBottom: 10
    }
});
