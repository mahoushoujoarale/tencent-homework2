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
  data: {
    checkbox: [] as string[],
    select: "",
    slide: 0,
    input: "",
    switch: false,
  },
  addData: (val: Data) => {
    store.data = val;
    store.show = true;
  },
});
export default store;
