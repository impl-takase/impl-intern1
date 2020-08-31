import React, { useState, useEffect } from "react";
//import { Link, Router } from "react-router-dom";
import "../App.css";
import TableContent from "../component/TableContent";
import Button from "../component/Button";
import firebase from "../component/firebase";
import AddItemForm from "../component/AddItemForm";
import Header from "../component/Header";
import Option from "../component/Option";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "../screens/SignUp";
import "../CSS/Option.css";
//import Home from "../screens/Home"

const db = firebase.firestore();

function Home() {
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
    "入荷日",
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

  const contents = {
    order: {
      device: { name: "orderMachine", data: orderMachine },
      book: { name: "orderBook", data: orderBook },
      all: { name: "orderAll", data: orderAll },
    },
    stock: {
      device: { name: "stockMachine", data: stockMachine },
      book: { name: "stockBook", data: stockBook },
      all: { name: "stockAll", data: stockAll },
    },
  };

  const [items, setItems] = useState([]);
  const [label, setLabel] = useState([]);
  const [context, setContext] = useState([{}]);
  const [labelName, setLabelName] = useState("");
  const [isInventory, setIsInventory] = useState(true);
  const [tabelContent, setTabelContent] = useState("device");
  const [isSetting, setIsSetting] = useState(true);
  const [isAddButton, setIsAddButton] = useState(false);

  useEffect(() => {
    //console.log('ok')
    db.collection("items").onSnapshot((snapshot) => {
      const newItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(newItems);
    });
  }, []);

  useEffect(() => {
    createNewArray(labelName);
  }, [items]);

  const createNewArray = (a) => {
    let newArray = [];
    //console.log(a)
    switch (a) {
      case "stockMachine":
        newArray = items.filter((item) => item.isInventory && item.isDevice);
        break;
      case "stockBook":
        newArray = items.filter((item) => item.isInventory && !item.isDevice);
        break;
      case "stockAll":
        newArray = items.filter((item) => item.isInventory);
        break;
      case "orderMachine":
        newArray = items.filter((item) => !item.isInventory && item.isDevice);
        break;
      case "orderBook":
        newArray = items.filter((item) => !item.isInventory && !item.isDevice);
        break;
      case "orderAll":
        newArray = items.filter((item) => !item.isInventory);
        break;
      default:
    }
    setContext(newArray);
  };

  // const setL = (a, tableContent) => {
  //   createNewArray(a);
  //   setLabelName(a);
  //   setLabel(eval(a));
  //   setTabelContent(tableContent);
  // };

  const handleContentsClick = (tableContent) => {//機器、書籍、全てがクリックされたとき
    const a = isInventory ? contents.stock[tableContent] : contents.order[tableContent]
    createNewArray(a.name);
    setLabelName(a.name);
    setLabel(a.data);
    setTabelContent(tableContent);
  };

  const handleInventoryClick = (isInventory) => {//在庫、発注ボタンがクリックされたとき
    const a = isInventory ? contents.stock[tabelContent] : contents.order[tabelContent];
    setIsInventory(isInventory);
    setLabelName(a.name);
    setLabel(a.data);
    createNewArray(a.name);
  }

  return (
    <div className="tabs">
      <Header />
      <input
        id="zaiko"
        type="radio"
        name="tab_item"
        onClick={() => {
          handleInventoryClick(true);
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
          handleInventoryClick(false);
        }}
      ></input>
      <label className="tab_item" for="hattyuu">
        発注
      </label>

      <br />

      <br></br>

      <div className="tab_content" id="zaiko_content">
        <div className="tab_content_description">
          {isInventory ? (
            <div>
              <input
                id="mch"
                type="radio"
                name="tab2_item"
                onClick={() => {
                  handleContentsClick("device");
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
                  handleContentsClick("book");
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
                  handleContentsClick("all");
                }}
              ></input>
              <label className="tab2_item" for="zenbu">
                全て
              </label>

              <label
                className="addLabel"
                onClick={() => setIsAddButton(isAddButton ? false : true)}
              >
                追加
              </label>
            </div>
          ) : (
              <div>
                <div className="tabs2">
                  <input
                    id="mch"
                    type="radio"
                    name="tab2_item"
                    onClick={() => {
                      handleContentsClick("device");
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
                      handleContentsClick("book");
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
                      handleContentsClick("all");
                    }}
                  ></input>
                  <label className="tab2_item" for="zenbu">
                    全て
                </label>
                  <label
                    className="addLabel"
                    onClick={() => setIsAddButton(isAddButton ? false : true)}
                  >
                    追加
                </label>
                </div>
              </div>
            )}

          <table className="table">
            <thead>
              <tr>
                {label.map((item, index) => (
                  <th key={index}>
                    <font>{item}</font>
                  </th>
                ))}
              </tr>
            </thead>
            {context.map((item, index) => {
              return (
                <TableContent key={index} labelName={labelName} item={item} />
              );
            })}
          </table>

          {isAddButton && (
            <AddItemForm
              tabelContent={tabelContent}
              isInventory={isInventory}
              createNewArray={createNewArray}
              labelName={labelName}
            //updateItem={updateItem}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React from 'react';
// import firebase from '../component/firebase.js';
// import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';

// const admin = false;

// class Home extends React.Component {

//     async componentDidMount() {
//         const db = firebase.firestore();
//         const docRef = db.collection("admin_users").doc("1");
//         const doc = await docRef.get();
//         if(firebase.auth().currentUser.uid==doc.data()){admin=true}

//         console.log(firebase.auth().currentUser.uid.toString())
//         //console.log(admin)
//         }

//     handleLogout = () => {
//         firebase.auth().signOut();
//     }

//     render() {

//         return (
//             <div className="container">
//                 <p>Home</p>
//                 <Link to="/profile">Profileへ</Link>
//                 <br />
//                 {admin && <Link to="/signup">新規登録はこちら。</Link>}
//                 <br />
//                 <Button onClick={this.handleLogout}>ログアウト</Button>

//             </div>

//         );
//     }
// }

// export default Home;
