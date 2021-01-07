import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Text, ListItem, Left, Right, List } from 'native-base';

const Autocomplete = ({ items = [] }) => {

    return (
        <List>
            { 
                items.map(item => (
                    <ListItem noIndent key={item.id} style={styles.list}>
                        <Left>
                            <Text>{item.name}</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default Autocomplete

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white'
    }
})
