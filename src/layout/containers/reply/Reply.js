import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Reply = ({replies}) => {
    return (
        replies.map((reply, i) => (
            <View key={i} style={styles.replyContainer}>
                <Text style={styles.reply}> {reply.description} </Text>
            </View>
        ))
    )
}

export default Reply

const styles = StyleSheet.create({
    replyContainer: {
        paddingLeft: 20,
        marginTop: 5
    },
    reply: {
        color: 'gray'
    },
})
