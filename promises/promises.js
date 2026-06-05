// how can we write a function to download some data from a url, and not use callbacks?
// we can use promises!

function fetch(url) {
  // new Promise starts creating a new Promise object
  // it expects one parameter that is function, this function has2 parameters
  // resolve and rejected
  return new Promise(function (resolve, reject) {
    // first paramenter is related to success
    console.log("Starting to fetch data from url: ", url);
    setTimeout(function process() {
      let data = "Dummy Data";
      console.log("Data fetched successfully from url: ", url);
      // somehow we need to return the data
      resolve(data); // this will return the data to the caller of fetch function
    }, 4000);
    // and second one is related to failure
  });
}

function fetch1(url) {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i <= 1000000000; i++) {
      // some heavy processing
    }
    console.log("completing fetch1");
    resolve("Ashish Buddy");
  });
}
// let x = fetch1("ashish.com");
// console.log("x is: ", x);

//some more promises

function demo() {
  return new Promise(function (resolve, reject) {
    console.log("Hii");
    setTimeout(function process() {
      console.log("Welcome to promises");
      resolve("Ashish is the best person around");
    }, 2000);
  });
}

// demo();

// function fetchData(url) {
//   return new Promise(function (resolve, reject) {
//     console.log("Going to start the dwnld");
//     setTimeout(function process() {
//       let data = "dwnld start";
//       console.log("dwnld complete");
//       resolve(data);
//     }, 10000);
//     console.log("Timer to miimic dwnld start");
//   });
// }

// console.log("starting the program");
// console.log("we are expecting to mimic the dwnlder");

// x = fetchData("ashish.com");
// console.log("New Promise object created successfully");

// it is neccassary to resolve or reject the promise as matter won't be resolved without it
// we create a promise

// now we want to write the three funcitons
// that will take the url and dwnld some data
// that can take some data and write some file
// then take a url and

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Starting the dwnld from url: ", url);
    setTimeout(function process() {
      let data = "Dummy Data";
      console.log("Dwnld complete from url: ", url);
      resolve(data);
    }, 4000);
  });
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("Starting to write data to file: ", data);
    setTimeout(function process() {
      let fileName = "out.txt";
      console.log("Data written to file successfully: ", data);
      resolve(fileName);
    }, 3000);
  });
}

function uploadFile(url, fileName) {
  return new Promise(function (resolve, reject) {
    let fileName = "out.txt";
    console.log("Starting to upload file: ", fileName, " to url: ", url);
    setTimeout(function process() {
      console.log("File uploaded successfully: ", fileName, " to url: ", url);
      resolve("Upload successful");
    }, 7000);
  });
}

// let data = fetchData("ashish.com");

// let filename = writeFile("Hmm ok");

// let response = uploadFile("ashish.com", "out.txt");

// so here we are having the 3 different promises,
// but we are not sure about the order of execution,
//  and we are not sure about the data flow as well,
// so we need to use then and catch to handle the promises in a better way,
// and to handle the data flow as well.
// so on successfully resolving a promise we can register them to onFulfillment
// we can use .then() function on the promise object tp bind the functions w ewant to execcute once we fullfill a promise
// the .then function takes fucntion as an argument that we want to execute after promise fulfilssa asdn  argument function takes value property as parameter

let dwnldPromise = fetchData("ashish.com");
dwnldPromise
  .then(function processDwnld(value) {
    console.log("Data received from dwnld: ", value);
    return value;
  })
  .then(function processWriteFile(value) {
    const res = writeFile(value);
    // console.log(res);
    return res;
  })
  .then(function processUploadFile(value) {
    let res = uploadFile("ashish.com", value);
    // console.log(res);
    return res;
  });

// u cannot resolve multiple times
// so the problem of inversion of control is resolved
// this callback is stored in onfulfilment array
