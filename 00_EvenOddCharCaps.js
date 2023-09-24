// even index characters captical

function stringEvenCharCaps(string) {
    // let string = "How are you mate";
    var temp = ''
    for (let index = 0; index < string.length; index++) {
        if (index%2==0) {
           temp = temp +string.charAt(index).toUpperCase();
        }
        
       
         else if (index%2==1) {
            temp = temp +string.charAt(index)
            
        } 
        
    }console.log(temp);
    
    }
    stringEvenCharCaps("How are you mate");
    stringEvenCharCaps("i am learing the javascript code")

    console.log('---------------------------------------------------------');
   // odd index characters capitals 
    let oddIndexCharCapitales = (string)=>{
        let empty = ''
     for (let index = 0; index < string.length; index++) {
        if (index%2==1) {
            empty = empty+string.charAt(index).toUpperCase();
        }
        else if (index%2!==1) {
            empty = empty+string.charAt(index);
        }
     }
     console.log(empty);
    }
    oddIndexCharCapitales("how are you mate");

    //print even no char

    function evenCharPrint(string) {
        let temp = ""
        let string2 = string.replaceAll(" ","")
        for (let index = 0; index < string2.length; index++) {
            if (index%2==0) {
              temp = temp + " "+string2.charAt(index)  
              
            }
            
        }
        console.log(temp);
    }
    evenCharPrint("how are you mate")

    
    