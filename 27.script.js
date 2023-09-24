

const elementCssTopics= document.getElementById('cssTopics')

console.log(elementCssTopics.innerHTML);
elementCssTopics.innerHTML = 'CSS IMP Topics'

const topicsElements = document.getElementsByClassName('topics')
console.log(topicsElements[0].innerHTML);
console.log(topicsElements[1].innerHTML);

console.log('=================querySelectors()====================');

const element = document.querySelector('#Selector');
console.log(element.innerHTML);

const elementAll = document.querySelectorAll(".jsTopics");


for (let index = 0; index < elementAll.length; index++) {
    const element = elementAll[index].innerHTML
    console.log(element);
    
}