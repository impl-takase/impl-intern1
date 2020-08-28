import React from "react";

const Header = (props) => {
  return (
    <div className="hed" style={{ display: "flex" }}>
      <p className="logo">
        <logo>どこでもインプル</logo>
      </p>
      <p className="user">ID：{props.content}
      <br></br>
      ユーザー：{props.content2}</p>
    </div>
  );
};

export default Header;
