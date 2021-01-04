const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.getElementById('message-1')
const messageTwo=document.getElementById('message-2')
const messageThree=document.getElementById('message-3')
 

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    messageOne.textContent='Loading...'

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
            return
        }
        messageOne.textContent=data.location
        messageTwo.textContent='The temperature is '+data.forecast.temperature+'°C. It feels like '+data.forecast.feelslike+'°C'
        
        messageThree.textContent='Last updated: '+data.forecast.time
        
        })
    })


})