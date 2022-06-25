const pTag1 = document.querySelector('.first')
const pTag2 = document.querySelector('.second')

//split은 문자열을 배열로 변환해줌
const textArr1 = 'Yummy Tasty Delicious Useful Coding Yummy Yummmmmmmmy yum'.split (' ')
const textArr2 = 'Pizza Chicken Hamburger Salad Susi Bibimbab'.split (' ')

function initTexts(element, textArray){
    //같은 내용을 뒤에 push해줌
    textArray.push(...textArray)
    for( let i = 0; i < textArray.length; i++){
        //각각의 단어를 for문으로 돌며 단어 뒤에 띄어쓰기 네번처리
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}
initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)


let count1 = 0
let count2 = 0

function marqueeText(count, element, direction){
    if(count > element.scrollWidth / 2){
        //만일 count가 element scrollWidth의 절반값 이상 이라면
        //count를 0으로 만들고 element도 원위치 시킨다
        element.style.transform = `translateX(0)`
        count = 0
    }
    //그게 아니라면 element를 count에 direction을 곱한만큼 이동시키고
    //count를 return시켜 다음 animate함수에 반영되도록 한다.
    element.style.transform = `translate(${count * direction}px)`
    return count
}

function animate(){
    count1++
    count2++

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)

    window.requestAnimationFrame(animate)
}

//스크롤 함수를 만들고 스크롤 시마다 더 빨리 흐르게 만든다
function scrollHandler(){
    count1 += 15
    count2 += 15
}
window.addEventListener('scroll', scrollHandler)
animate()