import tokenService from './tokenService';

const BASE_URL = '/api/ideas';

export function create(idea) {
    console.log("HELLO", idea.get('idea'))
    return fetch(BASE_URL, {
      method: 'POST',
      body: idea,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
      }
    
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }

  export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }

  export async function removeIdea(ideaId) {
    return fetch(`${BASE_URL}/${ideaId}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Not logged In! Check Express terminal')
    })
}

  const userService = {
    create,
    getAll,
    removeIdea,
  };
  
  export default userService;