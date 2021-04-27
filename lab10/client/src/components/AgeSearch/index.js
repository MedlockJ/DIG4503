import React from "react";

class AgeSearch extends React.Component{

    readAge(event){
        //prevent default form action
        event.preventDefault();
        
        //find element id Age
        let element = document.querySelector("#age");
         console.log(element.value);
         fetch("/ages/" + element.value)
            .then((res) => {
                    //parse string into object
                    return res.json();
            })

            .then((processed) =>{
                    //find id ReportingArea
                    let reporting = document.querySelector("#reportingArea");
                    //check to see if property matches
                    if(processed.error){
                        reporting.innerHTML = processed.error;
                    } 
                    else{
                    reporting.innerHTML = processed.name;
                }
            });
        element.value="";
    }

    render(){
        return(
            <div>
                <h2>Age</h2>
                <form onSubmit={this.readAge}>
                    <input id="age" type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        );

    }
}
export default AgeSearch;