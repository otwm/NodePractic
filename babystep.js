process.argv.slice(2)
    .reduce((accum, val) => {
        console.log(accum[0])
        accum[0] = accum[0] + Number(val);
    }, [0])
    .forEach(val => console.log(val));