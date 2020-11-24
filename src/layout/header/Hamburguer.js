import { Drawer, Container, Header } from 'native-base';
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import SideBar from './SideBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as CONST from './../../helpers/Constants'

export default class Hamburguer extends Component {

    constructor(props) {
        super(props);
      }
      
    UNSAFE_componentWillMount() { }

    closeDrawer = () => this.drawer._root.close();

    openDrawer = () => this.drawer._root.open();

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}>
                <Container>
                    <Header style={styles.headerColor}>
                        <Container style={styles.containerHeader}>
                            <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#fff" />
                        </Container>
                    </Header>

                    <View style={styles.container}>
                        {this.props.children}
                    </View>

                </Container>
            </Drawer>

        );
    }
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row', 
        backgroundColor: CONST.PRIMARY, 
        height: 56 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headerColor: {
        backgroundColor: CONST.PRIMARY
    }
});
