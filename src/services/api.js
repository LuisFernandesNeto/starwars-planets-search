const API_PLANETS = 'https://swapi.dev/api/planets';

const getPlanets = async () => {
  const response = await fetch(API_PLANETS);
  const planets = await response.json();
  const { results } = planets;
  const filteredPlanets = results.map((result) => {
    delete result.residents;
    return result;
  });
  return filteredPlanets;
};

export default getPlanets;
