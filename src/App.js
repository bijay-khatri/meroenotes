import './App.css';

import Header from './components/header';
import Menu from './components/menu';
import MenuItems from './data/Menu';
import Notes from './components/notes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu items={MenuItems}/>
      <main className="App-content">
         Main content goes here
      </main>

      <footer className="App-footer">
        Footer
      </footer>

      <Notes />
    </div>
  );
}
export default App;
