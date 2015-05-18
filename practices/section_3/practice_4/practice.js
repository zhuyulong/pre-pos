function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array = [];

        for(var i = 0; i < collection_a.length; i++) {
                var exist = false;
                var char = collection_a[i].length>2 ? collection_a[i].substring(0, 1) : collection_a[i];
                var count = collection_a[i].length>2 ? parseInt(collection_a[i].substring(2)) : 1;

                for(var j = 0; j < array.length; j++) {
                        if(array[j].key === char) {
                                array[j].count+=count;
                                exist = true;
                        }
                }

                if(!exist) {
                        var temp = {};
                        temp.key = char;
                        temp.count =count;
                        array.push(temp);
                }
        }
        for(var x=0;x<object_b.value.length;x++){
            for(var j=0;j<array.length;j++){
                if(array[j].key==object_b.value[x]){
                    array[j].count=array[j].count- Math.floor(array[j].count/3)
                }
            }
        }
         return array;
}

module.exports = create_updated_collection;
