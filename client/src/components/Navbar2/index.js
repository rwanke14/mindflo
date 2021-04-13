import React from 'react';
// import { NavItem } from 'react-bootstrap';
import { FaBars} from 'react-icons/fa'
import {useLocation} from "react-router-dom"
import {
  Navdiv,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navigation = () => {

let {pathname} = useLocation() ;


console.log(pathname)


  return (
    <>
      <Navdiv >
        <NavbarContainer sticky = "top">
          <NavLogo to = "/">mindflō</NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          { pathname === "/signin" || pathname === "/dashboard" || pathname === "/blog"  ?   <>  </> : 
          <NavMenu>
            <NavItem> 
              <NavLinks to ="meditation" smooth ={true} duration ={500} >Meditation</NavLinks>  
              </NavItem>
              <NavItem>
              <NavLinks to ="dashboard" smooth ={true} duration ={500}>Dashboard</NavLinks>
            </NavItem>
              <NavItem>
              <NavLinks to ="blog"smooth ={true} duration ={500}>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="signup"smooth ={true} duration ={500}>Sign Up</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="contact"smooth ={true} duration ={500}>Contact Us</NavLinks>
            </NavItem>
            
          </NavMenu>
          } 
          

          <NavBtn>
            <NavBtnLink to ="/signin" >Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Navdiv>
    </>
  );
};

export default Navigation;