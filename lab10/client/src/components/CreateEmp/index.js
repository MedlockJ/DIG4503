import React from "react";

class CreateEmp extends React.Component{

    createEmp(event){
        //prevent default form action
        event.preventDefault();
        
        let name = document.querySelector("#empname");

        let age = document.querySelector("#empage");

        fetch("/employees/" + name.value + "/" + age.value, {
            "method" : "post"

        }).then((res) =>{
            return res.json();
        }).then((processed) => {
            
            let reporting = document.querySelector("#reportingArea");
                
            //check to see if property matches
            if(processed.error){
                //changes text to red if not found in database
                reporting.classList.add('red');
                reporting.innerHTML = processed.error;
            } 
            else{
                reporting.classList.remove('red');
            }
        });
        name.value="";
        age.value="";
    }

    render(){
        return(
        <div>
            <h2>Create Employee</h2>
            <form onSubmit={this.createEmp}>
                <input id="empname" placeholder="Name" type="text"/>
                <input id="empage" placeholder="Age" type="text"/>
                <button class="button">Submit</button>
            </form>
        </div>
        );
    }
}
export default CreateEmp;