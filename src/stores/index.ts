import { observable } from "mobx";

interface Data {
  checkbox: string[];
  select: string;
  slide: number;
  input: string;
  switch: boolean;
}

const store = observable({
  show: false,
  showMessage: false,
  data: {
    checkbox: [] as string[],
    select: "",
    slide: 0,
    input: "",
    switch: false,
  },
  setShow: () => {
    store.show = true;
    store.showMessage = false;
  },
  setData: (val: Data) => {
    store.data = val;
    store.showMessage = true;
    setTimeout(() => {
      store.setShow();
    }, 2000);
  },
});
export default store;
