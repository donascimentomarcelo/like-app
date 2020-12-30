import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating';
import * as CONST from '../../../helpers/Constants';

const CommentsList = ({comments}) => {
    return (
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
    )
}

export default CommentsList

const styles = StyleSheet.create({
    starRating: {
        paddingLeft: 7,
        width: 30
    },
    items: {
        marginBottom: 15
    },
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
    }
})
