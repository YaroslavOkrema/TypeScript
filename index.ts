const sayHi = () => console.log('Hi');

sayHi();

const sumArgs = (a: number, b: number): number => a + b;

//Object
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

const user: User = {
    name: 'John',
    age: 35,
    isAdmin: false
}

//Arrays 
const stringArray: string[] = ['a', 'b', 'c'];
// stringArray.push(1) //error

const anyTypesArray: any[] = ['a', 1, true, {a: 1}];

//Tuples 
const numericTuple = [1, 2] as const;
//numericTuple.push(3); //error

//Functions 
function printMsg(msg: string): void {
    console.log(msg);
}

//Arrow 
const printMsg2 = (msg: string): void => {
    console.log(msg);
}

//Functions optional parameters
function printMsg3(msg: string, additionalMsg?: string): void {
    console.log(`${msg}${additionalMsg}`);
}

//Functions default parameters
function printMsg4(msg: string, additionalMsg: string = 'default string'): void {
    console.log(`${msg}${additionalMsg}`);
}

printMsg4('1st');
printMsg4('1st', '2nd');

//Functions interface
interface ISumFunc {
    (a: number, b: number): number;
}

let sum: ISumFunc;

sum = (a: number, b: number) => a + b; //okay 

//sum = (a: string, b: number) => a + b; //error

//Union types
let strOrNum: string | number;
strOrNum = 'lalala'; //ok
strOrNum = 300; //ok
//strOrNum = false; //error

const transformFunk = (value: number | string) => {
    if (typeof value === 'string') {
        return `String is ${value}`;
    } else if (typeof value === 'number') {
        return value * 2;
    }
};

console.log(transformFunk('Hi'));
console.log(transformFunk(3));


//Type Alias
type NumberOrBoolean = number | boolean;
let myValue: NumberOrBoolean;
myValue = 300; //ok
myValue = false; //ok
//myValue = 'lalala'; error

//Пересечение типов 
type A = {
    propA: string;
};

type B = {
    propB: number;
};

type C = A & B;
const myObj: C = {
    propA: 'lalala',
    propB: 42
};

//Литеральные типы 
const checkDeviceState = (signal: 1 | 0) => {
    if (signal === 1) return 'Device enabled!';

    return 'Device disabled!';
};
checkDeviceState(1); //ok
//checkDeviceState(2); //error

//ENUMS
enum DeviceStates {
    enabled, //1
    disabled, //2
    broken //3
}

console.log(DeviceStates.enabled);
console.log(DeviceStates.disabled);
console.log(DeviceStates.broken);

enum FileAccess {
    //constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computer member 
    G = "123".length,
}

//Interfaces 
interface IUser {
    login: string;
    password: string;
}

interface IAdminRights {
    editAricles: boolean;
    deleteArticles: boolean;
    banUsers: boolean;
}

interface IAdmin extends IUser {
    permissins: IAdminRights
}

const admin: IAdmin = {
    login: 'LOGIN',
    password: '12345',
    permissins: {
        editAricles: true,
        deleteArticles: true,
        banUsers: false
    }
}

// Наследование интерфейсов
interface IAged {
    age: number;
}

interface INamed {
    name: string;
}

interface Iperson extends IAged, INamed { }

const person: Iperson = {
    name: 'Ivan',
    age: 20
};