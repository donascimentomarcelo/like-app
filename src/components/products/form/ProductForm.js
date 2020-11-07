import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ProductForm extends React.Component {
    render() {

        const {product} = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: 'https://randomuser.me/api/portraits/women/66.jpg'}}
                    style={styles.avatar}/>
                    
                <View style={styles.detail}>
                    <View style={styles.line}>
                        <Text style={styles.label}>Preço: </Text>
                        <Text style={styles.content}>R$ { product.price}</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1
    },
    detail: {
        marginTop: 20,
        elevation: 1 
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
    },
    label: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 18,
        paddingLeft: 5,
    }
});