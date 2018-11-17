import React from 'react'
import Search from './Search/Search'

const Header = () => {
    return (
        <div>
           <header className="header">
              <div className="branding"> 
                <h3>the js stack</h3>
                <p>A curated list of the hottest Javascript tools for developers.</p>
                <Search />
              </div>
           </header> 
        </div>
    )
}

export default Header