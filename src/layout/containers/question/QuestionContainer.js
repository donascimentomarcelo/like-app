import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonGroup from '../../button/ButtonGroup';
import ButtonOutline from '../../button/ButtonOutline';
import * as CONST from '../../../helpers/Constants';
import { filterArrayByQuantity } from '../../../utils/Utils';
import QuestionList from '../../../pages/questions/list/QuestionList';

const QuestionContainer = ({label, questions, allQuestions, navigationFn, showAll, quantity = 0}) => {
    questions = filterArrayByQuantity(questions, showAll, quantity);
    
    return (
        <View>
            { showTitle(questions, label, allQuestions) }

            <QuestionList
                questions={questions}/>
            
            { showButton(allQuestions, questions, navigationFn) }
        </View>
    )
}

const showTitle = (questions, label, allQuestions) => {
    if (allQuestions && questions.length) {
        return (
            <Text style={styles.title}>{label}</Text>
        );
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
    }
})
