/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const inputSearch = document.getElementById("search");
const outcome = document.querySelector('#listState')
const search =document.querySelector("#search")
const counList =document.getElementById('countryList')
const submit = document.getElementById('submit')
const contain =document.getElementById('container')

inputSearch.addEventListener("keyup", () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
         const listb = JSON.parse(xhr.response)
        const valuedata = inputSearch.value
        const list = listb.filter(ele=>{
        return ele.name.toLocaleLowerCase().startsWith(valuedata)  
        })
         list.forEach(ele => {
          const opt = document.createElement('option')
          opt.value =ele.name;
          counList.appendChild(opt)   
         });
              
        }
        
      }
    }   
  xhr.open('GET', '/country', true);
  xhr.send();
  })

  submit.addEventListener("click", () => {
    const input = inputSearch.value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
         const data = JSON.parse(xhr.response)
       data.forEach(ele=>{
         const div = document.createElement('div')
        const img =document.createElement('img')
        img.classList.add('image');
        img.src =ele.urls.raw
        div.appendChild(img)
        contain.appendChild(div)
       
       })
         
          }
          
        }
      }
     
    xhr.open('GET', `/api/${input}`,true); ///api/london
    xhr.send();
    
    })