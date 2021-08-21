import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeView from './components/RecipeView';
import RecipeForm from './components/RecipeForm';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/'>
              <RecipeView />
            </Route>
            <Route exact path='/addrecipe'>
              <RecipeForm />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
