import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderTitle from './HeaderTitle';
import SearchBar from './SearchBar';

const Header = ({ navigation, detailsType = false, title, searchBar }) => {
    
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

            { searchBar ? <SearchBar/> : <HeaderTitle title={title}/> }

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

    icon: {
        position: 'absolute',
        left: 16,
        color: '#fff'
    }
});

export default Header;