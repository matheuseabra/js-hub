import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
           <header className="header">
              <div className="branding"> 
                <h3>JS dev tools</h3>
              </div>
              <nav className="nav">
                <li className="nav-item">Repositories</li>
                <li className="nav-item">Topics</li>
                <li className="nav-item">Users</li>
              </nav>
           </header> 
        </React.Fragment>
    )
}

export default Header