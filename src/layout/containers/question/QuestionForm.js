import React, { PureComponent } from 'react'
import { Button, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import FormRow from '../../form/FormRow';
import * as CONST from './../../../helpers/Constants';

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
                    color={CONST.PRIMARY} />
            </View>
        )
    }

    addQuestion = description => {
        this.onChangeHandler('description', '')
        this.props.addQuestion(description);
    }

    onChangeHandler = (field, value) => this.setState({ [field]: value });
}

