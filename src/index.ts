// Basic Types
let id: number = 5;
let fullName: string = 'John Doe';
let isPublished: boolean = true;
let x: any = '10';

// Arrays

// number
const numArr: number[] = [1, 2, 3, 4, 5];

// Tuples
let person: [number, string, boolean] = [1, 'John Doe', true];

// Tuple Array
let employees: Array<[number, string, boolean]> = [
    [1, 'John Doe', true],
    [2, 'Jane Doe', false],
    [3, 'Joe Doe', true]
];

// Unions
let emp_id: string | number = '10';

// Enums
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Object Type

// extract type
type TEmployee = {
    id: string | number;
    fullName: string;
    isSenior: boolean;
};

// let employee1: {
//     id: string | number;
//     fullName: string;
//     isSenior: boolean;
// } = {
//     id: 1,
//     fullName: 'John Doe',
//     isSenior: true
// };

let employee1: TEmployee = {
    id: 1,
    fullName: 'John Doe',
    isSenior: true
};

// Type Assertion
let c_id: any = 1;
let customerID = c_id as number; // <number>c_id

// Functions
const addNum = (x: number, y: number): number => x + y;

// Interface

// Basic id type definitions
type ID = string | number;

interface IEMpInterface {
    id: ID;
    name: string;
    isSenior: boolean;
    readonly age?: number; // age is just a number, readonly and optional 😂
}

let EMP1: IEMpInterface = {
    id: '1',
    name: 'Jane Doe',
    isSenior: true
};

let EMP2: IEMpInterface = {
    id: '2',
    name: 'John Doe',
    isSenior: true,
    age: 30
};

// Functions with Interfaces
interface IAddFuncInterface {
    (x: number, y: number): number;
}

// Function definitions with interfaces
const AddFunc: IAddFuncInterface = (x: number, y: number): number => x + y;
const SubFunc: IAddFuncInterface = (x: number, y: number): number => x - y;

// Classes
class Person {
    // Parameters with access modifiers
    private id: ID;
    protected name: string;
    isMale: boolean; // default is public

    // constructor
    constructor(id: ID, name: string, isMale: boolean) {
        this.id = id;
        this.name = name;
        this.isMale = isMale;
    }

    // methods
    register = (): string => {
        return `${this.name} is now a registered user!`;
    };
}

// instantiate person
const p1 = new Person(1, 'John Doe', true);

// register the person
p1.register();

// Class with interface implemented

// Employee interface
interface IEmployee {
    // properties
    readonly id: ID;
    name: string;
    isSenior: boolean;
    age?: number;

    // methods
    register(): string;
}

// Employee class implementing Employee interface
class Employee implements IEmployee {
    id: ID;
    name: string;
    isSenior: boolean;
    age?: number;

    constructor(id: ID, name: string, isSenior: boolean, age?: number) {
        this.id = id;
        this.name = name;
        this.isSenior = isSenior;
        this.age = age;
    }

    register = (): string => `${this.name} is now a registered user!`;
}

// Inheritance
interface IQuadrilateral {
    // properties
    len_of_side: number;
    num_of_sides: number;

    // methods
    perimeter(): number;
}

// Quadrilateral class implementing the interface
class Quadrilateral implements IQuadrilateral {
    len_of_side: number;
    num_of_sides: number;

    constructor(len: number, num: number) {
        this.len_of_side = len;
        this.num_of_sides = num;
    }

    perimeter = (): number => this.num_of_sides * this.len_of_side;
}

// square interface
interface ISquare {
    // NOTE: Since the class is being extended, you can omit the parent class properties and methods
    len_of_side: number;
    num_of_sides: number;

    area(): number;

    // NOTE: Not describing the perimeter method of the parent class here.
}

// class Square extending the Quadrilateral class and implementing the interface and adding the area method in it
class Square extends Quadrilateral implements ISquare {
    constructor(len: number, num: number) {
        super(len, num);

        // NOTE: Don't forget to init the child class properties if any.
    }

    area = (): number => this.len_of_side * this.len_of_side;
}

const sq = new Square(20, 4);

console.log('Perimeter: ', sq.perimeter());
console.log('Area: ', sq.area());

// GENERICS

// -> Problem with any array types:
const getArray = (items: Array<any>) => new Array().concat(items);

// create an int array
const intArr = getArray([1, 2, 3, 4, 5]);
const strArr = getArray(['a', 'b', 'c', 1]); // NOTE: 1 is not a string. Still no error is thrown.

intArr.push('10'); // NOTE: 10 is a string and not a number, still gets pushed into the array

// Generics in action
const GenerateArray = <T>(items: Array<T>) => new Array().concat(items);

// generate arrays
// NOTE: Trying to push an item other than the type specified will result in an error
const newIntArr = GenerateArray<number>([1, 2, 3]);
const newStrArr = GenerateArray<string>(['a', 'b', 'c']);
