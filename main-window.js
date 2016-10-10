import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {Header} from './header';
import {MoviesContainer} from './movies/movies-container';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export class MainWindow extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <MoviesContainer />
            </View>
        );
    }
}

