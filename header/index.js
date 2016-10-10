import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ToolbarAndroid} from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#a9a9a9',
        height: 56
    },
    header: {
        backgroundColor: '#a9a9a9',
        fontSize: 20,
        padding: 12,
        fontWeight: 'bold'
    }
});

export class Header extends Component {
    render() {
        let navIconName = null;
        if (this.props.showBackButton) {
            navIconName = 'md-arrow-back';
        }

        return (
            <View>
                <ToolbarAndroid
                    title='ReactNL Movies'
                    navIconName={navIconName}
                    onIconClicked={this.props.navigator.pop}
                    style={styles.toolbar}>
                </ToolbarAndroid>
            </View>
        );

        // <Text style={styles.header}>ReactNL Movies</Text>
    }
}