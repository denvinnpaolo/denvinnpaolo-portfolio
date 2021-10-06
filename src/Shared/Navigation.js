import React from 'react';
import { NavigationContainer } from './Containers';

const NavBar = (props) => {
    const navItems = ['home', 'about', 'portfolio', 'resume', 'contact']

    return(
        <NavigationContainer>
            <div className="navContents">
                <h1 style={{'fontSize': '40px'}} id="navTitle">DM</h1>
                
                {navItems.map((navItem) => (
                    <div>{navItem}</div>
                ))}

                <h1>.</h1>

            </div>

        </NavigationContainer>
    );
};

export default NavBar;