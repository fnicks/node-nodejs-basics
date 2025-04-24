const parseArgs = () => {
    const argsToPrint = [];
    const args = process.argv;
    args.forEach((arg, index) => {
        if (arg.startsWith('--')) argsToPrint.push(`${arg.substring(2)} is ${args[index+1]}`);
    });
    console.log(argsToPrint.join(', '));
};

parseArgs();