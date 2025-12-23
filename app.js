let btn0=document.querySelector(".tug");
console.dir(btn0.innerText);
btn0.addEventListener("click",function(event){
    console.dir(event);
let h=document.querySelector("h3");
let randomColor=generateRandom();
h.innerText=randomColor;
let div=document.querySelector("div");
div.style.background=randomColor;
});
console.dir(btn0);
function generateRandom(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
//let url1 = "http://universities.hipolabs.com/search?name="
let btn1 = document.querySelector(".pick");
btn1.addEventListener("click", async function () {
     list=document.querySelector("#list");
      list.innerText="";
    let input = document.querySelector("input");
    country = input.value;
    let res = await getColleges(country);
    collArr = res.data;
    console.log(collArr);
   show(collArr);
     // list=document.querySelector("#list");
     // list.innerText="";
})
function show(collArr){
    // list=document.querySelector("#list");
    for(coll of collArr){
       list=document.querySelector("#list");
        li=document.createElement("li");
        li.innerText=coll.name;
        list.appendChild(li);
        }
       // list.innerText="";

}

//let input=document.querySelector("input");
//country=input.value;
async function getColleges(country) {
    try {
        let res = await axios.get("http://universities.hipolabs.com/search?name=" + country);
        console.log(res);
        return res;
    } catch (e) {
        console.log(e);
    }
}
let btn2=document.querySelector(".tick");
let paragraph=document.querySelector("p");
btn2.addEventListener("click",async ()=>{
    facts=await getFact();
    paragraph.innerText=facts;
})
  
 url2="https://catfact.ninja/fact"
  async function getFact(){
    try{
     a=await axios.get(url2);
     return a.data.fact;
    }catch(e){
        console.log(e);
    }
}
let btn3=document.querySelector(".talk");
let image=document.querySelector(".name");
btn3.addEventListener("click",async ()=>{
    link=await getImages();
    image.setAttribute("src",link);
    console.log(link);
})
  
 url3="https://dog.ceo/api/breeds/image/random";
  async function getImages(){
    try{
     a=await axios.get(url3);
    return a.data.message;
    //console.log(a);
    }catch(e){
        console.log(e);
    }
}
getImages();



