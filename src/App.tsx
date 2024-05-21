import './App.css';
import Header from './component/header/Header';
import ViewComponent from './component/view/ViewComponent';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <ViewComponent />
      </div>
    </div>
  );
}

export default App;
