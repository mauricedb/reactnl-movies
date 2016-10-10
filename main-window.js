import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Navigator, View} from 'react-native';
import {Header} from './header';
import {MoviesContainer} from './movies/movies-container';
import {MovieDetails} from './movie/movie-details';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export class MainWindow extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'movies':
                return (
            <View style={styles.container}>
                <Header navigator={navigator}/>
                    <MoviesContainer navigator={navigator}/>
            </View>
                );
            case 'movie':
                return (
            <View style={styles.container}>
                <Header navigator={navigator} showBackButton={true}/>
                    <MovieDetails navigator={navigator} movie={route.movie}/>
            </View>
                );
            default:
                return <Text onPress={() => navigator.pop()}>Hello {route.name}!</Text>;
        }
    }

    render() {
        return (
                <Navigator
                    initialRoute={{
                    name: 'movies'
                }}
                    renderScene={this.renderScene}/>
        );
    }
}
