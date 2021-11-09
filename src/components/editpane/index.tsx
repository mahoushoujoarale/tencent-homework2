import React, { useRef } from "react";
import { Observer } from "mobx-react";

import "./index.less";
import store from "../../stores";

export default function EditPane() {
  let status: boolean = false;
  const switchs = useRef<HTMLInputElement>(null);

  const clickHandle = () => {
    status = !status;
    if (status) {
      switchs!.current!.classList.add("switch_check");
      switchs!.current!.classList.remove("switch_uncheck");
    } else {
      switchs!.current!.classList.remove("switch_check");
      switchs!.current!.classList.add("switch_uncheck");
    }
  };
  const submit = (event: any) => {
    event?.preventDefault();
    const form: any = (document.forms as any).form;
    const checkbox: string[] = [];

    for (let item of form.checkbox) {
      if (item.checked === true) {
        checkbox.push(item.value);
      }
    }
    store.setData({
      checkbox: checkbox,
      select: form.select.value,
      slide: form.slide.value,
      input: form.input.value,
      switch: form.switch.checked,
    });
  };
  const reset = (event: any) => {
    event?.preventDefault();
    (document.forms as any).form.input.value = "";
  };
  return (
    <Observer>
      {() => (
        <div className="editpane">
          <h2>EditPane</h2>
          <form action="" onSubmit={submit} name="form">
            <h3>checkbox</h3>
            <input type="checkbox" name="checkbox" value="好家伙" />
            好家伙
            <input type="checkbox" name="checkbox" value="坏家伙" />
            坏家伙
            <input type="checkbox" name="checkbox" value="笨家伙" />
            笨家伙
            <h3>select</h3>
            <select name="select">
              <option value="赛罗">赛罗</option>
              <option value="迪迦">迪迦</option>
              <option value="盖亚">盖亚</option>
              <option value="戴拿">戴拿</option>
            </select>
            <h3>slide</h3>
            <input type="range" name="slide" />
            <h3>input</h3>
            <input type="text" name="input" placeholder="占位提示" />
            <button onClick={reset}>×</button>
            <h3>switch</h3>
            <input
              type="checkbox"
              className="switch switch_uncheck"
              ref={switchs}
              onClick={clickHandle}
              name="switch"
            />
            <br />
            <input type="submit" name="submit" />
          </form>
        </div>
      )}
    </Observer>
  );
}
