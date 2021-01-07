import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import CommentContainer from '../../../layout/containers/comment/CommentContainer';
import LineContainer from '../../../layout/containers/line/LineContainer';
import QuestionContainer from '../../../layout/containers/question/QuestionContainer';
import Footer from '../../../layout/footer/Footer';
import * as CONST from './../../../helpers/Constants';

export default class ProductDetails extends React.Component {
    render() {

        const { product } = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>
                <Image
                    source={{ uri: 'https://source.unsplash.com/collection/190727/1600x900' }}
                    style={styles.avatar} />

                <LineContainer
                    content={`R$ ${product.price}`} 
                    size='big'/>

                {checkDiscount(product.discount)}

                <LineContainer
                    label='Descrição: '
                    content={`${product.description}`} 
                    flexDirection='colunm'/>

                <CommentContainer
                    allComments={true}
                    label={CONST.COMMENTS}
                    comments={product.comments}
                    showAll={false}
                    quantity={CONST.ONE}
                    navigationFn={() => this.props.navigation.navigate('CommentList', product.comments)} />

                <QuestionContainer
                    allQuestions={true}
                    label={CONST.QUESTIONS}
                    questions={product.questions}
                    navigationFn={() => this.props.navigation.navigate('QuestionList', product.questions)}
                    showAll={false}
                    showForm={true}
                    quantity={CONST.ONE} />

                <Footer />
            </ScrollView>
        );
    }
};

const checkDiscount = (discount) => {
    return discount ?
        (<LineContainer
            label='OFF'
            content={`${discount}%`} 
            flexDirection='row'/>) :
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