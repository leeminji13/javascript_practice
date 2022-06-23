//getBoundingClientRect 마우스 좌표값을 통해 작업할때 쓰이는 함수
//엘리먼트의 왼쪽여백x좌표 위쪽여백y좌표, 엘리먼트의 가로 세로길이를 구할 수 있음




const frame = document.getElementById('frame')
const card =  document.getElementById('card')
const light = document.getElementById('light')

let { x, y, width, height } = frame.getBoundingClientRect()

function mouseMove(e){
    //마우스가 위치하는 좌표값 얻기
    //브라우저의 가장 왼쪽부터 카드내부의 마우스 위치까지 (e.clientX)
    //왼쪽여백X 를 빼면 마우스가 위치하는 x좌표를 얻을 수 있다 == left
    const left = e.clientX - x
    const top = e.clientY - y
    const centerX = left - width / 2
    const centerY = top - height / 2
    const d = Math.sqrt(centerX**2 + centerY**2)

    card.style.boxShadow = `
        ${-centerX / 5}px ${-centerY / 5}px 10px rgba(0, 0, 0, 0.1)
     `

    card.style.transform = `
        rotate3d(
            ${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg
        )
    `
    light.style.backgroundImage = `
        radial-gradient(
            circle at ${left}px ${top}px, #00000010, #ffffff00, #ffffff70
        )
    `
}

frame.addEventListener('mouseenter',()=>{
    frame.addEventListener('mousemove', mouseMove)
})
frame.addEventListener('mouseleave',()=>{
    frame.removeEventListener('mousemove', mouseMove)
    card.style.boxShadow = ''
    card.style.transform = ''
    light.style.backgroundImage = ''
})

window.addEventListener('resize', () => {
    rect = frame.getBoundingClientRect()
    x = rect.x
    y = rext.y
    width = rect.width
    height = rect.height
})