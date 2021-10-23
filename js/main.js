let input = document.getElementById('type');
let r = document.getElementById('r');
let g = document.getElementById('g');
let b = document.getElementById('b');
let convert = document.getElementById('convert');
let reset = document.getElementById('reset');
let swap = document.getElementById('swap');
let cssCode = document.getElementById('css');
let colorDisplay = document.getElementById('preview');
let copy = document.getElementById('copy');

convert.addEventListener('click', (e)=>{
    e.preventDefault()
    let v = input.value
    let a = document.querySelector('.warning');
    reg = /#([\da-f]{1,2})([\da-f]{1,2})([\da-f]{1,2})/i;

    if(v.length === 4 || v.length === 7){
        let output = reg.exec(v);
        if(output === null){
            a.style.visibility = 'visible';
            setTimeout(()=>{
                a.style.visibility = 'hidden';
            },1000);
        }
        else{
            r.value = getColorValue(output[1]);
            g.value = getColorValue(output[2]);
            b.value = getColorValue(output[3]);
            cssCode.value = `rgb(${r.value},${g.value},${b.value})`;
            colorDisplay.style.background = v;
        }
    }else{
        a.style.visibility = 'visible';
        setTimeout(()=>{
            a.style.visibility = 'hidden';
        },1000);
    }
})

copy.addEventListener('click', (j)=>{
    j.preventDefault()
    cssCode.select();
    document.execCommand('copy')

})

swap.addEventListener('click', (e)=>{
    
    e.preventDefault()
    let heading = document.querySelector('.box h1');
    let pera = document.querySelector('.box p');
    let swapTochangeLabel = document.getElementsByTagName('label');
    let swapToNone = document.getElementById('swapToNone');
    let swapToShow = document.getElementById('swapToShow');
    let scrollRight = document.querySelectorAll('.scroll-right input');
    let scrollLeft = document.querySelectorAll('.scroll-left input');
    let swapDisplay = document.getElementById('swapDisplay');

    swapToShow.style.display = 'block';
    heading.innerHTML = 'RGB to Hex color conversion';
    pera.innerHTML = 'Enter red, green and blue color levels (0..255) and press the Convert button:'
    swapTochangeLabel[0].style.display = 'none';
    swapTochangeLabel[1].style.display = 'none';
    swapTochangeLabel[2].innerHTML = 'Hex color code';
    swapTochangeLabel[3].innerHTML = 'RGB color code';
    swapToNone.style.display = 'none';
    input.style.display = 'none';
    convert.style.display = 'none';
    swap.style.display = 'none'

    for(let i=0; i<scrollRight.length; i++){
        scrollRight[i].oninput = ()=>{
            for(let x=0; x<scrollLeft.length; x++){
                scrollLeft[x].value = scrollRight[x].value;
                let rgb = `rgb(${scrollLeft[0].value}, ${scrollLeft[1].value}, ${scrollLeft[2].value})`;
                swapDisplay.style.backgroundColor = rgb;
                g.value = rgb
            }
        }
    }
    
    

    
})

function getColorValue(hex){
    if(hex.length === 1){
        hex = hex + hex;
    }
    return parseInt(hex , 16);
}




