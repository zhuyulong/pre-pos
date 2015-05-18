function create_updated_collection(collection_a, object_b) {
 var array=[];
 for(var i=0;i<collection_a.length;i++){
     var exist=false;
     for(var j=0;j<array.length;j++){
         if(array[j].key==collection_a[i]){
                 array[j].count++;
                 exist=true;
         }
     }
     if(!exist){
         var temp={};
         temp.key=collection_a[i];
         temp.count=1;
         array.push(temp);
     }
 }
   for(var x=0;x<object_b.value.length;x++){
       for(var j=0;j<array.length;j++){
           if(array[j].key==object_b.value[x]){
               array[j].count=array[j].count-Math.floor(array[j].count/3);
           }
       }
   }
    return array;
 }

module.exports = create_updated_collection;
