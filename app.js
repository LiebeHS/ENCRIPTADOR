// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
function copiarDeshabilitado(){
    const areaEncriptado = document.querySelector('.texto-introducido').textContent
    if(areaEncriptado === '¡Aun no has escrito nada! u-u'){
        document.querySelector('.boton.copiar').setAttribute('disabled','true')
    }
}
copiarDeshabilitado()
const noMayuscula = /[A-Z]/
const noAcento = /[áéíóúÁÉÍÓÚ]/


function tieneEspecial(){
    const textarea = document.getElementById('input').value
    const tieneMayuscula = noMayuscula.test(textarea)
    const tieneAcento = noAcento.test(textarea)

    if(tieneMayuscula){
        alert("El texto introducido tiene letras mayúsculas")

    }else if(tieneAcento){
        alert("El texto introducido tiene letras con acento")

    } else{
        const textarea2 = document.querySelector('.texto-introducido')
    
        //Encriptar el texto usando una función dentro de replace
        const textoEncriptado = textarea.replace(/[aeiou]/gi, function(match){
            switch(match){
                case 'a': return 'ai';
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'o': return 'ober';
                case 'u': return 'ufat';
            }

        })
        textarea2.value = textoEncriptado;
        document.querySelector('.boton.copiar').removeAttribute('disabled')
        
    }
}    

    function desencriptar(texto){
        const textarea = document.getElementById('input').value
        const tieneMayuscula = noMayuscula.test(textarea)
        const tieneAcento = noAcento.test(textarea)
    
        if(tieneMayuscula){
            alert("El texto introducido tiene letras mayúsculas")
    
        }else if(tieneAcento){
            alert("El texto introducido tiene letras con acento")
    
        } else{        
            //DesEncriptar el texto usando una función dentro de replace
            return texto
            .replace(/ufat/g, 'u')
            .replace(/ober/g, 'o')
            .replace(/imes/g, 'i')
            .replace(/enter/g, 'e')
            .replace(/ai/g, 'a')
        }
    }
    function desencriptarTexto(){
        const textarea = document.getElementById('input').value;
        const textoDesencriptado = desencriptar(textarea)
        document.querySelector('.texto-introducido').value = textoDesencriptado
    }

    function copiar(){
        const textarea2 = document.querySelector('.texto-introducido')
        textarea2.select();
        textarea2.setSelectionRange(0, 99999);

        try{
            document.execCommand('copy');
            alert('Texto copiado al portapapeles');
        } catch (err){
            alert('Error al copiar al portapapeles')
        }

    }


