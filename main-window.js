import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    View,
    BackAndroid
} from 'react-native';
import {Header} from './header';
import {MoviesContainer} from './movies/movies-container';
import {MovieDetails} from './movie/movie-details';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

let theNavigator = null;

BackAndroid.addEventListener('hardwareBackPress', () => {
    // if (theNavigator.getCurrentRoutes().length === 1) {
    //     // Not handled by us
    //     return false;
    // }

    theNavigator.pop();
    return true;
});

export class MainWindow extends Component {
    static navigator

    renderScene(route, navigator) {
        theNavigator = navigator;

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
        return (<Navigator
            initialRoute={{
                name: 'movies'
            }}
            renderScene={this.renderScene}/>);
    }
}
