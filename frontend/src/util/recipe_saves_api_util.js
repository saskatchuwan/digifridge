import axios from 'axios';

export const fetchSavedRecipes = () => (
    axios.get(`/api/userRecipes`)
);

export const postSavedRecipe = (recipe) => (
    axios.post('/api/userRecipes', recipe)
);

export const removeSavedRecipe = id => (
    axios.delete(`/api/userRecipes/${id}`)
);