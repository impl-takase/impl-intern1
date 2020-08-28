import React, { useState } from "react";
import "./App.css";
//import firebase from './firebase';
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "./component/Table";
import TableContent from "./component/TableContent";
import json from "./data.json";

const loginUser = [{ userId: "12345", userName: "Nami" }];

function App() {
  const [isSetting, setIsSetting] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const clicks = () => {
    setIsLogin(isLogin ? false : true);
    setIsSetting(isSetting ? false : true);
  };

  // <div class="menu">
  //     <label for="menu_bar01">オプション</label>
  //     <input type="checkbox" id="menu_bar01" class="accordion" />
  //     <ul id="links01">
  //       <li><a href="">新規利用者の登録</a></li>
  //       <li><a href="">利用者一覧</a></li>
  //       <li><a href="">ログアウト</a></li>
  //     </ul>
  //       </div>

  return (
    <div className="App">
      <header className="App-header">
        {isLogin ? (
          <div>
            <p className="head">
              {loginUser.map((item) => {
                return (
                  <Header content={item.userId} content2={item.userName} />
                );
              })}
            </p>
            <p>
              {/* <button className="btn btn-default" style={{marginLeft: 'auto'}}>A</button>
                  <button>B</button> */}

              {/* <label for="menu_bar01">オプション</label>
              <input type="checkbox" id="menu_bar01" class="accordion" onClick={() => setIsSetting(isSetting ? false : true)} /> */}
              <div className="menu">
                <label for="menu_bar01">オプション</label>
                <input
                  type="checkbox"
                  id="menu_bar01"
                  class="accordion"
                  name='box'
                  onClick={() => setIsSetting(isSetting ? false : true)}
                />
              </div>

              {isSetting ? (
                <div className="links0">
                  <Router>
                    <div>
                      <ul>
                        <Link to="/">
                          <ul id="links01" className="menu">
                            <li1>HOME</li1>
                            <input
                              type="checkbox"
                              id="menu_bar01"
                              class="accordion"
                              name='box'
                            ></input>
                          </ul>
                        </Link>

                        <Link to="/about1">
                          <ul id="links02" className="menu">
                            <li2>新規利用者の登録</li2>
                            <input
                              type="checkbox"
                              id="menu_bar01"
                              class="accordion"
                              name='box'
                            ></input>
                          </ul>
                        </Link>

                        <Link to="/login" className="menu">
                          <ul id="links03" className="menu">
                            <li3>利用者一覧</li3>
                            <input
                              type="checkbox"
                              id="menu_bar01"
                              class="accordion"
                              name='box'
                            ></input>
                          </ul>
                        </Link>

                        <Link to="/about2">
                          <ul id="links03" className="menu">
                            <li
                              onClick={() => setIsLogin(isLogin ? false : true)}
                            >
                              ログアウト
                            </li>
                            <input type="checkbox" name='box'></input>
                          </ul>
                        </Link>
                      </ul>

                      <hr />
                      <Switch>
                        <Route exact path="/">
                          <Home />
                        </Route>
                        <Route path="/about1">
                          <About1 />
                        </Route>
                        <Route path="/about2">
                          <About2 />
                        </Route>
                        <Route path="/login">
                          <Login />
                        </Route>
                      </Switch>
                    </div>
                  </Router>
                </div>
              ) : (
                <div>
                  <Router>
                    <div>
                      <ul>
                        <Link to="/"></Link>
                      </ul>
                      <Switch>
                        <Route exact path="/">
                          <Home />
                        </Route>
                        <Route path="/about1">
                          <About1 />
                        </Route>
                        <Route path="/about2">
                          <About2 />
                        </Route>
                        <Route path="/login">
                          <Login />
                        </Route>
                      </Switch>
                    </div>
                  </Router>
                </div>
              )}
            </p>
          </div>
        ) : (
          <div>
            ログイン画面
            <Router>
              <Link to="">
                <button onClick={clicks}>
                  {isLogin ? "ログアウト" : "ログイン"}
                </button>
              </Link>
            </Router>
          </div>
        )}
      </header>
    </div>
  );
}

