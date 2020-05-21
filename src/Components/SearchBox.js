import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div style = {{paddingBottom: '15px'}}>
            <input className = 'pa2 ba b--black bg-white br3 tc bw0.8' 
        type = 'search' placeholder = 'Search Robot'
        onChange = {searchChange}/>
        </div> 
    )
}

export default SearchBox;