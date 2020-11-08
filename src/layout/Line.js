import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as CONST from '../helpers/Constants';

const Line = ({ label = '-', content = '-'}) => {
    return (
        <View style={styles.detail}>
            <View style={styles.line}>
                <Text style={[
                    styles.cell, 
                    styles.label, 
                    smartLabel(label)
                ]}> {label}</Text>
                <Text style={[styles.cell, styles.content]}>{content}</Text>
            </View>
        </View>
    )
}

const smartLabel = label => label && label.length > CONST.EIGHT ? styles.longLabel : null;

const styles = StyleSheet.create({
    detail: {
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
    },
    cell: {
        fontSize: 16,
        paddingLeft: 5,

    },
    label: {
        fontWeight: 'bold',
        flex: 2
    }, 
    content: {
        flex: 3
    }, 
    longLabel: {
        fontSize: 14
    } 
});

export default Line;