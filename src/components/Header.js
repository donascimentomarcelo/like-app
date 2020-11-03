import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fff'
    }
});

export default Header;