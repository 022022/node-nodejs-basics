// Task
// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

// RSS_name1=value1 RSS_name2=value2 node env

export const parseEnv = () => {

  const answer = Object.entries(process.env)
    .reduce((result, [key, value]) =>
    {
      if (key.startsWith('RSS_')) {
        result.push(`${key}=${value}`);
      }
      return result;
    }, []);

    console.log(answer.join('; '))
}

parseEnv();