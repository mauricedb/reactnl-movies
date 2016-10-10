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
                return <MoviesContainer navigator={navigator}/>;
            case 'movie':
                return <MovieDetails navigator={navigator} movie={route.movie}/>;
            default:
                return <Text onPress={() => navigator.pop()}>Hello {route.name}!</Text>;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Navigator
                    initialRoute={{
                    name: 'movies'
                }}
                    renderScene={this.renderScene}/>
            </View>
        );
    }
}
