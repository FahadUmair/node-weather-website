
const request=require('request')



var forecast=(latitude,longitute,callback)=>{
    var url='http://api.weatherstack.com/current?access_key=b07acba7d460c36e0b4bdc757a9645a4&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitute)+''

request({ url,json: true },(error,{body})=>{
    
    if (error){
        callback('Unable to connect to weather service!')
    }else if(body.error){
        callback('Unable to find location.')
    } else{
        callback(undefined,{

            temperature:body.current.temperature,
            feelslike:body.current.feelslike,
            time:body.location.localtime
        })
    
    }
    
 })
}
 
module.exports=forecast