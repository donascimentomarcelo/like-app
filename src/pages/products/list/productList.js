import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    FlatList } from 'react-native';
import { capitalizeFristLetter } from '../../../utils/Utils';

import RenderPrice from '../../../layout/list/RenderPrice';
import EmptyList from '../../../layout/list/EmptyList';

import * as CONST from './../../../helpers/Constants';

const ProductList = props => {

    const { products, navigationDetail } = props || [];

    return (
        products.length > CONST.ZERO ?
            <FlatList 
                style={styles.container}
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderRows(item, navigationDetail)}/> :
            <EmptyList
                message={CONST.EMPTY_PRODUCT_LIST}/>
    );
};

const renderRows = (product, navigationDetail) => {
    const { id, name, price, description, oldPrice } = product;
    return (
        <TouchableOpacity 
            key={ id } 
            onPress={() => navigationDetail({ product })}>
            
            <View style={styles.borderLine}>
                <Text style={styles.title}>{ `${capitalizeFristLetter(name)}` }</Text>
                
                <View style={styles.line}>
                    <Image 
                        style={styles.avatar}
                        source={{ uri: 'https://randomuser.me/api/portraits/thumb/women/66.jpg' }}/>
                    <Text style={styles.description}>{ description }</Text>
                </View>
                <View style={styles.price}>
                    { 
                        <RenderPrice 
                            price={price} 
                            oldPrice={oldPrice}/> 
                    }
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0efef'
    },
    line: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
    },
    borderLine: {
        borderBottomWidth: 1,
        paddingTop: 5,
        borderBottomColor: '#d6cbd3'
    },
    title : {
        fontWeight: 'bold',
        paddingLeft: 20
    },
    price: {
        fontSize: 15,
        paddingLeft: 15,
        paddingBottom: 15,
    },
    description: {
        color: 'gray',
        fontSize: 13,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        width: 50,
        height: 50,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50
    }
});

export default ProductList;