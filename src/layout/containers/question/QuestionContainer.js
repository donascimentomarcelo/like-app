import React from 'react'
import { StyleSheet, View } from 'react-native'
import { filterArrayByQuantity } from '../../../utils/Utils';
import QuestionList from '../../../pages/questions/list/QuestionList';
import Title from '../../header/Title';

const QuestionContainer = (
    { 
        label, 
        questions, 
        allQuestions, 
        navigationFn, 
        showAll, 
        showForm, 
        quantity = 0,
        enableSendButton,
        productId
    }) => {

    return (
        <View>
            <Title
                label={label} />

            <QuestionList
                questions={filterArrayByQuantity(questions, showAll, quantity)}
                allQuestions={allQuestions}
                navigationFn={navigationFn}
                showForm={showForm}
                enableSendButton={enableSendButton}
                productId={productId} />

        </View>
    )
}

export default QuestionContainer

const styles = StyleSheet.create({})
