import Axios from 'axios';
import React from 'react';
import Toast from 'react-native-tiny-toast'
import { Button, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FormRow from '../../../layout/form/FormRow';
import LoadingComponent from '../../../layout/loading/LoadingComponent';

import * as CONST from './../../../helpers/Constants';
import * as Env from './../../../helpers/Env';

export default class SignIn extends React.Component {

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

    createUser = () => {
        const { username, password } = this.state;
        this.setState({ loading: true });

        Axios
            .post(`${Env.LOCALHOST}${Env.USERS}`, { username, password })
            .then(resp => {
                console.log(resp)
                this.setState({ hasError: false });
                Toast.showSuccess(CONST.USER_CREATED)
                this.props.navigation.goBack();
            })
            .catch((error) => {
                console.log(error)
                this.setState({ hasError: true })
            })
            .then(() => this.setState({ loading: false }));
    }

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
                title={CONST.CREATE}
                onPress={() => this.createUser()}
                color={CONST.PRIMARY}
                disabled={ this.formEmpty() }/>
        );
    }

    formEmpty = () => this.state.username == '' || this.state.password == '';
    
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
            </View>
        );
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
