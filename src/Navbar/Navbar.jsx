import React from 'react'
import { NavbarWrapper, NavbarLeft, NavbarCenter, NavbarRight, NavbarRightFullCell, NavbarPricesSlider } from './NavbarStyled'
import { BsCode, BsCodeSlash, BsTwitter, BsGithub, BsEnvelopeFill, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { TokenPrices } from './TokenPrices/TokenPrices';

export const Navbar = (props) => {
  return (
    <>
        <NavbarWrapper>
            <NavbarLeft>
                <BsCode style={{fontSize: "30px"}}/> <h3 style={{padding: "15px"}}>Tommy Atkins</h3> <BsCodeSlash style={{fontSize: "30px"}}/>
            </NavbarLeft>

            <NavbarCenter />

            <NavbarRight>
                <NavbarRightFullCell><a href="https://twitter.com/home" target="_blank"><BsTwitter /></a></NavbarRightFullCell>
                <NavbarRightFullCell><a href="https://github.com/Tommy15101" target="_blank"><BsGithub /></a></NavbarRightFullCell>
                <NavbarRightFullCell><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><BsEnvelopeFill /></a></NavbarRightFullCell>
                <NavbarRightFullCell><a href="https://www.youtube.com/feed/subscriptions" target="_blank"><BsYoutube /></a></NavbarRightFullCell>
                <NavbarRightFullCell><a href="https://www.linkedin.com/feed/" target="_blank"><BsLinkedin /></a></NavbarRightFullCell>
            </NavbarRight>

            <NavbarPricesSlider>
              <TokenPrices token={props.token}/>
            </NavbarPricesSlider>
        </NavbarWrapper>
    </>
  )
}
