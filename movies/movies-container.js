import React, {Component} from 'react';
import {MoviesList} from './movies-list';

export class MoviesContainer extends Component {
    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        fetch('http://rawstack.azurewebsites.net/api/movies')
            .then(response => response.json())
            .then(movies => this.setState({movies}))
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (<MoviesList movies={this.state.movies}/>);
    }
}