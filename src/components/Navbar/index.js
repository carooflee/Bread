import React from 'react';
import {Fabars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem. NavLinks, NavBtn, NavBtnLink} from './NavElements';

const Navbar = () => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    bread
                </NavLogo>
                <MobileIcon>
                    <faBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">
                            Sign Up
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to ="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar