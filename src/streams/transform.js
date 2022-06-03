import { Transform, pipeline } from 'stream';

export const transform = async () => {

  const reverseStr = new Transform({
    transform(chunk, encryption, callback){
      const str = chunk.toString();
      const strReversed = str.split('').reverse().join('');
      this.push(strReversed);
      callback();
    }
  });

  pipeline(process.stdin, reverseStr, process.stdout, ()=>{});

};

transform();

//implement function that reads data from process.stdin,
//reverses text using Transform Stream and then writes it into process.stdout