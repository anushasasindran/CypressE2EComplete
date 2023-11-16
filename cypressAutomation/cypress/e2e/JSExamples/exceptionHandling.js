//Exception handling in JS primarily done using try,catch,finally and throw statements.

/*function calculateDivision(a,b){
try{
    if(b===0){
        throw new Error("cannot divide by zero")
    }
 return a/b;
}
catch(error){
console.error(error.message)
}

finally{
console.log("Divison completed :", a/b)
}
}
calculateDivision(10, 0);*/
function fetchData(url) {
    let data;
    try {
        // Simulate fetching data from a URL
        data = fetch(url);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    } finally {
        console.log("Fetch attempt finished");
    }
    return data;
}

fetchData('https://example.com/data');

//Exception Handling in Asynchronous Code
//with promise
fetch('https://example.com/data')
    .then(response => response.json())
    .catch(error => console.error("Error fetching data:", error.message));

//with async-wait
async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchData('https://example.com/data');
