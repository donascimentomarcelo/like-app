import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Container = ({label, content}) => {
    return (
        <View style={styles.detail}>
            <Text style={styles.cell}> {label}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    detail: {
        marginTop: 20,
        elevation: 1
    },
    cell: {
        fontSize: 16,
        paddingLeft: 15,
        fontWeight: 'bold'
    },
    content: {
        flex: 3
    },
})
