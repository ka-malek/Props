function Bio() {
    return (
      <div className="bio">
        <NewComponent mybio='yo so this is a bio for me i dont know what to say '></NewComponent>
      </div>
    );
  }
  
  function NewComponent(props) {
    const styleobject={textAlign:'center'}
    return (
      <div>
        <h1 style={styleobject}>bio:{props.mybio}</h1>
        
      </div>
    )
  }
  export default Bio;