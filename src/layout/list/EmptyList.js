import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyList = ({message}) => {
    return (
        <View style={styles.stylePosition}>
            <Text style={styles.styleFont}>
                { message }
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    stylePosition: {
        alignSelf: 'center',
    },
    styleFont: {
        fontWeight: 'bold'
    }
});

export default EmptyList;
