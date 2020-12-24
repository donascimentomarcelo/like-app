import { Text, View } from 'native-base';
import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import CommentContainer from '../../../layout/comment/CommentContainer';
import Line from '../../../layout/Line';
import * as CONST from './../../../helpers/Constants';

export default class ProductDetails extends React.Component {
    render() {

        const {product} = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>
                <Image 
                    source={{ uri: 'https://source.unsplash.com/collection/190727/1600x900'}}
                    style={styles.avatar}/>
                
                <Line
                    label='Descrição: '
                    content={`${product.description}`}/>

                <Line
                    label='Preço: '
                    content={`R$ ${product.price}`}/>

                {checkDiscount(product.discount)}

                <CommentContainer
                    allComments={true}
                    label={CONST.COMMENTS}
                    comments={product.comments}
                    navigationFn={() => this.props.navigation.navigate('CommentList', product.comments)}/>
                    
            </ScrollView>
        );
    }
};

const checkDiscount = (discount) => {
    return discount ?
        (<Line
            label='Desconto de: '
            content={`${discount}%`}/>) :
        (null);
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1
    }
});