import React from 'react';
import './SideBar.css';
import Surya from './image/surya.jpg';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {StyledMenu} from './sideBarStyled'; 


function SideBar({open}) {
    const navLinks = [
        {
            name:"Home",
            to:"/",
        },
        {
            name:"About Me",
            to:"/about",
        },
        {
            name:"What I Do",
            to:"/what-i-do",
        },
        {
            name:"Contact",
            to:"/contact",
        },
    ]
    const socialLinks = [
        {
            link:<FaFacebook />,
            to:'https://www.facebook.com/surya.reddy.148/'
        },
        {
            link:<FaInstagram />,
            to:"https://www.instagram.com/surya_mechicon/"
        },
        {
            link:<FaLinkedin />,
            to:'https://www.linkedin.com/in/surya-s-10b45219a'
        }
    ]
    return (
        <StyledMenu open={open}>
            <div className="sidenavbar">
                <div className="logo-img">
                    <img src={Surya} alt="pic"/>
                    <div className="logo-title">
                        <h5>SURYA</h5>
                    </div>
                </div>
                <ul className='list-item'>
                    {
                        navLinks.map((links,index)=>{
                            let active = "";
                            if (index === links) {
                                active = "nav-active";
                            }
                            return(
                                <li>
                                    {console.log(index,"index")}
                                    <a key={index} href={links.to} className={active}>{links.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="social-media">
                    <ul className="media-list">
                        {
                            socialLinks.map((social,index)=>{
                                return(
                                    <li 
                                        key={index}
                                    >
                                        <a href={social.to} target="_blank">{social.link}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </StyledMenu>
    );
}

export default SideBar;