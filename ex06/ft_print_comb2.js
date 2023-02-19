function ft_print_comb2(){
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if (i !== j) {
        for (let k = 0; k <= 9; k++) {
          for (let l = 0; l <= 9; l++) {
            if (k !== l) {
              console.log(`${i}${j} ${k}${l}`);
            }
          }
        }
      }
    }
  }
}

ft_print_comb2();