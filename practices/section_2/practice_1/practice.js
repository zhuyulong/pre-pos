function count_same_elements(collection) {
  var array = [];
  var flog = false;  // 定义标志

  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < array.length; j++){
        if(array[j].key == collection[i]){  // 判断是否找到
          array[j].count ++;  // 找到count++
          flog = true;
        }
    }
    if(!flog){   // 找不到，创建
        var temp = {};
        temp.key = collection[i];
        temp.count = 1;
        array.push(temp);
      }
      flog = false;
    }
    return array;
}

module.exports = count_same_elements;
