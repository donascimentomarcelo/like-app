import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import FormRow from '../../layout/form/FormRow';

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder='user.name'/>
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder='****'
                        secureTextEntry/>
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});
