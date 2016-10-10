import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
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
        fontSize: 20
    },
    posterView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    poster: {
        width: 180,
        height: 254,
        margin: 12
    }
});

export class MovieDetails extends Component {
    render() {
        const {movie, navigator} = this.props;
        const poster = {
            uri: movie.posters.detailed
        };

        return (
            <View style={styles.container}>
                <View style={styles.titleRow}>
                    <Text onPress={() => navigator.pop()} style={styles.title}>{movie.title}</Text>
                    <Text style={styles.audienceScore}>{movie.ratings.audienceScore}</Text>
                </View>
                <View style={styles.posterView}>
                    <Image source={poster} style={styles.poster}/>
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