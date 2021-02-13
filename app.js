 //method one of writing code
//  const deg=6;

 const hr=document.querySelector("#hr");
 const mn=document.querySelector("#mn");
 const sc=document.querySelector("#sc");

//  setInterval(()=>{
//     let day= new Date();
//     let hh = day.getHours() * 30;
//     let mm = day.getMinutes() * deg;
//     let ss = day.getSeconds() * deg;
   
//     hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)` 
//     mn.style.transform = `rotateZ(${mm}deg)`
//     sc.style.transform = `rotateZ(${ss}deg)`
   
//  })
setInterval(setDate,1000)
function setDate(){
   const now = new Date();
   // for seconds 
   const seconds = now.getSeconds()
   // multiplying with 360 inorder to get degree & dividing by 60 to know what proportion does it own out of one minute
   const secondsDegrees = ((seconds/60) * 360)
   sc.style.transform = `rotate(${secondsDegrees}deg)` //now the "deg inside rotate tells the code where it has to rotate itself"
   const  minutes = now.getMinutes()
   const minutesDegrees = ((minutes/60)*360)
   mn.style.transform = `rotate(${minutesDegrees}deg)`

   const hours = now.getHours()
   // you can also do and will work the same 
   // const hoursDegrees = ((minutes/12)*360) 
   const hoursDegrees = ((hours/12)*360)
   hr.style.transform = `rotate(${hoursDegrees}deg)`
   
   console.log(hoursDegrees)



}
