import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Autocomplete = ({ items = [] , onClickFn}) => {

    const onClick = (item) => onClickFn(item)

    return (
        <View>
            {
                items.map(item => (
                    <TouchableOpacity
                        button={true}
                        key={item.id}
                        style={styles.detail}
                        onPress={() => onClick(item)}>
                        <View style={styles.line}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Icon name="arrow-forward" style={styles.item} />
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default Autocomplete

const styles = StyleSheet.create({
    detail: {
        backgroundColor: 'white',
        width: '100%',
        elevation: 1,
        height: 40,
        paddingTop: 10,
    },
    line: {
        flexDirection: 'row',
    },
    text: {
        flex: 2,
        paddingLeft: 20
    },
    item: {
        paddingRight: 20,
        alignItems: 'flex-end'
    }
})
