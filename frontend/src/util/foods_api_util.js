import axios from 'axios';

export const fetchFoods = () => (
    axios.get(`/api/userFoods`)
);

export const postFood = food => (
    axios.post('/api/userFoods', food)
);

export const removeFood = id => (
    axios.delete(`/api/userFoods/${id}`)
);

