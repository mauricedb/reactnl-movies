import React, {Component} from 'react';
import {StyleSheet, Text, View, ToolbarAndroid} from 'react-native';

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

// <ToolbarAndroid title='The movie list' style={styles.toolbar}>
// </ToolbarAndroid>

export class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>
                    The movie list
                </Text>
            </View>
        );
    }
}