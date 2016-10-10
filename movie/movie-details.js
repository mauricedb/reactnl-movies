import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

var styles = StyleSheet.create({
    container: {
        padding: 12
    },
    titleRow: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'

    },
    audienceScore: {
        fontSize: 20,
        // flexDirection: 'row',
    },
    poster: {
        width: 134,
        height: 200
    }
});

export class MovieDetails extends Component {
    render() {
        const {movie, navigator} = this.props;
        const poster = {
            uri: movie.posters.profile
        };

        return (
            <View style={styles.container}>
                <Image source={poster} style={styles.poster}/>
                <View style={styles.titleRow}>
                    <Text onPress={() => navigator.pop()} style={styles.title}>{movie.title}</Text>
                    <Text style={styles.audienceScore}>{movie.ratings.audienceScore}</Text>
                </View>

                <View style={styles.titleRow}>
                    <Text style={styles.title}>Genres</Text>
                    <Text>{movie.year}</Text>
                </View>
                <Text>{movie.criticsConsensus || ''}</Text>

            </View>
        );
    }
}