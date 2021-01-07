import React from 'react'
import { StyleSheet, Text } from 'react-native'

const HeaderTitle = ({ title }) => {
    return (
        <Text style={styles.headerText}>{title}</Text>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
    }
})
