
const App = () => {
    const alertMyInput = name => alert(name);
    return (
      <div>
        <Welcome name='Malek' alertMyInput={alertMyInput} />
      </div>
    );
   };
   


   const Welcome = props => {
    
    console.log(`props:`, props.name);
    return (
      <button  onClick={() => props.alertMyInput(` `)}>
        ClickMe
      </button>
    );
   };
   export default App
