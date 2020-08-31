import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../CSS/Option.css';
//import Home from "../screens/Home"

const Option = (props) => {
  const [isSetting, setIsSetting] = useState(true);
  return (
    <div className="menu">
      <label for="menu_bar01">オプション</label>
      <input
        type="checkbox"
        id="menu_bar01"
        className="accordion"
        onClick={() => setIsSetting(isSetting ? false : true)}
      />
      <ul id="links01">
        <li><a href="/">HOME</a></li>
        <li><a href="/signup">新規利用者登録</a></li>
        <li><a href="">ログアウト</a></li>
      </ul>
    </div>
  );
};

export default Option;
