"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBoolValue([2]));
const processUser = (user) => {
    return user;
};
// console.log({ id: 1, name: "Neil" });
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
/////////////////////////////////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = " Neil";
console.log(store.state);
const myState = new StateObject([15]);
myState.state = (['Nick, 22, true']);
console.log(myState.state);
