import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EmptyList from '../../../layout/list/EmptyList'
import { capitalizeFristLetter } from '../../../utils/Utils'
import * as CONST from './../../../helpers/Constants'

const CategoryList = ({ categories, navigationDetail }) => {
    return (
        categories.length > CONST.ZERO ?
            <FlatList
                style={styles.container}
                data={categories}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => renderRows(item, navigationDetail)}/> :
            <EmptyList 
                message={CONST.EMPTY_CATEGORY_LIST}/>
    )
}

const renderRows = (category, navigationDetail) => {
    const { id, name } = category;
    return (
        <TouchableOpacity 
            key={ id } 
            onPress={() => navigationDetail({ category })}>
            
            <View style={styles.borderLine}>
                <View style={styles.line}>
                    <Image 
                        style={styles.avatar}
                        source={{ uri: 'https://source.unsplash.com/collection/190727/1600x900' }}/>

                    <Text style={styles.title}>{ `${capitalizeFristLetter(name)}` }</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default CategoryList

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
    avatar: {
        aspectRatio: 1,
        width: 50,
        height: 50,
        // flex: 1,

        marginLeft: 15,
        borderRadius: 50
    }
})
