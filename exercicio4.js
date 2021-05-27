//4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
   // a) números de 1 a 100  
  //
    //b) quando chegar no número 50 interrompa a instrução e pare o loop 
    for (let repetição =1; repetição <=100; repetição ++ ){
        if (repetição === 51 ) {
            break
        }
        console.log (repetição)
    }
   
    //c) quando chegar no número 50 pule a instrução 
    for (repetição = 1; repetição <=100; repetição ++){
        if ( repetição === 50){
            continue
        }
    console.log (repetição)
    }

