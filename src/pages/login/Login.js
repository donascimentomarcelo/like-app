import Axios from 'axios';
import React from 'react';
import { 
    View, 
    TextInput, 
    StyleSheet, 
    Button
} from 'react-native';
import FormRow from '../../layout/form/FormRow';
import LoadingComponent from '../../layout/loading/LoadingComponent';

import * as CONST from './../../helpers/Constants';
import * as Env from './../../helpers/Env';


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false
        };
    }

    onChangeHandler = (field, value) => this.setState({ [field]: value });

    login = () => {
        this.setState({ loading: true });
        
        Axios
            .post(`${Env.LOCALHOST}${Env.LOGIN}`, this.state)
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
            .then(() => this.setState({ loading: false }));
    }

    renderButton = () => {
        if (this.state.loading) {
            return <LoadingComponent
                        loading={this.state.loading}
                        size={CONST.LARGE}
                        color={CONST.RED}/>
        }

        return (
            <Button 
                title={CONST.ENTER}
                onPress={() => this.login()}
                color={CONST.RED}/>
        );
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
