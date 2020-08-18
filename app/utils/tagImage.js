import axios from 'axios'

const tagImage = serviceConfiguration => {

    const URL               = serviceConfiguration.getURL()
    const headers           = serviceConfiguration.getHeaders()
    const handleResponse    = serviceConfiguration.getHandleResponse()
    const body              = serviceConfiguration.getBody()
    const params            = serviceConfiguration.getParams()


    return axios.post(URL, body, { headers, params: params, paramsSerializer: (params) => {
                
                let result = '';
                Object.keys(params).forEach(key => {
                    result += `${key}=${decodeURIComponent(params[key])}&`;
                });
                return result.substr(0, result.length - 1);
            }
        })
        .then(handleResponse)
        .catch(err => {
            console.log('Error tagging images:',err)
        })

}

export default tagImage