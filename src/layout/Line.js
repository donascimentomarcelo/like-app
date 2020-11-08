import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label, content }) => {
    return (
        <View style={styles.detail}>
            <View style={styles.line}>
                <Text style={[styles.cell, styles.label]}> {label}</Text>
                <Text style={[styles.cell, styles.content]}>{content}</Text>
            </View>
        </View>
    )
}

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
        fontSize: 18,
        paddingLeft: 5,

    },
    label: {
        fontWeight: 'bold',
        flex: 2
    }, 
    content: {
        flex: 3
    }
});

export default Line;