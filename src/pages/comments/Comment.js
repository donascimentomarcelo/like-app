import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import CommentContainer from '../../layout/containers/comment/CommentContainer';


export default class Comment extends Component {
    render() {
        const comments = this.props.navigation.state.params;
        return (
            <CommentContainer
                allComments={false}
                comments={comments}/>
        )
    }
}

const styles = StyleSheet.create({})
