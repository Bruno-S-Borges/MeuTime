import axios from 'axios';

const api = axios.create({
    baseURL:process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) =>{

        api.defaults.headers['X-RapidAPI-Key'] = `${token}`
        api.defaults.headers['X-RapidAPI-Host'] = 'api-football-v1.p.rapidapi.com'

        const response = await api.get('/timezone');

        return response.data
    },
    signin: async (key: string) =>{

        api.defaults.headers['X-RapidAPI-Key'] = `${key}`
        api.defaults.headers['X-RapidAPI-Host'] = 'api-football-v1.p.rapidapi.com'

        try {

        const response = await api.get('/timezone')
        console.log(response)
        return response.data
        } catch (error) {
        console.error(error);
        }
    },

    logout: async () =>{
        return {status:true}
    },

    getPaises: async(token: string) =>{

        api.defaults.headers['X-RapidAPI-Key'] = `${token}`
        api.defaults.headers['X-RapidAPI-Host'] = 'api-football-v1.p.rapidapi.com'

        const response = await api.get('/countries');

        return response.data
},

    getLigas: async(token: string, pais: string) =>{

        api.defaults.params = {country:`${pais}`}
        api.defaults.headers['X-RapidAPI-Key'] = `${token}`
        api.defaults.headers['X-RapidAPI-Host'] = 'api-football-v1.p.rapidapi.com'
        

        const response = await api.get('/leagues');

        return response.data

    },

    getTimes: async(token: string, liga: number, season: number) =>{

        api.defaults.headers['X-RapidAPI-Key'] = `${token}`
        api.defaults.headers['X-RapidAPI-Host'] = 'api-football-v1.p.rapidapi.com'
        

        const response = await api.get(`/teams?league=${liga}&season=${season}`);

        return response.data

    },

    getPlayer: async (token: string, time: number, season: number, page: number) =>{

      api.defaults.params = {team:`${time}`, season:`${season}`, page: `${page}`}
      api.defaults.headers['X-RapidAPI-Key'] = `${token}`
      api.defaults.headers['X-RapidAPI-Host'] = 'api-football-v1.p.rapidapi.com'

      const response = await api.get('/players');

      return response.data
    },

    getStatistics: async (token: string, time: number, season: number, liga: number) =>{

      api.defaults.params = {league:`${liga}`, season:`${season}`, team: `${time}`}
      api.defaults.headers['X-RapidAPI-Key'] = `${token}`
      api.defaults.headers['X-RapidAPI-Host'] = 'api-football-v1.p.rapidapi.com'

      const response = await api.get('/teams/statistics');

      return response.data
    }

})