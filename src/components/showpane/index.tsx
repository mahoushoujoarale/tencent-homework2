import React from "react";
import { Observer } from "mobx-react";

import "./index.less";
import store from "../../stores";

export default function ShowPane() {
  return (
    <Observer>
      {() => (
        <div className="showpane">
          <h2>ShowPane</h2>
          <ul style={{ display: store.show ? "" : "none" }}>
            <li>
              <h3>checkbox</h3>
              {store.data.checkbox.map((item: string) => item + " ")}
            </li>
            <li>
              <h3>select</h3>
              {store.data.select}
            </li>
            <li>
              <h3>slide</h3>
              {store.data.slide}
            </li>
            <li>
              <h3>input</h3>
              {store.data.input}
            </li>
            <li>
              <h3>switch</h3>
              {store.data.switch.toString()}
            </li>
          </ul>
        </div>
      )}
    </Observer>
  );
}
