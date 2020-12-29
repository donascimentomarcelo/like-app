import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const QuestionList = ({questions}) => {
    return (
        questions.map((question, i) => (
            <View key={i} style={styles.items}>
                <Text style={styles.description}>{question.description}</Text>
                
                {showReplies(question.reply)}

            </View>
        ))
    )
}

const showReplies = (replies) => {
    return replies.map((reply, i) => (
        <View key={i} style={styles.replyContainer}>
            <Text style={styles.reply}> {reply.description} </Text>
        </View>
    ))
}

export default QuestionList

const styles = StyleSheet.create({
    items: {
        marginBottom: 15
    },
    description: {
        paddingLeft: 7,
        paddingRight: 7,
        marginTop: 5
    },
    replyContainer: {
        paddingLeft: 20,
        marginTop: 5
    },
    reply: {
        color: 'gray' 
    },
})
