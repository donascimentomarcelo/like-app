import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { capitalizeFristLetter } from '../../../utils/Utils';

const ProductList = props => {

    const { products, navigationDetail } = props || [];
    const elements =  products.map(product => {
        const { id, name, price, description, oldPrice } = product;
        return (
            <TouchableOpacity 
                key={ id } 
                onPress={() => navigationDetail({ product })}>
                
                <Text style={styles.title}>{ `${capitalizeFristLetter(name)}` }</Text>
                
                <View style={styles.line}>
                    <Image 
                        style={styles.avatar}
                        source={{ uri: 'https://randomuser.me/api/portraits/thumb/women/66.jpg' }}/>
                    <Text style={styles.description}>{ description }</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineText}>{ verifyPrice(price, oldPrice) }</Text>
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

const verifyPrice = (price, oldPrice) => {
    return price && oldPrice ?
     (<View style={styles.line}>
        <Text style={styles.oldPrice}> De R$ { oldPrice } </Text> 
        <Text style={styles.currentPrice}> 
                Por R$ { price }
        </Text>
     </View>) :
     (<Text style={styles.lineText}>R$ {price} </Text>);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0efef'
    },
    line: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title : {
        fontWeight: 'bold',
        paddingLeft: 20
    },
    lineText: {
        fontSize: 15,
        paddingLeft: 15,
        flex: 7
    },
    currentPrice: {
        fontSize: 15,
        color: 'green',
        marginLeft: 10
    },
    oldPrice: {
        fontSize: 10,
        color: 'red',
        textDecorationLine: 'line-through',
    },
    description: {
        color: 'gray',
        fontSize: 13,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        width: 50,
        height: 50,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50
    }
});

export default ProductList;