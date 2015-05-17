function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection=[];
   for(var i = 0; i <collection_a.length; i++){
      for(var j = 0 ;j<collection_b[0].length; j++){//必须从第一个开始
        if(collection_a[i]==collection_b[0][j]){
            collection.push(collection_a[i]);
        }
    }
}
       return collection;
}

module.exports = collect_same_elements;
