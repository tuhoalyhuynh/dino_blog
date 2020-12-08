import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.post.title}</h1>
      <h2>By: {props.post.author}</h2>
      <h3>{props.post.body}</h3>
      <h2>Comments</h2>
      <h4>{props.post.comment}</h4>
    </div>
  );
}

export default App;
