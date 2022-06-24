import React from 'react';
import { Button, Input, Segment } from 'semantic-ui-react';
import Logo from "../../Assets/Logo.png";
import Do from '../../Component/Do/Do';
import './ContainerDo.css';

function ContainerDo(){

let doData = []
let content;
let [add , setAdd] = React.useState(false);

function render(){
    if(localStorage.getItem("do") !== null){
        doData = JSON.parse(localStorage.getItem("do"));
        let dataDo = JSON.parse(localStorage.getItem("do"));
        content = (
            dataDo.map((data,index)=>{
                return(
                    <Do key={index} do={data} allData={dataDo} reRender={reRender} />  
                )
            })
        )
    }

}

    if(add === false){
        render();
    }else{
        render();
    }
    

function reRender(){
    if(add === false){
        setAdd(true);
    }else{
        setAdd(false);
    }
}


function addData(){
    let value = document.getElementById("inputData").value;
    if(value !== ""){
        let arrayData = doData;
        arrayData.push(value);
        doData = arrayData;

        localStorage.setItem("do", JSON.stringify(doData));
        if(add === false){
            setAdd(true);
        }else{
            setAdd(false);
        }
        document.getElementById("inputData").value ="";
    }else{
        alert("Mohon Isi Data To Do !");
    }
}

return(
    <Segment className="container-do" piled>
        <div className='logo-container'>
            <img src={Logo} alt="" className="logo"/>
            <h1>To Do List</h1>
        </div>
        
        <div className='container-input'>
            <Input placeholder='What do you want to do?' id="inputData" />
            <Button link color='purple' onClick={addData}>Add</Button>
        </div>

        <div className='container-to-do'>
           {content}
        </div>
    </Segment>
);
}

export default ContainerDo;