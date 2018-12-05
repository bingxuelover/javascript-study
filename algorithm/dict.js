/* 散列表 */

var phone_book = {}
phone_book.alice = 135890505
phone_book.desll = 1434545
phone_book["jenny"] = 1434

// console.log(phone_book);

var voted = {}
function check_vote(name) {
  if (voted.hasOwnProperty(name)) {
    console.log('kick ' + name + ' out!');
  } else {
    voted[name] = true
    console.log('let ' + name + ' vote!');
  }
  return voted
}

// console.log(check_vote('alice'));
// console.log(check_vote('alice'));
// console.log(check_vote('mark'));

var voted2 = []
function check_vote2(name) {
  console.log(voted2.indexOf(name));
  if (voted2.indexOf(name) !== -1) {
    console.log('kick ' + name + ' out!');
  } else {
    voted2.push(name)
    console.log('let ' + name + ' vote!');
  }
  return voted2
}
// console.log(check_vote2('alice'));
// console.log(check_vote2('alice'));
// console.log(check_vote2('anna'));

const cache = {}
function getPage(url) {
  if (cache.hasOwnProperty(url)) {
    return 'cache ' + cache[url]
  } else {
    const data = getUrlServer(url)
    cache[url] = data
    return 'server ' + data
  }
}
function getUrlServer(url) {
  return 'http://'
}

// console.log(getPage('www'));
// console.log(getPage('www'));

function HashTable() {
  var table = [];

  var loseloseHashCode = function(key) {
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
      hash += hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  }

  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    table[position] = new ValuePair(key, value);
  }

  this.get = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) 
      return table[position].value;
    return undefined;
  }

  this.remove = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      table[position] = undefined;
      return true;
    }
    return false;
  };

  this.print = function() {
    for (var i = 0; i < table.length; ++i) { //{1}
      if (table[i] !== undefined) { //{2}
        console.info("output", table[i], table[i].toString());
      }
    }
  };

  //新增的方法 创建node元素 将key，value放入这个对象
  var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  };
}

var price = new HashTable()
price.put('apple', 4.5)
price.put('appel', 4.5)
price.put('pear', 3.5)
price.print()
