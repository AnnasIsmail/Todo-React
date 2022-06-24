import React from 'react';
import { Button, Icon, Input, Segment } from 'semantic-ui-react';
import './Do.css';

function Do(props){
    
let content;
let [edit , setEdit] = React.useState(false);

function done(){
    let allData = props.allData; 
    let arrayToEdit = [];
    allData.map((data , index)=>{
        if(props.do === data){

        }else{
            arrayToEdit.push(data);
        }
    });
    localStorage.setItem("do", JSON.stringify(arrayToEdit));
    props.reRender();
}


    function onEdit(){
        setEdit(true);
    }

    function editData(){
        let allData = props.allData; 
        let editDataInput = document.getElementById("editDataInput").value
        let arrayToEdit = [];
        allData.map((data , index)=>{
            if(props.do === data){
                arrayToEdit.push(editDataInput);
            }else{
                arrayToEdit.push(data);
            }
        });
        localStorage.setItem("do", JSON.stringify(arrayToEdit));
    props.reRender();
    setEdit(false);
}

    
    if(edit === false){
        
        content = (
            <>
                <h3>{props.do}</h3>
                <div>
                    <Icon circular inverted link color='purple' name='edit' onClick={onEdit} />
                    <Icon circular inverted link color='purple' name='checkmark' onClick={done} />
                </div>
            </>
        );
    }else{
        content = (
            <>
                <div className='container-input'>
                    <Input placeholder='What do you want to do?' id="editDataInput" defaultValue={props.do} />
                    <Button link color='purple' onClick={editData}>Done</Button>
                </div>
            </>
        );
    }


return(
    <Segment className='do'>
        {content}
        
    </Segment>
);
}

export default Do;