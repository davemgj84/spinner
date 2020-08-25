const spinnerTwo = () => {
  let animate = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  let counter = 0;
  for (let element of animate) {
    setTimeout(() => {
      process.stdout.write(element);
    }, counter);
    counter += 200;
  }
  setTimeout(() => {
    console.log();
  }, counter);
};

spinnerTwo();

module.exports = spinnerTwo;