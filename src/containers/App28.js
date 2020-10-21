import React, { Component } from 'react';
import { Demo28 } from '../Demo28';
import CardList28 from '../components/CardList28';
import SearchBox28 from '../components/SearchBox28';

class App28 extends Component {
    constructor() {
        super();
        this.state = {
            demos: Demo28,
            searchField: ''
        }
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredDemos = this.state.demos.filter(demo => {
            return demo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.demos.length === 0){
            return <h1>Loading...</h1>
        }
        else{
            return(
                <div>
                    <h1>Project1</h1>
                    <SearchBox28 searchChange={this.onSearchChange} />
                    <CardList28 Demo28={filteredDemos} />
                </div>
            )
        }
    }
}

export default App28;
