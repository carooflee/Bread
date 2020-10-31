import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavElements';

const Navbar = () => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    bread
                </NavLogo>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar