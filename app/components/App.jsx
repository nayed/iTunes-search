import React from 'react'
import SearchBox from './SearchBox'
import Results from './Results'
import $ from 'jquery'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            searchResults: []
        }
    }

    showResults(response) {
        this.state = {
            searchResults: this.state.searchResults.push(response.results)
        }
    }

    search(URL) {
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response) {
                this.showResults(response)
            }.bind(this)
        })
    }

    componentDidMount() {
        this.search('https://itunes.apple.com/search?term=fun')
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <SearchBox />
                <Results />
            </div>
        )
    }
}
