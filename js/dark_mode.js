// window.addEventListener('load', ()=>{
//     document.getElementById('btn').addEventListener('click',()=>{
//         document.querySelector('body').classList.toggle('darkMode')
//     });
// })

//modulo criado para exportar

const changeMode = () =>{
    document.querySelector('body').classList.toggle('darkMode');
}

export default changeMode;