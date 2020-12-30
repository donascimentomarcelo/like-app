import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonGroup from '../../button/ButtonGroup';
import ButtonOutline from '../../button/ButtonOutline';

import * as CONST from '../../../helpers/Constants';
import CommentsList from '../../../pages/comments/list/CommentsList';
import Title from '../../header/Title';

const CommentContainer = ({comments, label, allComments, navigationFn = () => null}) => {
    return (
        <View>
            { showTitle(comments, label, allComments) }

            <CommentsList
                comments={comments}/>
            
            { showButton(allComments, comments, navigationFn) }
        </View>
    )
}

const showTitle = (comments, label, allComments) => {
    if (allComments && comments.length) {
        return (
            <Title
                label={label}/>
        );
    }
}

const showButton = (allComments, comments, navigationFn) => {
    if (allComments && comments.length) {
        return (
            <ButtonGroup>
                <ButtonOutline
                    label={CONST.READ_ALL_COMMENTS}
                    onPress={() => navigationFn() }/>
            </ButtonGroup>
        );
    }
}

export default CommentContainer

const styles = StyleSheet.create({})
