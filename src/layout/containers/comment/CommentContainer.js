import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import ButtonGroup from '../../button/ButtonGroup';
import ButtonOutline from '../../button/ButtonOutline';

import * as CONST from '../../../helpers/Constants';

const CommentContainer = ({comments, label, allComments, navigationFn = () => null}) => {
    return (
        <View>
            { showTitle(comments, label, allComments) }
            {
                comments.map((comment, i) => (
                    <View key={i} style={styles.items}>
                        <Text style={styles.titleItem}>{comment.title}</Text>
                        <View style={styles.starRating}>
                            <StarRating 
                                disabled={true}
                                rating={comment.star}
                                starSize={15}
                                fullStarColor={CONST.PRIMARY}/>
                        </View>
                        <Text style={styles.description}>{comment.description}</Text>
                    </View>
                ))
            }
            
            { showButton(allComments, comments, navigationFn) }
        </View>
    )
}

const showTitle = (comments, label, allComments) => {
    if (allComments && comments.length) {
        return (
            <Text style={styles.title}>{label}</Text>
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

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 7,
        marginTop: 10,
        marginBottom: 10,
    },
    titleItem: {
        fontWeight: 'bold',
        paddingLeft: 7,
    },
    description: {
        paddingLeft: 7,
        marginTop: 5
    },
    starRating: {
        paddingLeft: 7,
        width: 30
    },
    items: {
        marginBottom: 15
    }
})
