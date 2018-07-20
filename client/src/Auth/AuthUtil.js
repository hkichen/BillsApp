function privateFetch(url) {
    return fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    })
}

export {privateFetch};