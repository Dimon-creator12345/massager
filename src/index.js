import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { useState } from "react";

let bdOperator = [];
let bdNumber = [];
let access = true;
const App = () => {
  function bla(operant) {
    bdOperator.push(operant);
    if (access || bdOperator.length >= 2) {
      bdNumber.push(item);
    }
    setItem("");
  }
  function calculation() {
    bdNumber.push(item);
    function a() {
      return bdOperator[0] === "/"
        ? String(Number(bdNumber[0]) / Number(bdNumber[1]))
        : bdOperator[0] === "*"
        ? String(Number(bdNumber[0]) * Number(bdNumber[1]))
        : bdOperator[0] === "+"
        ? String(Number(bdNumber[0]) + Number(bdNumber[1]))
        : String(Number(bdNumber[0]) - Number(bdNumber[1]));
    }
    while (bdNumber.length >= 2) {
      let result = a();
      bdOperator.shift();
      bdNumber = bdNumber.slice(2, bdNumber.length);
      bdNumber.unshift(result);
    }
    setItem(bdNumber[0]);
    bdOperator = [];
    access = false;
  }
  const [item, setItem] = useState("");

  return (
    <div className="calculator">
      <div className="info__panel">
        <div className="info__panel__result">{item === "" ? "0" : item}</div>
      </div>
      <div className="function">
        <button
          onClick={() => {
            setItem(item.slice(0, item.length - 1));
          }}
          className="function__delete function__item"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setItem("");
            bdNumber = [];
            access = true;
          }}
          className="function__all-delete function__item"
        >
          C
        </button>
        <button
          onClick={() => {
            bla("*");
          }}
          className="function__umnogiti function__item"
        >
          *
        </button>
        <button
          onClick={() => {
            bla("/");
          }}
          className="function__deliti function__item"
        >
          /
        </button>
        <button
          onClick={() => {
            bla("-");
          }}
          className="function__minus function__item"
        >
          -
        </button>
        <button
          onClick={() => {
            bla("+");
          }}
          className="function__plus function__item"
        >
          +
        </button>
        <button
          onClick={() => {
            calculation();
          }}
          className="function__result function__item"
        >
          Result
        </button>
      </div>
      <div className="number">
        <button
          onClick={() => {
            setItem(item + 1);
          }}
          className="number__1 number__item"
        >
          1
        </button>
        <button
          onClick={() => {
            setItem(item + 2);
          }}
          className="number__2 number__item"
        >
          2
        </button>
        <button
          onClick={() => {
            setItem(item + 3);
          }}
          className="number__3 number__item"
        >
          3
        </button>
        <button
          onClick={() => {
            setItem(item + 4);
          }}
          className="number__4 number__item"
        >
          4
        </button>
        <button
          onClick={() => {
            setItem(item + 5);
          }}
          className="number__5 number__item"
        >
          5
        </button>
        <button
          onClick={() => {
            setItem(item + 6);
          }}
          className="number__6 number__item"
        >
          6
        </button>
        <button
          onClick={() => {
            setItem(item + 7);
          }}
          className="number__7 number__item"
        >
          7
        </button>
        <button
          onClick={() => {
            setItem(item + 8);
          }}
          className="number__8 number__item"
        >
          8
        </button>
        <button
          onClick={() => {
            setItem(item + 9);
          }}
          className="number__9 number__item"
        >
          9
        </button>
        <button
          onClick={() => {
            setItem(item + 0);
          }}
          className="number__0 number__item"
        >
          0
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("ipv"));

reportWebVitals();
