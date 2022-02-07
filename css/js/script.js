        // select 
        var today = new Date().toLocaleDateString('en-ca');
        document.getElementById("checkdate").setAttribute("max",today);

        // prevent reloading afte submit
        $(document).ready(function () {
        // Listen to submit event on the <form> itself!
        $('#myForm').submit(function (e) {
            e.preventDefault();
        });
        });

        
        function validateForm(){
            
            let validation = false;

            function checkEmpty(y){

                var x = document.getElementById(y).value;
                var checkboxes = document.querySelector('input[name="checkoption"]:checked')
                var radioboxes = document.querySelector('input[name="department_option"]:checked')
                
                if(x==="" || checkboxes===null || radioboxes===null){
                    return true;
                }
                return false;  
            }
            
            var ids = ["employee_id","first_name","last_name","email","checkdate","address","telephone"]
            
            for(i=0; i < ids.length ; i++){
               if(checkEmpty(ids[i])){
                    alert("Please fill all the fields");
                    break;
               }
               else if(i===ids.length-1)
                   validation = true;
            }

            if(validation===true)
                window.location.href = "./success.html";
        
        }

        function cancel(){
            function clear(y){

                 document.getElementById(y).value = "";
                 
            }
            
            var ids = ["employee_id","first_name","last_name","email","checkdate","address","telephone"]
            
            for(i=0; i < ids.length ; i++){
                clear(ids[i]);
               
            }
        }