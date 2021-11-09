import React from "react";
import store from "../../stores";
import { Observer } from "mobx-react";

import "./index.less";

const Message = (props: any) => {
  return (
    <Observer>
      {() => (
        <div
          className="message"
          style={{ display: store.showMessage ? "" : "none" }}
        >
          <div className="slide-in-top">{props.str}</div>
        </div>
      )}
    </Observer>
  );
};

export default Message;
