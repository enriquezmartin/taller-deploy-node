import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import NoMatch from './views/NoMatch';
import UsersView from './views/Users';
import Register from './views/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Home />}/>
        <Route path='/create' element={< Register />}/>
        <Route path='/all' element={< UsersView />}/>
        <Route path='*' element={< NoMatch />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
