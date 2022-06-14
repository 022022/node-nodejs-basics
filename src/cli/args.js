// Task
// implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format
// propName is value, prop2Name is value2

// node args --propName value --propName value2

export const parseArgs = () => {

  const args = process.argv.slice(2);

  console.log(args);

  const answer = args.reduce((result, item, index, arr) =>
    {
      if (item && item.startsWith('--')) {
        result.push(`${item.slice(2)} is ${arr[index + 1]}`);
      }
      return result;
    }, []);

    console.log(answer.join(', '))
};

parseArgs();