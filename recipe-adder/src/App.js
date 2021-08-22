import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import AddRecipeForm from './components/AddRecipeForm';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/'>
              <RecipeForm />
            </Route>
            <Route exact path='/addrecipe'>
              <AddRecipeForm />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
