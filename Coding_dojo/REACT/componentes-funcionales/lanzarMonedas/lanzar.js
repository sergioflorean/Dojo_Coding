function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

console.log(Math.random() > 0.5 ? "heads" : "tails");

const fiveHeads = () => {
    return new Promise((resolve, reject) => {
        // tu código aquí!
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts ++;
            let result = tossCoin();
            console.log(result);
            result === "heads" ? headsCount++ : headsCount = 0;         
        }   
        if (headsCount === 5 && attempts < 100){
            res = `It took ${attempts} tries to flip five "heads"`
            resolve(res)
        } else {
            err = "no more than 100 times"
            reject(err)
        }
    });
    
    
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
console.log("When does this run now?");
