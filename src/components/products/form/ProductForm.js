import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import Line from '../../../layout/Line';

export default class ProductForm extends React.Component {
    render() {

        const {product} = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>
                <Image 
                    source={{ uri: 'https://randomuser.me/api/portraits/women/66.jpg'}}
                    style={styles.avatar}/>
                
                <Line
                    label='Descrição: '
                    content={`${product.description}`}/>

                <Line
                    label='Preço: '
                    content={`R$ ${product.price}`}/>

                {checkDiscount(product.discount)}
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