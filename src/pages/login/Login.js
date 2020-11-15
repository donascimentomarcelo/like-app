import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import FormRow from '../../layout/form/FormRow';

import * as CONST from './../../helpers/Constants';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onChangeHandler = (field, value) => this.setState({ [field]: value });

    login = () => {
        console.log(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder={CONST.PH_USERNAME}
                        value={this.state.username}
                        onChangeText={value => this.onChangeHandler('username', value)}/>
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder={CONST.PH_USERNAME}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}/>
                </FormRow>

                <Button 
                    title={CONST.ENTER}
                    onPress={() => this.login()}
                    color={CONST.RED}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});
