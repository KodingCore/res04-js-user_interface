window.addEventListener("DOMContentLoaded", function(){

        let h2Nav = document.querySelectorAll("body > main > aside > nav > h2");
        let ulNav = document.querySelectorAll("body > main > aside > nav > ul");
        
        function asideListener(number){
            h2Nav[number].addEventListener("click", function(element){
                if(ulNav[number].style.display === ""){
                    ulNav[number].style.display = "block";
                }
                else
                {
                    ulNav[number].style.display = "";
                }
            });
        }
        
        
        for(let i =0; i < h2Nav.length; i++)
        {
            asideListener(i);
        }
        
        
        function sideMenuEffect(){
            let sideBtn = document.getElementById("side-menu-btn");
            let leftAside = document.getElementsByClassName("open");
            let secTitle = document.querySelector("header > section");
            
            sideBtn.addEventListener("click", function(){
                if(leftAside[1].style.display === "none"){
                    leftAside[1].style.display = "block";
                    secTitle.style.borderRight = "solid 1px black";
                    secTitle.style.borderBottom = "none";
                }else{
                    leftAside[1].style.display = "none";
                    secTitle.style.borderRight = "none";
                    secTitle.style.borderBottom = "solid 1px black";
                }
                
            });
        }
        
        sideMenuEffect();
        
        
        function dynamizeTable(){
            let users = [  
                {  
                    id: 0,  
                    isActive: false,  
                    age: 24,    
                    name: "Marsh Obrien" 
                },  
                {  
                    id: 1,  
                    isActive: false,  
                    age: 21,    
                    name: "Rios Gibson" 
                },  
                {  
                    id: 2,  
                    isActive: false,  
                    age: 29,  
                    name: "Morgan Buchanan"
                },  
                {  
                    id: 3,  
                    isActive: true,  
                    age: 25,    
                    name: "Franklin Dyer" 
                },  
                {  
                    id: 4,  
                    isActive: false,  
                    age: 30, 
                    name: "Keller Pitts" 
                },  
                {  
                    id: 5,  
                    isActive: false,  
                    age: 25,  
                    name: "Davenport Maddox"  
                },  
                {  
                    id: 6,  
                    isActive: true,  
                    age: 31,  
                    name: "Judith Graves"
                },  
                {  
                    id: 7,  
                    isActive: true,  
                    age: 26,  
                    name: "Hoffman Hess" 
                },  
                {  
                    id: 8,  
                    isActive: true,  
                    age: 22,  
                    name: "Sheena Goff"
                },  
                {  
                    id: 9,  
                    isActive: false,  
                    age: 39,  
                    name: "Rose Lawrence" 
                }  
            ];
            
            let tbody = document.querySelector("tbody");
            
            for(let user of users){
                let newTr = document.createElement("tr");
                let newTdId = document.createElement("td");
                let newTdName = document.createElement("td");
                let newTdAge = document.createElement("td");
                let newTdActive = document.createElement("td"); 
                let newTdActions = document.createElement("td");
                
                let idTextNode = document.createTextNode(user.id);
                let nameTextNode = document.createTextNode(user.name);
                let ageTextNode = document.createTextNode(user.age);
                
                let activeSpan = document.createElement("span");
                let actionSpan1 = document.createElement("span");
                let actionSpan2 = document.createElement("span");
                let actionSpan3 = document.createElement("span");
                
                tbody.appendChild(newTr);
                
                newTr.appendChild(newTdId);
                newTr.appendChild(newTdName);
                newTr.appendChild(newTdAge);
                newTr.appendChild(newTdActive);
                newTr.appendChild(newTdActions);
                
                newTdId.appendChild(idTextNode);
                newTdName.appendChild(nameTextNode);
                newTdAge.appendChild(ageTextNode);
                newTdActive.appendChild(activeSpan);
                newTdActions.appendChild(actionSpan1);
                newTdActions.appendChild(actionSpan2);
                newTdActions.appendChild(actionSpan3);
                
                if(user.isActive){
                    activeSpan.classList.add("bi-person-fill-up");
                }else{
                    activeSpan.classList.add("bi-person-fill-down");
                }
                
                actionSpan1.classList.add("bi-eye");
                actionSpan2.classList.add("bi-pen");
                actionSpan3.classList.add("bi-trash3");
                
            }
        }
        dynamizeTable();
});