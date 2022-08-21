let cats = ["Milo", "Otis", "Garfield"];

// Append element to the end of array

function destructivelyAppendCat(name) {
  return cats.push(name);
}

// Append element to the beggining of array
function destructivelyPrependCat(name) {
  return cats.unshift(name);
}
// Rrmoves the last cat from the cat array

function destructivelyRemoveLastCat() {
  return cats.pop();
}

// Removes the first cat element from the array
function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  const spreadCat = [...cats];
  spreadCat.pop();
  return spreadCat;
}
function removeFirstCat() {
  const spreadCat = [...cats];
  spreadCat.shift();
  return spreadCat;
}