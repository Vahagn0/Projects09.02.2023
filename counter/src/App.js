import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const name = useSelector(function(state){
    return state.user.name
  })

  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>{name}</p>
      <input type="text" value={name} 
        onChange = {(evt)=>{
          dispatch({
            type: "changeName",
            payload : {
              name: evt.target.value
            }
          })
        }}
      />
    </div>
  );
}

export default App;
