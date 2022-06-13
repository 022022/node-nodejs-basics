// Task
// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2


// RSS_name1=value1 RSS_name2=value2 node env

export const parseEnv = () => {

  let result = '';
  const rssVars = Object.keys(process.env).filter(item => {
    if (item.startsWith('RSS_')){
      result += `${item}:${process.env[item]}; `;
    }
  });

  const resultWithoutSemicolon = result.slice(0, result.length - 2);
  console.log(resultWithoutSemicolon);
}

parseEnv();