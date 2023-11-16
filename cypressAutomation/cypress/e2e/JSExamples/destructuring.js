//Destructuring is a concise way to extract data from arrays and objects. 
//It can simplify code and make it more readable, especially when dealing with complex data structures.
//Destructuring a nested object 
const person = {
    pName: "Alice",
    address: {
        city: "New York",
        state: "NY"
    }
};
const { pName, address: { city, state } } = person; //extractingData
console.log(pName);  // "Alice"
console.log(city);  // "New York"
console.log(state); // "NY"

//destructing with rest parameters
function displayUserInfo({ name, age, ...others }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    sendToAnalytics(others);
}

function sendToAnalytics(data) {
    console.log('Sending the following data to analytics:', data);
}

const user = {
    name: "Bob",
    age: 32,
    occupation: "Developer",
    city: "San Francisco",
    salary : "100000"
};

displayUserInfo(user);
