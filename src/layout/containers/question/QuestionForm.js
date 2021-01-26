import Axios from 'axios';
import React, { PureComponent } from 'react'
import { Alert, Button, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { getHeader } from '../../../utils/LoginUtils';
import FormRow from '../../form/FormRow';
import * as CONST from './../../../helpers/Constants';
import * as ENV from './../../../helpers/Env'

export default class QuestionForm extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            description: ''
        }
    }

    render() {
        return (
            <View>
                <FormRow first>
                    <TextInput
                        multiline={true}
                        numberOfLines={2}
                        placeholder={CONST.WRITE_YOUR_QUESTION}
                        value={this.state.description}
                        onChangeText={value => this.onChangeHandler('description', value)}
                    />
                </FormRow>

                <Button
                    title={CONST.SEND}
                    onPress={() => this.addQuestion(this.state.description)}
                    color={CONST.PRIMARY}
                    disabled={this.state.enableSendButton} />
            </View>
        )
    }

    addQuestion = async description => {
        this.onChangeHandler('description', '')

        const { productId } = this.props;

        const object = {
            description,
            productId
        };

        const headers = await getHeader();

        Axios
            .post(`${ENV.LOCALHOST}${ENV.QUESTIONS}`, object, { headers })
            .then(() => this.props.addQuestion(description))
            .catch(() => Alert.alert(CONST.SOMETHING_IS_WROG))
    }

    onChangeHandler = (field, value) => this.setState({ [field]: value });
}

