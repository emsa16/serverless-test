import fetch from 'node-fetch'

const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';

export const handler = async () => {
    const response = await fetch(POKE_API);
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
