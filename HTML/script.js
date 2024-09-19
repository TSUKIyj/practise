const 文字欄 =document.querySelector(".文字欄");          //querySelector選取html內容
const 清單 =document.querySelector(".清單");
const 按鈕 =document.querySelector(".按鈕");


//======================================================================
function 新增(){
    if(文字欄.value === ""){            //若輸入為空值則中斷不新增
        return;
    }
    const 添加 = document.createElement("li");  //createElement插入HTML標籤
    // 添加.textContent= 文字欄.value;       //textContent內容
    添加.innerHTML =`
        <input type="checkbox" class="打勾方塊">
        <label>${文字欄.value}</label>
        <button class="垃圾桶">🗑️</button>
    `

//======================================================================
    const 垃圾桶 =添加.querySelector(".垃圾桶");    //當點擊圖示時
    垃圾桶.addEventListener("click",function(){
        添加.remove();
    });  
//======================================================================
    const 打勾方塊 =添加.querySelector(".打勾方塊");    //當點擊打勾方塊時
    打勾方塊.addEventListener("change",function(){
        if(打勾方塊.checked){
            添加.style.textDecoration ="line-through";
            添加.style.color ="#999";
            清單.append(添加);
        }else{
            添加.style.textDecoration ="none";
            添加.style.color ="";
            清單.prepend(添加);          //prepend添加至上方
        }    
    });  


    清單.append(添加);                   //append附加到底部
    文字欄.value="";                    //value值、清空文字欄
}

//======================================================================
文字欄.addEventListener("keyup",function(e){    //addEventListener擷取用戶的操作
    if(e.key === "Enter"){                     //keyup按下按鍵後放開key回傳用戶按下的鍵名
        新增();                                //若用戶按下enter                               
    }
})

按鈕.addEventListener("click",新增);           //結果同按下Enter





