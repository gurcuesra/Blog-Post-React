import './App.css';
import {BlogPost} from './BlogPost';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <Greeting myName="Esra" isAdmin={false}/>
      <BlogPost isAdmin={false}/>
    </div>
  );
}

export default App;