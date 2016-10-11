import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 12
    },
    titleRow: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold'
    },
    audienceScore: {
        fontSize: 20
    },
    genresRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 100
    },
    genres: {
        flex: 1
    },
    genre: {
        fontSize: 20
    },
    year: {
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
    },
    criticsConsensus:{
        fontSize: 20,
        margin: 12        
    }
});

export class MovieDetails extends Component {
    render() {
        const {movie, navigator} = this.props;
        const poster = {
            uri: movie.posters.detailed
        };
        const genres = movie.genres.map(g => <Text key={g} style={styles.genre}>{g}</Text>);

        return (
            <ScrollView style={styles.container}>
                <View style={styles.titleRow}>
                    <Text onPress={() => navigator.pop()} style={styles.title}>{movie.title}</Text>
                    <Text style={styles.audienceScore}>{movie.ratings.audienceScore}</Text>
                </View>
                <View style={styles.posterView}>
                    <Image source={poster} style={styles.poster}/>
                </View>
                <View>
                <Text style={styles.criticsConsensus}>{movie.criticsConsensus || ''}</Text>
                </View>
                <View style={styles.genresRow}>
                    <View style={styles.genres}>{genres}</View>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </ScrollView>
        );
    }
}