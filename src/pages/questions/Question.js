import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import QuestionContainer from '../../layout/question/QuestionContainer';

export default class Question extends Component {
    render() {
        const querstions = this.props.navigation.state.params;
        return (
            <QuestionContainer
                allQuestions={false}
                questions={querstions}/>
        )
    }
}

const styles = StyleSheet.create({})
