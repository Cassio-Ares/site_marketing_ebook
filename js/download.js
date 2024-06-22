import changeMode from "./dark_mode.js";

window.addEventListener('load', ()=>{
    document.getElementById('download').addEventListener('click',()=>{
        window.open('../public/ebook/fake.pdf')
    })

    document.getElementById('btn').addEventListener('click',()=>{
        changeMode()
    })
})