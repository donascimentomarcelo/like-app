import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as CONST from './../../helpers/Constants';
const ButtonOutline = ({label, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} 
                          onPress={() => onPress()}>
            <View style={styles.btnContent}>
                <Text style={styles.btnText}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonOutline;

const styles = StyleSheet.create({
    btn: {
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: CONST.PRIMARY,
        borderTopColor: CONST.PRIMARY,
        borderLeftColor: CONST.PRIMARY,
        borderRightColor: CONST.PRIMARY,
    },  
    btnContent: {
        backgroundColor: CONST.SECONDARY,
        borderColor: CONST.PRIMARY,
    },
    btnText: {
        margin: 5,
        textAlign: "center",
        color: CONST.PRIMARY,
        fontSize: 17,
    }
});
