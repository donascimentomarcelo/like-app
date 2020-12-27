import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LineContainer = ({label='', content, size='small', flexDirection='row'}) => {
    return (
        <View style={styles.detail}>
            <View style={[styles.line, flexDirectionType(flexDirection)]}>
                <Text style={styles.label}> {label}</Text>
                <Text style={[styles.content, sizeType(size)]}>{content}</Text>
            </View>
        </View>
    )
}

const sizeType = size => {
    switch (size) {
        case 'small':
            return styles.contentSmall;

        case 'medium':
            return styles.contentMedium;

        case 'big':
            return styles.contentBig;
    
        default:
            return styles.contentSmall;
    }
}

const flexDirectionType = flexDirection => {
    switch (flexDirection) {
        case 'row':
            return styles.lineRow;
        case 'colunm':
            return styles.lineColunm;
    
        default:
            return styles.lineRow;;
    }
}

export default LineContainer

const styles = StyleSheet.create({
    detail: {
        marginTop: 20,
    },
    
    line: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    lineRow: {
        flexDirection: 'row',
    },
    lineColunm: {
        flexDirection: 'column',
    },

    label: {
        fontSize: 16,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    
    content: {
        paddingLeft: 0,
    },
    contentSmall: {
        fontSize: 15,
        paddingLeft: 10,
    },
    contentMedium: {
        fontSize: 20,
        paddingLeft: 5,
    },
    contentBig: {
        fontSize: 30,
    },
})

