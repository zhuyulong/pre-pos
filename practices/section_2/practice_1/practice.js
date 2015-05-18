function count_same_elements(collection) {
    var array=[];
    for(var i=0;i<collection.length;i++){
        var exist=false;
        for(var j=0;j<array.length;j++){
            if(array[j].key==collection[i]){
                 array[j].count++;
                 exist=true;
            }
        }
        if(!exist){    
            var temp={};
            temp.key=collection[i];
            temp.count=1;
            array.push(temp);
            }
        }
        return array;
    }

module.exports = count_same_elements;
