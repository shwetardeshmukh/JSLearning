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