export class Authentication {
    public alterarForm(id1: string, id2: string) {
        const form1 = document.getElementById(id1)
        const form2 = document.getElementById(id2)
        if (form1 && form2) {
            form1.classList.replace('hidden', 'flex')
            form2.classList.replace('flex', 'hidden')
        }
    }

    public mostrarSenha(img: string, input: string) {
        const image = document.getElementById(img)
        const inputEl = document.getElementById(input)
        if (image && inputEl) {
            if (inputEl.getAttribute('type') === 'password') {
                inputEl.setAttribute('type', 'text')
                image.setAttribute('src', '/images/closedeye.png')
            } else {
                inputEl.setAttribute('type', 'password')
                image.setAttribute('src', '/images/openeye.png')
            }
        }
    }
}
