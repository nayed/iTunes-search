import React from 'react'

export default class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <select>
                    <option value="software">Apps</option>
                    <option value="movie">Films</option>
                </select>
                <input type="submit" />
            </div>
        )
    }
}
