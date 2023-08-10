
  function PrimeNumber(num){
    let count=0;
    
        for (let index = 1; index <= num; index++) {
            if (num % index == 0 && num>1 ) {
                count++;//count = count + 1
            }
        }
        if (count == 2) {
            console.log(`${num} :is a prime no`);
        
        } else {
            console.log(`${num} :is not a prime no`);
        }
    }
   
 PrimeNumber(11);
 PrimeNumber(21);