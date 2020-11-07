import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { capitalizeFristLetter } from '../../../utils/Utils';

const ProductList = props => {

    const { products, navigationDetail } = props || [];
    const elements =  products.map(product => {
        const { id, name, price } = product;
        return (
            <TouchableOpacity 
                key={ id } 
                onPress={() => navigationDetail({ product })}>

                <View style={styles.line}>
                    <Image 
                        style={styles.avatar}
                        source={{ uri: 'https://randomuser.me/api/portraits/thumb/women/66.jpg' }}/>
                    <Text style={styles.lineText}>{ `${capitalizeFristLetter(name)} ${price}` }</Text>
                </View>
            </TouchableOpacity>
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
        backgroundColor: '#f0efef'
    },
    line: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 15,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        width: 50,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50
    }
});

export default ProductList;