const Home = () => {
  const stockMachine = [
    "機械の種類",
    "管理番号",
    "種類",
    "OS",
    "色",
    "機種",
    "モデル",
    "入荷日",
    "保管者",
    "貸出人",
    "削除",
    "変更",
  ];
  const stockBook = [
    "タイトル",
    "管理番号",
    "筆者",
    "領域",
    "入荷日",
    "保管者",
    "貸出人",
    "削除",
    "変更",
  ];
  const stockAll = [
    "機械の種類/タイトル",
    "管理番号",
    "筆者",
    "領域",
    "OS",
    "機種",
    "モデル",
    "色",
    "入荷日",
    "保管者",
    "貸出人",
    "削除",
    "変更",
  ];

  const orderMachine = [
    "機械の種類",
    "管理番号",
    "種類",
    "OS",
    "色",
    "機種",
    "モデル",
    "削除",
    "変更",
  ];
  const orderBook = ["タイトル", "管理番号", "筆者", "領域", "削除", "変更"];
  const orderAll = [
    "機械の種類/タイトル",
    "管理番号",
    "筆者",
    "領域",
    "OS",
    "機種",
    "モデル",
    "色",
    "削除",
    "変更",
  ];

  const [label, setLabel] = useState([]);
  const [context, setContext] = useState([{}]);
  const [labelName, setLabelName] = useState("");
  const [isInventory, setIsInventory] = useState(true);

  const setL = (a) => {
    setLabel(a);

    var copiedJson = [...json.item];
    var newArray = [{}];

    if (a === stockMachine) {
      newArray = copiedJson.filter(
        (item) => item.isInventory === true && item.isDevice === true
      );
      setContext(newArray);
      console.log(context);
      setLabelName("stockMachine");
    }

    if (a === stockBook) {
      newArray = copiedJson.filter(
        (item) => item.isInventory === true && item.isDevice === false
      );
      setContext(newArray);
      console.log(context);
      setLabelName("stockBook");
    }

    if (a === orderMachine) {
      newArray = copiedJson.filter(
        (item) => item.isInventory === false && item.isDevice === true
      );
      setContext(newArray);
      console.log(context);
      setLabelName("orderMachine");
    }

    if (a === orderBook) {
      newArray = copiedJson.filter(
        (item) => item.isInventory === false && item.isDevice === false
      );
      setContext(newArray);
      console.log(context);
      setLabelName("orderBook");
    }

    if (a === stockAll) {
      newArray = copiedJson.filter((item) => item.isInventory === true);
      setContext(newArray);
      console.log(context);
      setLabelName("stockAll");
    }

    if (a === orderAll) {
      newArray = copiedJson.filter((item) => item.isInventory === false);
      setContext(newArray);
      console.log(context);
      setLabelName("orderAll");
    }
  };

  return (
    <div className="tabs">
      <input
        id="zaiko"
        type="radio"
        name="tab_item"
        onClick={() => {
          setIsInventory(true);
        }}
      ></input>
      <label className="tab_item" for="zaiko">
        在庫
      </label>

      <input
        id="hattyuu"
        type="radio"
        name="tab_item"
        onClick={() => {
          setIsInventory(false);
        }}
      ></input>
      <label className="tab_item" for="hattyuu">
        発注
      </label>
      <div className="tab_content" id="zaiko_content">
        <div className="tab_content_description">
          {isInventory ? (
            <div className="tabs2">
              <input
                id="mch"
                type="radio"
                name="tab2_item"
                onClick={() => {
                  setL(stockMachine);
                }}
              ></input>
              <label className="tab2_item" for="mch">
                機器
              </label>

              <input
                id="books"
                type="radio"
                name="tab2_item"
                onClick={() => {
                  setL(stockBook);
                }}
              ></input>
              <label className="tab2_item" for="books">
                書籍
              </label>

              <input
                id="zenbu"
                type="radio"
                name="tab2_item"
                onClick={() => {
                  setL(stockAll);
                }}
              ></input>
              <label className="tab2_item" for="zenbu">
                全て
              </label>
            </div>
          ) : (
            <div className="tabs2">
              <input
                id="mch"
                type="radio"
                name="tab2_item"
                onClick={() => {
                  setL(orderMachine);
                }}
              ></input>
              <label className="tab2_item" for="mch">
                機器
              </label>
              <input
                id="books"
                type="radio"
                name="tab2_item"
                onClick={() => {
                  setL(orderBook);
                }}
              ></input>
              <label className="tab2_item" for="books">
                書籍
              </label>

              <input
                id="zenbu"
                type="radio"
                name="tab2_item"
                onClick={() => {
                  setL(orderAll);
                }}
              ></input>
              <label className="tab2_item" for="zenbu">
                全て
              </label>
            </div>
          )}
          <br></br>
          <br></br>
          <table className="table">
            <tr>
              {label.map((item, index) => {
                return <Table side={item} key={index} />;
              })}
            </tr>
            {console.log(label)}
            {context.map((item, index) => {
              return (
                <TableContent
                  labelName={labelName}
                  anArray={item}
                  key={index}
                  stockMachine={stockMachine}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

const About1 = () => {
  return (
    <div>
      <h2>新規利用者登録</h2>
      <p>ここは新規登録者の場所</p>
    </div>
  );
};

const About2 = () => {
  return (
    <div>
      <h2>ログアウト</h2>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h2>利用者一覧</h2>
    </div>
  );
};

export default App;