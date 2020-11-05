import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


const ProductList = props => {

    const { products } = props || [];
    const elements =  products.map(product => {
        const { name, id } = product;
        return (
            <View key={ id } style={styles.line}>
                <Text style={styles.lineText}>{ name }</Text>
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
        fontSize: 20,
        paddingLeft: 15
    }
});

export default ProductList;