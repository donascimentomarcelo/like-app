import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonGroup from '../button/ButtonGroup';
import ButtonOutline from '../button/ButtonOutline';
import * as CONST from './../../helpers/Constants';

const QuestionContainer = ({label, questions, allQuestions, navigationFn}) => {
    return (
        <View>
            <Text style={styles.title}>{label}</Text>
            {
                questions.map((question, i) => (
                    <View key={i} style={styles.items}>
                        <Text style={styles.description}>{question.description}</Text>
                        
                        {showReplies(allQuestions, question.reply)}

                    </View>
                ))
            }
            
            { showButton(allQuestions, questions, navigationFn) }
        </View>
    )
}

const showReplies = (allQuestions, replies) => {
    if (!allQuestions && replies.length) {
        return replies.map((reply, i) => (
            <View key={i} style={styles.replyContainer}>
                <Text style={styles.reply}> {reply.description} </Text>
            </View>
        ))
    }
}

const showButton = (allQuestions, questions, navigationFn) => {
    if (allQuestions && questions.length) {
        return (
            <ButtonGroup>
                <ButtonOutline
                    label={CONST.READ_ALL_QUESTIONS}
                    onPress={() => navigationFn() }/>
            </ButtonGroup>
        );
    }
}

export default QuestionContainer

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 7,
        marginTop: 10,
        marginBottom: 10,
    },
    items: {
        marginBottom: 15
    },
    description: {
        fontWeight: 'bold',
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
