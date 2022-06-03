// node args --propName value --propName value2

export const parseArgs = () => {
  const args = process.argv.slice(2);
  let result = '';

  for(const item of args){
    const argIndex = args.indexOf(item);
    if(!(argIndex % 2)){
      result += `${args[argIndex].slice(2)} is `;
    }
    else{
      result += `${args[argIndex]}, `;
    }
  }
  const resultWithoutComma = result.slice(0, result.length - 2);

  console.log(resultWithoutComma);
};

parseArgs();