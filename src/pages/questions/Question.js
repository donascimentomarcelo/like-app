import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import QuestionContainer from '../../layout/containers/question/QuestionContainer';

export default class Question extends Component {
    render() {
        const querstions = this.props.navigation.state.params;
        return (
            <QuestionContainer
                allQuestions={false}
                questions={querstions}
                showAll={true}
                showForm={false}/>
        )
    }
}

const styles = StyleSheet.create({})
