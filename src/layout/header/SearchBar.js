import React from 'react'
import { StyleSheet } from 'react-native'
import * as CONST from './../../helpers/Constants'
import FormSearchBar from '../form/FormSearchBar';
import { Item, Input, Icon } from 'native-base';
import Axios from 'axios';
import * as Env from './../../helpers/Env'
import Autocomplete from '../autocomplete/Autocomplete';

const SearchBar = ({navigation}) => {

    const [items, setItems] = React.useState([]);

    const cleanSearch = () => null;

    const handleSearch = async text => {
        if (text && text.length > CONST.TWO) {
        await Axios
                .get(`${Env.LOCALHOST}${Env.PRODUCTS}/findByProductsOrCategories?text=${text}`)
                .then(resp => {
                    const { data } = resp;
                    setItems(data)
                });
            return;
        }

        setItems([])
    }

    const productDetail = product => navigation.navigate('ProductDetails', { product })

    return (
        <FormSearchBar>
            <Item>
                <Icon name="search" style={ styles.search }/>
                <Input placeholder={CONST.SEARCH_PRODUCTS}
                    onChangeText={handleSearch} />
                <Icon name="close" onPress={cleanSearch} style={ styles.close }/>
            </Item>
            <Autocomplete
                items={items}
                onClickFn={productDetail}/>
        </FormSearchBar>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    search: {
        paddingLeft: 15
    },
    close: {
        paddingRight: 15
    }
})