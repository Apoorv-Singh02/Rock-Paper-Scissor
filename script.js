//let num=Math.floor(Math.random()*3);
/*
let arr=['rock','paper','scissor']

function comp(){
    let num=Math.floor(Math.random()*3);
    return arr[num];
}
*/

let i=0;
let j=0; 

function reset(){
    let theButton=document.getElementById("Reset");
    theButton.addEventListener("click",()=>{i=0;
        j=0;document.getElementById("Scores").innerHTML=`<h5>Player Score : ${i}</h5><h5>Comp score : ${j}</h5>`
    })
}




function player(val){


    if(i==5 || j==5){
        return
    }

    const rule = {
        "rockpaper":"Comp wins",
        "rockscissor":"Player wins",
        "paperrock":"Player wins",
        "paperscissor":"Comp wins",
        "scissorrock":"Comp wins",
        "scissorpaper":"Player wins"
    }

    
    let num=Math.floor(Math.random()*3);
    let arr=['rock','paper','scissor'];

    let result=val.concat(arr[num]);
    let imglst=["images/fire.png","images/water.png","images/land.png"]
    
    console.log("Comp chose : ",arr[num]);
    document.getElementById("Comp-choice").innerHTML=`<img src="${imglst[num]}" style="width: 250px; height: auto; margin-left:40%; border-style:solid; border-width:2.5px; border-color:red">`

    if(val==arr[num]){
        document.getElementById("Winner").innerHTML=`<h1>It,s a TIE</h1>`
    } 
    else {
        document.getElementById("Winner").innerHTML=`<h1>${rule[result]}</h1>`
    }
    
    if(rule[result]=="Comp wins"){
        j++;
    }
    else if(rule[result]=="Player wins"){
        i++;
    }
    document.getElementById("Scores").innerHTML=`<h5>Player Score : ${i}</h5><h5>Comp score : ${j}</h5>`

}


