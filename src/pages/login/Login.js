import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import FormRow from '../../layout/form/FormRow';

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
                        placeholder='user.name'
                        value={this.state.username}
                        onChangeText={value => this.onChangeHandler('username', value)}/>
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder='****'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}/>
                </FormRow>

                <Button 
                    title='Entrar'
                    onPress={() => this.login()}/>
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
