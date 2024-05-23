// 1
const sortCountries = countries.sort((o1, o2) => {
  if(o1['name'] > o2['name']) return -1;
  if(o1['name'] < o2['name']) return 1;
  return 0;
});

console.log(sortCountries);

// 2
const mostSpokenLanguages = (num) => {
  let languages = countries.map(i => i.languages).flat();

  let uniLanguage = [];
  for (const item of languages) {
    if(!uniLanguage.includes(item))
      uniLanguage.push(item);
  }
  let res = [];
  for (const item of uniLanguage) {
    let obj = [];
    obj.language = item;
    obj.cnt = languages.reduce((acc, cur) => {
      if(cur == item) 
        return acc + 1;
      return acc;
    },0)
    res.push(obj);
  }
  res.sort((o1, o2) => {
    if(o1.cnt > o2.cnt) return -1;
    if(o1.cnt < o2.cnt) return 1;
    return 0;
  });

  return res.slice(0, num);
};
console.log(mostSpokenLanguages(10));
console.log(mostSpokenLanguages(3));

// 3
const mostPopulatedCountries = (num) => {
  let countriesArr = countries.map(i => ({ name: i.name, population: i.population}));

  countriesArr.sort((o1, o2) => {
    if(o1.population > o2.population) return -1;
    if(o1.population < o2.population) return 1;
    return 0;
  });
  return countriesArr.slice(0, num);
};

console.log(mostPopulatedCountries(10));

// 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

let statistics = {};

statistics.count = () => {
  return ages.length;
};

statistics.sum = () => ages.reduce((acc, cur) => acc + cur, 0);

statistics.min = () => ages.reduce((acc, cur) => Math.min(acc, cur), 100);

statistics.max = () => ages.reduce((acc, cur) => Math.max(acc, cur), 0);

statistics.range = statistics.max() - statistics.min();

statistics.mean = statistics.sum()/statistics.count();

const squareDiff = ages.map(i => Math.pow(i - statistics.mean, 2));
statistics.variance = squareDiff.reduce((acc, cur) => acc + cur, 0) / ages.length;

statistics.std = Math.sqrt(statistics.variance);

statistics.median = () => {
  ages.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });
  const mid = parseInt(ages.length / 2);

  if(ages.length % 2) 
    return ages[mid];
  return (ages[mid-1] + ages[mid+1])/2;
};

statistics.mode = () => {
  let freq = {};
  let maxFreq = 0;
  let mode = [];
  for (const age of ages) {
    freq[age] = (freq[age] || 0) + 1;
    if(freq[age] > maxFreq) {
      maxFreq = freq[age];
      mode = [age];
    } else if(freq[age] == maxFreq) {
      mode.push(age);
    }
  }
  return {
    mode: mode.length === 1 ? mode[0] : mode,
    count: maxFreq
  };
};

statistics.freqDist = () => {
  let freq = {};
  let freqDist = [];
  for (const age of ages) {
    freq[age] = (freq[age] || 0) + 1;
  }

  console.log(freq)

  for (const i in freq) {
    freqDist.push([freq[i]/ages.length*100, i]);
  }
 
  return freqDist.sort((a, b) => (b[0] - a[0]));
};

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range) // 14
console.log('Mean: ', statistics.mean) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}

console.log('Variance: ',statistics.variance) // 17.5
console.log('Standard Deviation: ', statistics.std) // 4.2

console.log('Frequency Distribution: ',statistics.freqDist()) 




