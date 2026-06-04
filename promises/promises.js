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
  });
}
