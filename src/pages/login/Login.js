import Axios from 'axios';
import React from 'react';
import { 
    View,
    Text, 
    TextInput, 
    StyleSheet, 
    Button
} from 'react-native';
import ButtonOutline from '../../layout/button/ButtonOutline';
import FormRow from '../../layout/form/FormRow';
import LoadingComponent from '../../layout/loading/LoadingComponent';
import ErrorMessageComponent from '../../layout/message/ErrorMessage';

import * as CONST from './../../helpers/Constants';
import * as Env from './../../helpers/Env';


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false,
            hasError: false,
        };
    }

    onChangeHandler = (field, value) => this.setState({ [field]: value });

    login = () => {
        const { username, password } = this.state;
        this.setState({ loading: true });
        
        Axios
            .post(`${Env.LOCALHOST}${Env.LOGIN}`, { username, password })
            .then(resp => {
                console.log(resp)
                this.setState({ hasError: false });
            })
            .catch((error) => this.setState({ hasError: true }))
            .then(() => this.setState({ loading: false }));
    }

    signIn = () => this.props.navigation.navigate('SignInForm')

    renderButton = () => {
        if (this.state.loading) {
            return <LoadingComponent
                        loading={this.state.loading}
                        hasError={this.state.hasError}
                        size={CONST.LARGE}
                        color={CONST.PRIMARY}/>
        }

        return (
            <Button 
                title={CONST.ENTER}
                onPress={() => this.login()}
                color={CONST.PRIMARY}/>
        );
    }

    renderMessage = () => {
        return (
            <ErrorMessageComponent
                message={CONST.AUTH_ERROR}
                hasError={this.state.hasError}/>
        )
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
                        placeholder={CONST.PH_PASSWORD}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}/>
                </FormRow>

                { this.renderButton() }

                <ButtonOutline
                        label={CONST.NEW}
                        onPress={() => this.signIn()}/>

                { this.renderMessage() }
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
