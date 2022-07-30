import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import MobileNav from "../components/mobileNav"
import "../styles/header.css"

export default function Header(props) {
  //make rounded edges on header buttons
  var title = props.title;

  var menuItems = [
    {name: 'Submit Text', path: '/Submit'},
    {name: 'Contact', path: '/contact'},
    {name: 'How  it works', path: '/how-it-works'}
  ];
  
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hovered, setStyles] = React.useState("");
  
  var backgroundColor = "white";
  var textColor = "black";

  if(title !== "index"){
    backgroundColor = "black";
    textColor = "white";
  }


  //change only one on hover
  var buttonStyles = [];
  for(var i = 0; i < 9; i++){
    buttonStyles.push({ color: textColor, backgroundColor: backgroundColor});
  }

  if(hovered){
    if(buttonStyles[hovered].backgroundColor === "black"){
      buttonStyles[hovered].backgroundColor = "white"
      buttonStyles[hovered].color = "black"
    }
    else{
      buttonStyles[hovered].backgroundColor = "black"
      buttonStyles[hovered].color = "white"
    }
  }
  
  return (
    <>
      <nav style={{
        backgroundColor: backgroundColor
      }}>
        <div className="header topnav" id="myTopnav" style={{
          color: textColor,
          backgroundColor: backgroundColor
        }}>
          <Link className="left" to="/" 
            style={buttonStyles[1]}
            onMouseEnter={() => setStyles(1)}
            onMouseLeave={() => setStyles()}
          >JCC</Link>
          {
            menuItems.map((item, index) => {
              return (
                <Link to={item.path} 
                  style={buttonStyles[(index+2)]}
                  onMouseEnter={() => setStyles((index+2))}
                  onMouseLeave={() => setStyles()}
                >{item.name}</Link>
              )
            })
          }
          <div className="header-icon" onClick={() => setShowMobileNav(!showMobileNav)}>&#9776;</div>
        </div>
        <div className={showMobileNav ? "mobile-nav menu-section" : "hidden menu-section" }>
          <MobileNav menuItems={menuItems} />
        </div>
      </nav>
    </>
  )
}