
import env from 'node:process';

//insecure add a backend
const client = require('contentful').createClient({
    space: 'wm1hz9m6fq76',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'PvyTimp1YuhJmU_dHQY7G3ff9Id2k018IJCbTu-GRZQ',
  })

function getMedia() {
    console.log(client)
    return client.getEntries({
        content_type: 'media'
    }).then((response: { items: any; }) => {console.log(response.items); return response.items})
}

function getEvents() {
    return client.getEntries({
        content_type: 'speaking'
    }).then((response: { items: any; }) => {console.log(response.items); return response.items})
}


export {getMedia, getEvents}