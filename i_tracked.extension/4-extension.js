//chrome://extensions/
let myleads=[];
const n=document.getElementById("input");
const m=document.getElementById("button");
const o=document.getElementById("list");
const o1=document.getElementById("del");
const m1=document.getElementById("old");
const leadsfromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
if(leadsfromLocalStorage){ //to remeber i/p if previous stored
    myleads=leadsfromLocalStorage;
    render(myleads);
}
m1.addEventListener("click",function(){
   //4.Using chrome Api to get current tab
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads",JSON.stringify(myleads));
        render(myleads);
    })
})
function render(leads){
    let listitems="";
    for(let i=0; i<leads.length;i++){  
       //2.
        listitems+=` 
        <li>       
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
        </li> `;//3.
    }
    o.innerHTML=listitems;
}
o1.addEventListener("dblclick",function(){
    localStorage.clear();
    myleads=[];
    render(myleads);
})
m.addEventListener("click",function(){
    myleads.push(n.value);
    n.value="";
    localStorage.setItem("myleads",JSON.stringify(myleads));
    render(myleads);
    //1.
})

    // 1.create element
        // set text content
        // append to list
        // let li=document.createElement(li);
        // li.textContent=myleads[i];
        // list.append(li);
    //listitems will bascically add enter
    //text content replace by inner html that helps to manipulate html things in javascript

       // 2.listitems+="<li><a href='myleads[i]' target='_blank'>"+myleads[i]+"</a></li> ";
        //template string
        //`${name of the var}`reprsentation

        // 3.called as template string\\
    //the cost of using innerHtml instead using n times in loop use it once outside loop by using that one more variable
    // 4.tabs[0].url;
//    myleads.push(tabs[0].url);
//    localStorage.setItem("myleads",JSON.stringify(myleads));
//    render(myleads); it was hardcoded we need current tab
