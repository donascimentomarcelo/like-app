import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonGroup from '../../../layout/button/ButtonGroup'
import ButtonOutline from '../../../layout/button/ButtonOutline'
import QuestionForm from '../../../layout/containers/question/QuestionForm'
import Reply from '../../../layout/containers/reply/Reply'
import * as CONST from './../../../helpers/Constants'

const QuestionList = props => {

    const { allQuestions, navigationFn, showForm } = props;

    const [questions, setQuestions] = React.useState(props.questions);

    const renderButton = () => {
        if (allQuestions && questions.length) {
            return (
                <ButtonGroup>
                    <ButtonOutline
                        label={CONST.READ_ALL_QUESTIONS}
                        onPress={() => navigationFn()} />
                </ButtonGroup>
            );
        }
    }

    const renderForm = () => {
        if (showForm) {
            return (
                <QuestionForm
                    addQuestion={(question) => addQuestion(question)} />
            )
        }
    }

    const renderQuestions = () => {
        return (
            questions
                .sort((a, b) => b.id - a.id)
                .map((question, i) => (
                    <View key={i} style={styles.items}>
                        <Text style={styles.description}>{question.description}</Text>
                        <Reply
                            replies={question.reply || []} />
                    </View>
                ))
        );
    }

    const addQuestion = (question) => {
        setQuestions([
            ...questions,
            { description: question, id: 4 }
        ]);
    }

    return (
        <View>
            { renderForm() }

            { renderQuestions() }

            { renderButton() }
        </View>
    )
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
})
