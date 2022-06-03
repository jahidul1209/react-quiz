import Layout from './components/Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import './styles/App.css'
import Signin from './pages/Signin';

function App() {
  return (
      <Layout>
        <Home/>
        <Signup/>
        <Signin/>
      </Layout>
      
  );
}

export default App;
