const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

console.log(checkBoolValue([2]));

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

// console.log({ id: 1, name: "Neil" });

const getUserProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

/////////////////////////////////////////////////////////////////
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = " Neil";
console.log(store.state)

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Nick, 22, true'])
console.log(myState.state)