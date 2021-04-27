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
            console.log(processed);
        });
        name.value="";
        age.value="";
    }

    render(){
        return(
        <div>
            <h2>Create Employee</h2>
            <form onsubmit={this.createEmp}>
                <input id="empname" type="text"/>
                <input id="empage" type="text"/>
                <button class="button">Submit</button>
            </form>
        </div>
        );
    }
}
export default CreateEmp;