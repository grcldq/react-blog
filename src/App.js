import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Blog />
    </BrowserRouter>
  );
}

export default App;
