import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const player = ['Shakib Al-Hasan','Rakib','Tamim Iqbal','Masraffe','Miraz'];
 const products = [
   {name:'Photoshop', price:'$90.99'},
   {name:'Illustrator', price:'$70.99'},
   {name: 'PDF Reader', price:'$6.99'}
 ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Users></Users>
        <Count></Count>
        <h1>Player List</h1>
        <ul>
          {
            player.map(player => <li>{player}</li>)
          }
        </ul>
        <h1>product List</h1>
        <ul>
          {products.map(pd => <li>{pd.name}</li>)}
        </ul>
        {
          products.map(pd => <Products product = {pd}></Products>)
        }
        <Products product = {products[0]}></Products>
        <Products product = {products[1]}></Products>
        <Products product = {products[2]}></Products>
        <Person name = {player[0]} position = 'All Rounder'></Person>
        <Person name = {player[1]} position = 'Batsman'></Person>
        <Person name = {player[2]} position = 'Bowler'></Person>
        <Person name = {player[3]} position = 'All Rounder'></Person>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => console.log('clicked')

  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  // const handleIncrease = () => {
  //   setCount(count + 1);
  // }

  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>count : {count} </h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>

    </div>
  )
}

function Products(props){
  const productStyle = {
    color:'black',
    backgroundColor:'white',
    height:'200px',
    width:'200px',
    margin:'10px',
    borderRadius:'10px',
    boxShadow:'5px 8px 10px gray'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  var style = {
    backgroundColor:'red',
    color:'white',
    padding:'5px'
  }
  return (
    <div style={{backgroundColor:'lightSalmon', color:'black', padding:'10px 30px', borderRadius:'10px', margin:'15px'}}>
      <h1>{props.name}</h1>
      <h3 style={style}>{props.position} of the year</h3>
    </div>
  )
}

export default App;
