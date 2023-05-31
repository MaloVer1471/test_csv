import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const info = content.splite('\n').clise(1).map((el) => el.split('|').filter((element) => element !== '')); //Чтобы убрать |

  const [, ...weather] = content.trim().split('\r\n');
  const splitted = weather.map((item) => item.split(','));


  const city = _.uniq(splitted.map((item) => item[7])).sort().join(', ')

  
  const humidity = _.uniq(splitted.map((item) => item[3]))
  const minHymiditly = _.min(humidity);
  const maxHymiditly = _.max(humidity);


  console.log(newLine);
  console.log(`Count: ${weather.length}`);
  console.log(`Cities: ${city}`);
  console.log(`Humidity: Min: ${minHymiditly}, Max: ${maxHymiditly}`);







  const line = content.trim().split('\r\n');
  const [, ...peoples] = line;
  const splitted = peoples.map((item) => item.split(','));
  const ports = _.uniq(splitted.map((item) => item[12]))
  const newPorts = ports.filter((item) => item !== '').join(', ');
  const male = splitted.filter((item) => item[5] === 'male');
  const female = 
  console.log(peoples.length);
  console.log(newPorts);
  console.log(male.length);
  // END
}
