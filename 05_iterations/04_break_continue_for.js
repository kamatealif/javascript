for (let index = 1; index <= 20; index++) {
    if (index == 7){
        console.log("7 is Ditected 🔍")
        break;
    }
    console.log(`Value of index: ${index}`);    
}

for (let index = 1; index <= 10; index++) {
    if (index === 7) {
        console.log("Skipping 7 🚫");
        continue; // Skip the rest of the loop when index is 7
    }
    console.log(`Value of index: ${index}`);
}