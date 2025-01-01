let store = "";

const call = (arg) => {
  console.log(arg);
  store += arg;
  let select = document.getElementById("show");
  select.innerHTML = store;

}

const calculator = () => {
  let select = document.getElementById("show");
  select.innerHTML = eval(store);
  store = eval(store).toString();
  select.style.color = "white";
  select.style.fontSize = "30px";

};

const clearAll = () => {
  store = " ";
  let select = document.getElementById("show");
  select.innerHTML = store;
};
const deleteLast = () => {
  store = store.slice(0, -1);
  let select = document.getElementById("show");
  select.innerHTML = store;
};
