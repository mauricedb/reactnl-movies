import React, {Component} from 'react';
import {MoviesList} from './movies-list';

export class MoviesContainer extends Component {
    constructor() {
        super();

        this.state = {
            movies: [
                {
                    id: 1,
                    title: 'Kill Bill'
                }, {
                    id: 2,
                    title: 'Star Trek'
                }, {
                    id: 3,
                    title: 'Apocalypse Now'
                }
            ]
        };
    }
    
    render() {
        return (<MoviesList movies={this.state.movies}/>);
    }
}