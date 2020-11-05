import React from 'react'
import { View, Text } from 'react-native';


const ProductList = props => {

    const { products } = props || [];
    const elements =  products.map(product => {
        const { name, id } = product;
        return <Text key={ id }>{ name }</Text>;
    });

    return (
        <View>
            { elements }
        </View>
    );
};

export default ProductList;