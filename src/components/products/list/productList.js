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

const ProductList = props => {

    const { products, navigationDetail } = props || [];

    return (
        <FlatList 
            style={styles.container}
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => renderRows(item, navigationDetail)}/>
    );
};

const renderRows = (product, navigationDetail) => {
    const { id, name, price, description, oldPrice } = product;
    return (
        <TouchableOpacity 
            key={ id } 
            onPress={() => navigationDetail({ product })}>
            
            <Text style={styles.title}>{ `${capitalizeFristLetter(name)}` }</Text>
            
            <View style={styles.line}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://randomuser.me/api/portraits/thumb/women/66.jpg' }}/>
                <Text style={styles.description}>{ description }</Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>
                    { 
                        <RenderPrice 
                            price={price} 
                            oldPrice={oldPrice}/> 
                    }
                </Text>
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
        flexDirection: 'row'
    },
    title : {
        fontWeight: 'bold',
        paddingLeft: 20
    },
    lineText: {
        fontSize: 15,
        paddingLeft: 15,
        flex: 7
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