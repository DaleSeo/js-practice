let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(_ => {
    resolve('Success!')
  }, 1000)
})

myFirstPromise.then(value => {
  console.log('Yay! ' + value)
})
