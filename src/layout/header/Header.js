import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = props => {
    const { navigation, detailsType = false } = props;
    
    const openMenu = () => navigation.openDrawer();

    const renderMenu = () => {
        return !detailsType ?
                (<MaterialIcons 
                    name="menu" 
                    size={32} 
                    color="green" 
                    onPress={openMenu}
                    style={styles.icon}/>) :
                null
    }
    
    return (    
        <View style={[
            styles.header, 
            !detailsType ? 
                styles.headerAlignCenter : 
                null]}>
            { renderMenu() }
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    headerAlignCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
        color: '#fff'
    }
});

export default Header;