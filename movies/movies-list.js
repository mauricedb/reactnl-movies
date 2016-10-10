import React, {Component} from 'react';
import {StyleSheet, View, ListView} from 'react-native';
import {ListItem} from 'react-native-elements'

const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subtitle: {
        width: 300
    },
    avatar: {
        height: 100,
        width: 60
    }
});

export class MoviesList extends Component {
    renderRow(movie) {
        return (
            <ListItem
                key={movie.id}
                title={movie.title}
                subtitle={movie.criticsConsensus || ''}
                subtitleStyle={styles.subtitle}
                avatar={movie.posters.profile}
                avatarStyle={styles.avatar}></ListItem>
        );
    }

    render() {
        var movies = dataSource.cloneWithRows(this.props.movies);

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={movies}
                    renderRow={this.renderRow}
                    enableEmptySections={true}></ListView>
            </View>
        );
    }
}