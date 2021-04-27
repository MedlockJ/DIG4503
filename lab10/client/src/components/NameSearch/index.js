import React from "react";

class NameSearch extends React.Component{
    readName(event){
        //prevent default form action
        event.preventDefault();
                //search element with ID = name
                let element = document.querySelector("#name");

                fetch("/employees/" + element.value)
                .then((res) =>{
                    return res.json();
                })

                .then((processed) => {
                    //search for ID Reporting Area
                    let reporting = document.querySelector("#reportingArea");
                    //check to see if property matches
                    if(processed.error){
                        reporting.innerHTML = processed.error;
                    }
                    else{
                        reporting.innerHTML = processed.age;
                    }
                });

                element.value = "";
    }

    render(){
        return(
            <div>
            <h2>Name</h2>
            <form onSubmit={this.readName}>
                <input id="name" type="text"/>
                <button>Submit</button>
            </form>
            </div>
        );
    }
}

export default NameSearch;