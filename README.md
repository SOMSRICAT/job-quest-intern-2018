### TakeMeTour Internship Program 2018

Hi all applicants! Welcome to TakeMeTour Internship Program 2018. Being and intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be writted in Javascript language. The code will be tested with Node8, so you can use all Javascript features that equivalent to Node8.

1. Write a function that shift the elements of array to left or right by n elements in infinity loop. the function recevice 3 parameters, 1st is an array, 2nd the is direction ('left' or 'right'), 3rd is the number of elements will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```javascript
const shift = (arr,direction,n) =>{
  const x = arr.length
  if(direction==='left'){
      for(i=0;i<n;i++){
        arr.push(arr.shift())
      }
  }else {
      for(i=0;i<n;i++){
        arr.unshift(arr.pop())
      }
    }
      return arr
}
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 3))
console.log(shift([1, 2, 3, 4 ,5], 'right', 3))
```
2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2018/blob/master/hero.json) and write a code to caculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```javascript
const json  = require('./hero.json')

const findAvgNetworth = (arr) =>{
    const Avg = arr.map((item)=> item.networth)
    let res=0;
    for(i=0;i<Avg.length;i++){
        res += Avg[i]
    }
    return res/arr.length
}

const findAvgLevel = (arr) => {
    const intel = arr.filter((obj)=> obj.primary_attribute == 'intelligent')
    const Avg = intel.map((item)=> item.level)
    let res = 0
    for(i=0;i<intel.length;i++){
        res += Avg[i]
    }
    return res/intel.length
}

const findMostAssist = (arr) => {
    const most = arr.reduce( (a,b)=> {
      return  a.assist > b.assist ? a : b
    })
    return most
}

const findWrostRatio = (arr) =>{
    const wrost = arr.reduce((x,y)=> {
      return (x.kill/x.death) < (y.kill/y.death) ? x : y
    })
    return wrost
}


console.log("Average networth is " + findAvgNetworth(json))
console.log("Average level intelligent hero is " + findAvgLevel(json))
console.log("Most assist is " + findMostAssist(json).name)
console.log("Wrost kill/death ratio is " + findWrostRatio(json).name)
```

## Simple Web Application: A joke from Chuck Norris.

This part of quest will be a challenging one. You are going to make a simple web application which allow users to get some joke from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- UI Design as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: <insert your answer here>


Q2: Please explain how javascript benefits from cross-platform development

A2: เพราะ JavaScript สามารถในการทำงานข้ามระบบได้เพียงแค่ติดตั้ง Java Runtime ทำให้ผู้พัฒนาสามารถที่จะพัฒนาเทคโนโลยีต่างๆได้ในทุกระบบ ปัจจุบันมี Framework ถูกพัฒนาออกอย่างมากมายเพื่อเอื้อประโยชน์กับ JavaScript ให้มีประสิทธิภาพมากขึ้นโดยเฉพาะ NodeJS ที่ใช้เทคโนโลยี Non-blocking ทำให้ประมวลผลได้เร็วเป็นอย่างมากและเมื่อรวมกับความสามารถที่ทำงานข้ามระบบจึงทำให้ JavaScript มีประโยชน์อย่างมากกับการพัฒนาเทคโนโลยีข้าวแพลตฟอร์ม

Q3: What do you expect to get from during an internship at TakeMeTour?

A3: ผมคาดหวังจะได้สัมผัสกับการทำงานในสถานะการณ์จริงกับบริษัท Startup สมัยใหม่ และพัฒนาฝีมือพร้อมทั้งเรียนรู้การเขียน JavaScript ร่วมกับพี่ๆทีม Developer ที่มากประสบการณ์ อีกทั้งที่ TakeMeTour มีความยืดหยุ่นในการเข้าออกงาน การแต่งกาย ที่ให้พักผ่อน ที่ผมเคยคิดว่าที่สถานที่แบบนี้คงหาไม่ได้ในไทย (ที่เห็นก็มีที่ Google) และคิดว่าที่ TakeMeTour จะมีพี่ๆที่ใจดีทำให้มีความสุขระหว่างทำงานครับ (และอยากลองเล่น PS4 ที่นั่นด้วยครับ)

## Submitting

Please fork this repo and submit your repository at jet@takemetour.com along with your contact information.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
