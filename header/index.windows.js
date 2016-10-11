import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    toolbar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#a9a9a9'
    },
    header: {
        fontSize: 20,
        padding: 12,
        fontWeight: 'bold'
    }
});

export class Header extends Component {
    render() {
        let navIcon = null;
        if (this.props.showBackButton) {
            navIcon = <Text style={styles.header} onPress={this.props.navigator.pop}>🡨
            </Text>
        }

        return (
            <View>
                <View style={styles.toolbar}>
                    {navIcon}
                    <Text style={styles.header}>ReactNL Movies</Text>
                </View>
            </View>
        );

        //
    }
}