// -------------------------------------------------------------------
// Imports and setup
// -------------------------------------------------------------------
const _ = require('lodash');

// Leave this filters line
var filters = {}


/*
  ====================================================================
  filterName
  --------------------------------------------------------------------
  Short description for the filter
  ====================================================================

  Usage:

  [Usage here]


*/

// Merge arrays or strings together in to an array
filters.combineArrays = (arr1=[], arr2=[]) => {
  if (_.isString(arr1)) arr1 = [arr1]
  if (_.isString(arr2)) arr2 = [arr2]
  return [...arr1, ...arr2]
}

// Flatten object array to nested array
filters.objectArrayToArray = array => {
  let newArray = []
  array.forEach(item => {
    let newItem = []
    Object.keys(item).forEach(part => {
      newItem.push(item[part])
    })
    newArray.push(newItem)
  })
  return newArray
}

// Keep only whitelisted keys from object or array of objects
filters.keepAttributes = (array, keysToKeep) => {
  const keepKeys = function(theObject) {
    var newObj = {}
    // Re-orders and keeps only selected keys
    keysToKeep.forEach(key => {
      let objectKeys = Object.keys(theObject)
      if (objectKeys.includes(key)){
        newObj[key] = theObject[key]
      }
    })
    return newObj
  }
  // Array of objects
  if (_.isArray(array)){
    return array.map(keepKeys)
  }
  // Single object
  else return keepKeys(array)
}

// set attribute on object
filters.setAttribute = (dictionary, key, value) => {
  var newDictionary = Object.assign({}, dictionary);
  newDictionary[key] = value;
  return newDictionary;
}

// Clear a single attribute
filters.clearAttribute = (dictionary, key) => {
  var newDictionary = Object.assign({}, dictionary);
  newDictionary[key] = '';
  return newDictionary;
}

// Clear a single attribute
// filters.renameAttribute = (dictionary, oldKey, newKey) => {
//   var newDictionary = Object.assign({}, dictionary);
//   var keys = Object.keys(newDictionary)
//   // console.log({dictionary}, {oldKey})

//   if (keys.includes(oldKey)){
//     delete Object.assign(newDictionary, dictionary, {[newKey]: dictionary[oldKey] })[oldKey];

//     // console.log('old key is', newDictionary[oldKey])
//     // newDictionary[newKey] = newDictionary[oldKey]
//     // delete newDictionary[oldKey]
//   }
//   return newDictionary;
// }


filters.renameAttribute = (dictionary, oldKey, newKey) => {
  const keys = Object.keys(dictionary);
  const newObj = keys.reduce((acc, val)=>{
    if(val === oldKey){
        acc[newKey] = dictionary[oldKey];
    }
    else {
        acc[val] = dictionary[val];
    }
    return acc;
  }, {});

  return newObj;
};

// Delete a single attribute
filters.deleteAttribute = (dictionary, key) => {
  // Don't modify the original
  var newDictionary = Object.assign({}, dictionary);
  delete newDictionary[key];
  return newDictionary;
}

// Delete a single attribute
filters.deleteBlankAttributes = (dictionary) => {
  // Don't modify the original
  var newDictionary = Object.assign({}, dictionary);
  var keys = Object.keys(newDictionary)
  keys.forEach(key => {
    if (newDictionary[key] == ""){
      delete newDictionary[key]
    }
  })
  return newDictionary;
}

// Filter results for only those containing attribute and value
filters.filterAttr = function (arr, attr, test) {
  var result = arr.filter(function (item) {
     return item[attr] === test;
  });
  return result
};


// Remove items with a specified attribute and value
filters.removeAttr = function (arr, attr, test) {
  var result = arr.filter(function (item) {
     return item[attr] !== test;
  });
  return result
};

// -------------------------------------------------------------------
// keep the following line to return your filters to the app
// -------------------------------------------------------------------
exports.filters = filters
