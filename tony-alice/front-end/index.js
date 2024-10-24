const input = document.querySelector('input');
const prev = document.querySelector('.prev');

input.addEventListener('change', (file) => {
  
    while(prev.firstChild) {
        prev.removeChild(prev.firstChild)
    }
    for (const fData of input.files) {
        const form = new FormData();
        form.append('file',fData);
        const {name} = fData;
        form.append('description',name);
        form.append('filename',name);



        const url = URL.createObjectURL(fData);
        const createImg = document.createElement('img');
        createImg.src = url;
        createImg.width = 300;
        createImg.height = 300;
        createImg.alt = 'user captured image';
      
 
        
        const p = document.createElement('p');
        p.innerText=name;
        prev.appendChild(createImg)
        prev.appendChild(p)
        console.log(url);

        fetch('http://localhost:3000/upload',{method:"POST",body:fData,headers:{filename:name}}).then((re)=>re.json()).then(rep=>{
            console.log('response',rep)
        }).catch(e=>console.log(e,'error'))

        // convert base64 
        // const fsReader = new FileReader()
        // fsReader.onload = function(e){
        //     const base64 = e.target.result;
        //     console.log(e)
        // }
        // fsReader.readAsDataURL(fData)
        



    }
})
input.addEventListener('cancel', (file) => {
    console.log('file upload cancel')
})