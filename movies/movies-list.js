import React, {Component} from 'react';
import {StyleSheet, View, ListView} from 'react-native';
import {ListItem} from 'react-native-elements'

const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
});

var styles = StyleSheet.create({container:{
    flex: 1
}});

export class MoviesList extends Component {
    renderRow(movie) {
        return (
            <ListItem key={movie.id} title={movie.title}></ListItem>
        );
    }

    render() {
        var movies = dataSource.cloneWithRows(this.props.movies);

        return (
            <View style={styles.container}>
                <ListView dataSource={movies} renderRow={this.renderRow}></ListView>
            </View>
        );
    }
}