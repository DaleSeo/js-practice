'use strict'

var promiseCount = 0

function testPromise () {
  let thisPromiseCount = ++promiseCount

  let log = document.getElementById('log')
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>')

  let p1 = new Promise((resolve, reject) => {
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise started (<small>Async code started</small>)<br/>')
    window.setTimeout(_ => {
      resolve(thisPromiseCount)
    }, Math.random() * 2000 + 1000)
  })

  p1.then(val => {
    log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled (<small>Async code terminated</small>)<br/>')
  }).catch(err => {
    console.log('Handle rejected promise (' + err + ') here.')
  })

  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>')
}

let btn = document.getElementById('btn')
btn.addEventListener('click', testPromise)
