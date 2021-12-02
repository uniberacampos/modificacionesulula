
console.log("Ingreso")
window.addEventListener('load', function (e) {

    const url = window.location.href

    if (url.includes('onestepcheckout')) {
        const inputs_fallados = document.getElementsByClassName('input-box')

        for (let i = 0; i < inputs_fallados.length; i++) {
            inputs_fallados[i].style.setProperty('width', '90%', 'important')
        }
    }
})
