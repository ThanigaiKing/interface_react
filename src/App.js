import React,{useState} from 'react';
import Data from './reminder/data';
import List from './reminder/list';
import './App.css'
function App() {
  const [people,setPeople] = useState(Data);
  return (
    <main> 
    <section className='container'>
      <h3>{people.length} MOST DANGEROUS BATSMAN</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
    </main>
  );
}

export default App;