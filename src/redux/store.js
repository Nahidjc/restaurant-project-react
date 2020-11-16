const { createStore } = require("redux");
const { Reducer } = require("./reducer");

const myStore = createStore(Reducer);
export default myStore;