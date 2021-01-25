import React from 'react'
import { StyleSheet } from 'react-native'
import * as CONST from './../../helpers/Constants'
import FormSearchBar from '../form/FormSearchBar';
import { Item, Input, Icon } from 'native-base';
import Axios from 'axios';
import * as Env from './../../helpers/Env'
import Autocomplete from '../autocomplete/Autocomplete';

const SearchBar = ({ navigation }) => {

    const [items, setItems] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const cleanSearch = () => {
        setSearch('');
        setItems([]);
    };

    const onChange = async text => {
        setSearch(text)

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

    const productDetail = product => {
        navigation.navigate('ProductDetails', { product });
        cleanSearch();
    }

    return (
        <FormSearchBar>
            <Item>
                <Icon name="search" style={styles.search} />
                <Input
                    placeholder={CONST.SEARCH_PRODUCTS}
                    onChangeText={onChange}
                    value={search}
                    autoCapitalize='none'
                />
                <Icon
                    onPress={() => cleanSearch()}
                    name="close"
                    style={styles.close} />
            </Item>
            <Autocomplete
                items={items}
                onClickFn={productDetail} />
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
