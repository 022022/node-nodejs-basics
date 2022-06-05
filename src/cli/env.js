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