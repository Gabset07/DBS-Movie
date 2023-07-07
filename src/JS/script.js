const botao = document.querySelector('.botao-trailer');

const modal= document.querySelector('.modal');

const video = document.getElementById('video');

const Linkdovideo = video.src;

botao.addEventListener('click', () =>{
    modal.classList.add('aberto');
})

const botaoFecharModal  = document.querySelector('.fechar-modal')

botaoFecharModal.addEventListener('click', ()=>{
    //passo 3 - fechar a modal
    modal.classList.remove('aberto')
    video.setAttribute('src','')
    video.setAttribute('src',linkDoVideo)
})