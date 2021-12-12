function calculadora(){
    let numero1 = document.querySelector('#numero1')

    let sinal = document.querySelector('#sinal')

    let numero2 = document.querySelector('#numero2')




let novaDiv = document.createElement('div')

let novop = document.createElement('p')

let texto = document.createTextNode(`seu resultado e ${numero1.value, sinal.value,  numero2.value}`)

novop.appendChild(texto)


   novaDiv.appendChild(novop)
    
document.body.appendChild(novaDiv)

   
if(sinal === "*"){
    numero1 * numero2
}
if(sinal === "/"){
    numero1 / numero2
}
if(sinal === "+"){
    numero1 + numero2
}
if(sinal === "-"){
    numero1 - numero2
}


}




let resultado = document.querySelector('#resultado')
resultado.addEventListener('click', calculadora)
    