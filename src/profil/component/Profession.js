import React from "react";

function profession() {

    return (
      <div >
        <NewComponent profession="web developer"></NewComponent>
      </div>
    );
  }
  
  function NewComponent(props) {
    const styleobject={textAlign:'center'}

    return (
      <div>
        <h1 style={styleobject}>My profession: {props.profession}</h1>
        
      </div>
    )
  }
  export default profession;
  