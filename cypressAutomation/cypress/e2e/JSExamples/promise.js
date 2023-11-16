//callback example

function getDataWithCallback(callback) {
    setTimeout(() => {
        callback('Data from callback');
    }, 1000);
}

getDataWithCallback((data) => {
    console.log(data);  // "Data from callback" after 1 second
});

//promise approach
function getDataWithPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from promise');
        }, 1000);
    });
}

getDataWithPromise().then(data => {
    console.log(data);  // "Data from promise" after 1 second
});

//async await example
function getDataWithPromise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from async/await');
        }, 1000);
    });
}

async function fetchAndDisplayData() {
    const data = await getDataWithPromise1();
    console.log(data);  // "Data from async/await" after 1 second
}

fetchAndDisplayData();
