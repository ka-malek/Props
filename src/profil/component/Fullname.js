import PropTypes from 'prop-types';
function App() {
    return (
      <div className="App">
        <NewComponent Firstname='Malek' Lastname='Kalboussi'></NewComponent>
      </div>
    );
  }
  
  function NewComponent(props) {
    const styleobject={textAlign:'center' ,fontSize:'40px'}
    return (
      
      <div className="test-class">
        <h1 style={styleobject}>Firstname: {props.Firstname}</h1>
        <h3 style={styleobject}>Lastname: {props.Lastname}</h3>
      </div>
    );
    
  }

  export default App;