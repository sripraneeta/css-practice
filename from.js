
    let v=document.getElementById("#firstName");
    let y=document.getElementById("p1");
    v.addEventListener("change",val);
    function val(a){
        y.textContent=a.target.value;
    }
    //console.log(v);    


$(document).ready(function(){
    
    $("#reg").click(function(){
        if($("#empId").val==""){
            alert("Enter EmpId");
        }
        let fn=document.getElementById("firstName").value;
        let l=fn.length;
        if(l<=3 || l>=13){
            alert("Invalid number of characters in First Name");
        }
        if($("#lastName").val.length<=5 || $("#firstName").val.length>=25){
            alert("Invalid number of characters in Last Name");
        }

         
        
    })
})
