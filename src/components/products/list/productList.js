import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { capitalizeFristLetter } from '../../../utils/Utils';

const ProductList = props => {

    const { products } = props || [];
    const elements =  products.map(product => {
        const { id, name, price } = product;
        return (
            <View key={ id } style={styles.line}>
                <Text style={styles.lineText}>{ `${capitalizeFristLetter(name)} ${price}` }</Text>
            </View>
        );
    });

    return (
        <View style={styles.container}>
            { elements }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
    line: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 15,
        paddingLeft: 15
    }
});

export default ProductList;