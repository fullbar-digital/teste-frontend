import {http} from "./config";

export default{
    pokemonList: (params) => {        
        return new Promise((resolve, reject) => {            
            let offset = params.page*params.qtdPage;
            if(params.start && params.start >= params.page*params.qtdPage){
                    offset = params.start;
            }

            let limit = params.qtdPage;
            if(params.finish &&  params.finish - params.start <= params.qtdPage){
                limit = params.finish - params.start;
            }

            console.log(offset);
            http.get(`pokemon?offset=${offset}&limit=${limit}`).then(result => {
                resolve(result.data);
            }).catch((err) => {
                reject(err);
            })
        })
    },

    pokemonById: (id) => {
        return new Promise((resolve, reject) => {
            http.get(`pokemon/${id}`).then(result => {
                resolve(result.data);
            }).catch((err) => {
                reject(err);
            })
        })
    }
}