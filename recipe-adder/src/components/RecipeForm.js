import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import Pagination from '@material-ui/lab/Pagination';
import recipeService from '../services/recipes';

function RecipeForm() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    setLoading(true);
    recipeService.getAll().then((initialRecipes) => {
      setRecipes(initialRecipes);
    });
    setLoading(false);
  }, []);

  // Get maximum page
  let pageNumbers = 0;

  for (let i = 1; i <= Math.ceil(recipes.length / postsPerPage); i++) {
    pageNumbers++;
  }
  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <SearchForm />
      <RecipeList recipes={currentRecipes} />

      <nav>
        <Pagination
          count={pageNumbers}
          page={currentPage}
          onChange={handlePageChange}
        />
      </nav>
    </>
  );
}

export default RecipeForm;
