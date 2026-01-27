let all_boxes=document.querySelectorAll(".boxes");

let msgJs=document.querySelector("#msg");

let msgContainer=document.querySelector(".msgcontainer");
let newResetbutton=document.querySelector("#reset-btn");

let turn0=true;

let winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


all_boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0===true){
            box.innerText="X";
            turn0=false;
            console.dir(box);
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        
        
    })
});

let checkWinner=()=>{
    for(let pattern of winnerPattern){
        let putval1=all_boxes[pattern[0]].innerText;
        let putval2=all_boxes[pattern[1]].innerText;
        let putval3=all_boxes[pattern[2]].innerText;

        if(putval1!=""&&putval2!=""&&putval3!=""){
            if(putval1==putval2&&putval2==putval3){
                console.log("winner",putval1);
                showWinner(putval1);
                
            }

            
        }

    }

};

let showWinner=(win)=>{
    msgJs.innerText=`the winner is ${win}`;
    msgContainer.classList.remove("hide");
    all_boxes.forEach((box) => {
    box.disabled = true;
  });

};
let resetGame=()=>{
    turn0=true;
    enablebox();
    msgContainer.classList.add("hide");
}

   

let disablebox=()=>{
    all_boxes.forEach((box)=>{
        box.disabled=true;
    })
};

let enablebox=()=>{
    all_boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })   
};

newResetbutton.addEventListener("click",resetGame)