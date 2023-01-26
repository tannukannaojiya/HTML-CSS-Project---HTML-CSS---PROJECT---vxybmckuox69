const number=document.querySelectorAll('.code')

number[0].focus()

number.forEach((code, idx)=>{
    code.addEventListener('keydown',(e)=>{
        if(e.key>=0 && e.key<=9){
            number[idx].value=''
            setTimeout(()=>number[idx + 1].focus(),10)

        }else if(e.key === 'Backspace'){
            setTimeout(()=>number[idx-1].focus(),10)
        }

        
    })
})


