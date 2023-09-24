///print dublicates char from string
function dublicatesChar(string) {
  let array = string.replaceAll(" ", "").split("");


  for (let index = 0; index < array.length; index++) {
    let count = 1;
    if (array[index]!==0) {

      for (let index2 = index+1; index2 < array.length; index2++) {
        if (array[index] == array[index2]) {
          count++;
         array[index2]=0
        }
      }
    }
    if(count>1){
        console.log(array[index]+"="+count);
    }
  }
}
dublicatesChar("am learning javascript programm");
