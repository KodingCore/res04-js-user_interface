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
                    ulNav[number].style.display = "none";
                }
            });
        }
        
        for(let i =0; i < h2Nav.length; i++)
        {
            asideListener(i);
        }
        
});