import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RenderPrice = ({price, oldPrice}) => {
    return price && oldPrice ?
        (
            <View style={styles.alignPrice}>
                <Text style={styles.oldPrice}> De R$ { oldPrice } </Text> 
                <Text style={styles.currentPrice}> 
                        Por R$ { price }
                </Text>
            </View> 
        ) :
        (
            <View style={styles.alignPrice}>
                <Text style={styles.alonePrice}>
                    R$ {price} 
                </Text>
            </View>
        );
}

const styles = StyleSheet.create({

    alignPrice: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginRight: 20
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
    }
});

export default RenderPrice;

