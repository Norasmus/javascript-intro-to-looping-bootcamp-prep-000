function maybeTrue() {
  return Math.random() >= 0.5
}

function forLoop(array) {
  var size = array.length
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      array[size+i]="I am 1 strange loop."
      console.log(array[i])
    }
    else {
      array[size+i]=`I am ${i} strange loops.`
      console.log(array[i])
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue()) {
      return array
    }
}
