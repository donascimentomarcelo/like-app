import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({label}) => {
    return (
        <View>
            <Text style={styles.title}>{label}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 7,
        marginTop: 10,
        marginBottom: 10,
    },
})
