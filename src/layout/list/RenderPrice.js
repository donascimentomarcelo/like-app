import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RenderPrice = ({price, oldPrice}) => {
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

