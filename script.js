let boxBtns = document.querySelectorAll('.box-btn')
let changeTone = new Audio('ting.mp3')
let reset = document.querySelector('#reset')
let info = document.querySelector('#info')


let turnX = true;

const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const checkWinner = () =>{
    let count = 0
    for(let patterns of winPattern){
        let pos1 = boxBtns[patterns[0]]
        let pos2 = boxBtns[patterns[1]]
        let pos3 = boxBtns[patterns[2]]

        let pos1Value = boxBtns[patterns[0]].innerText
        let pos2Value = boxBtns[patterns[1]].innerText
        let pos3Value = boxBtns[patterns[2]].innerText

        if(pos1Value != '' && pos2Value != '' && pos3Value != ''){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                pos1.classList.add('win')
                pos2.classList.add('win')
                pos3.classList.add('win')
                reset.innerText = 'New Game'
                return `Winner is ${pos1Value}`
            }
        }
    }
}


boxBtns.forEach(button =>{
    
    button.addEventListener('click',()=>{
        changeTone.play()
        if(turnX){
            button.innerText = 'X'
            turnX = false
            info.innerText = 'Turn For O'
        }
        else{
            button.innerText = 'O'
            turnX = true
            info.innerText = 'Turn For X'
        }
        button.disabled = true
        let status = checkWinner();
        if(status!=undefined){
            boxBtns.forEach(button=>{
                button.disabled = true
            })
            info.innerText = status
        } 
    })
})

reset.addEventListener('click',()=>{
    boxBtns.forEach((button)=>{
        info.innerText = 'Turn For X'
        turnX = true
        button.innerText = ''
        button.disabled = false
        button.classList.remove('win')
        reset.innerText = 'Reset'
    })
})










