import React, { useState, useEffect } from "react";
import "./App.css";
//import Table from "./component/Table";
import TableContent from "./component/TableContent";
import Button from "./component/Button";
//import json from "./data.json";
import firebase from './firebase';
import AddItemForm from './component/AddItemForm'
import { render } from "@testing-library/react";

const db = firebase.firestore()

function App() {
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

  const orderBook = [
    "タイトル",
    "管理番号",
    "筆者",
    "領域",
    "削除",
    "変更"
  ];

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

  const [items, setItems] = useState([]);
  const [label, setLabel] = useState([]);
  const [context, setContext] = useState([{}]);
  const [labelName, setLabelName] = useState("");
  const [isInventory, setIsInventory] = useState(true);
  const [tabelContent, setTabelContent] = useState("all");

  useEffect(() => {
    console.log('ok')
    db.collection('items')
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setItems(newItems)
      })
  }, []);


  const setL = (a, tableContent) => {
    let newArray = [];

    setLabel(a);　//ラベルに
    a === stockMachine ? setLabelName("stockMachine")
      : a === stockBook ? setLabelName("stockBook")
        : a === stockAll ? setLabelName("stockAll")
          : a === orderMachine ? setLabelName("orderMachine")
            : a === orderMachine ? setLabelName("orderMachine")
              : setLabelName("orderMachine")

    newArray =
      a === stockMachine ? items.filter(
        (item) => item.isInventory === true && item.isDevice === true
      )
        : a === stockBook ? items.filter(
          (item) => item.isInventory === true && item.isDevice === false
        )
          : a === stockAll ? items.filter(
            (item) => item.isInventory === true
          )
            : a === orderMachine ? items.filter(
              (item) => item.isInventory === false && item.isDevice === true
            )
              : a === orderMachine ? items.filter(
                (item) => item.isInventory === false && item.isDevice === false
              )
                : items.filter(
                  (item) => item.isInventory === true
                )
    setContext(newArray);
    setTabelContent(tableContent)
  };

  return (
    <div>
      <Button
        task={() => {
          setIsInventory(true);
        }}
        buttonName={"在庫"}
      />
      <Button
        task={() => {
          setIsInventory(false);
        }}
        buttonName={"発注"}
      />
      <br></br>
      <AddItemForm
        tabelContent={tabelContent}
        isInventory={isInventory}
        isAdd={true}
      />
      <br></br>
      {isInventory ? (
        <div>
          <Button
            task={() => {
              setL(stockMachine, "device");
            }}
            buttonName={"機器"}
          />

          <Button
            task={() => {
              setL(stockBook, 'book');
            }}
            buttonName={"書籍"}
          />

          <Button
            task={() => {
              setL(stockAll, 'all');
            }}
            buttonName={"全て"}
          />
        </div>
      ) : (
          <div>
            <Button
              task={() => {
                setL(orderMachine, "device");
              }}
              buttonName={"機器"}
            />

            <Button
              task={() => {
                setL(orderBook, "book");
              }}
              buttonName={"書籍"}
            />

            <Button
              task={() => {
                setL(orderAll, 'all');
              }}
              buttonName={"全て"}
            />
          </div>
        )}

      <table
        border="1"
        width="500"
        cellspacing="0"
        cellpadding="5"
        bordercolor="#333333"
      >
        <thead>
          <tr>
            {label.map((item, index) =>
              <th key={index}>
                <font>{item}</font>
              </th>
            )}
          </tr>
        </thead>
        {context.map((item, index) => {
          return (
            <TableContent
              key={index}
              labelName={labelName}
              item={item}
            />
          );
        })}
      </table>
    </div>
  );
}

export default App;