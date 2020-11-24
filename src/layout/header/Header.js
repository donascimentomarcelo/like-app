import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = props => {
    const { navigation } = props;
    
    const openMenu = () => navigation.openDrawer();
    
    return (    
        <View style={styles.header}>
            <MaterialIcons 
                name="menu" 
                size={32} 
                color="green" 
                onPress={openMenu}
                style={styles.icon}/>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16,
        color: '#fff'
    }
});

export default Header;