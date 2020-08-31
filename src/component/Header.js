import React from "react";
import '../CSS/Header.css';
import Option from "./Option";

const Header = (props) => {
  return (
    <div className="hed" style={{ display: "flex" }}>
      <p className="logo">
        <logo>どこでもインプル</logo>
      </p>
       <p className="user">
           ID：aaa
           {/* {props.content} */}
      </p>
      
       <Option /> 
    
    </div>
  );
};

export default Header;