import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {SplitViewWindows} from 'react-native-windows';
import {MoviesList} from './movies-list';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    paneView: {
        flex: 1,
        backgroundColor: '#eee'
    },
    genresLabel: {
        textAlign: 'right',
        marginRight: 12
    }
});

export class MoviesContainer extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            genres: []
        };

        this.openPane = this
            .openPane
            .bind(this);
    }

    openPane() {
        this
            .refs
            .svw
            .openPane()
    }

    componentDidMount() {
        fetch('http://rawstack.azurewebsites.net/api/movies')
            .then(response => response.json())
            .then(movies => {
                const genres = Object.keys(movies.reduce((previous, movie) => {
                    movie
                        .genres
                        .forEach(genre => previous[genre] = 0)
                    return previous;
                }, {}));

                this.setState({movies, genres});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const paneView = (
            <View style={styles.paneView}>
                {this
                    .state
                    .genres
                    .map(g => <Text key={g}>{g}</Text>)}
            </View>
        );

        return (
            <SplitViewWindows
                ref='svw'
                paneWidth={200}
                panePosition={SplitViewWindows.positions.Right}
                renderPaneView={() => paneView}>
                <View style={styles.container}>
                    <TouchableHighlight onPress={this.openPane}>
                        <Text style={styles.genresLabel}>
                            Genres
                        </Text>
                    </TouchableHighlight >
                    <MoviesList movies={this.state.movies} navigator={this.props.navigator}/>
                </View>
            </SplitViewWindows>
        );
    }
}