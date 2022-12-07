const ENDPOINT = 'https://api.kvikmyndir.is/'
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzhmMzkzMGZmMmQ4ZDEwOWVmYWZmYjciLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6Ikd1w7BtdW5kdXIgS3Jpc3Rqw6FuIEdVw7BuYXNvbiIsImVtYWlsIjoiZ3VtbWlndWRuYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imd1bW1pZ3VkbmEiLCJwYXNzd29yZCI6IiQyYSQwOCRIYW1BTkhBMVV0MmFCSUxBSFBSeC91ZzIyT3RrcHljdHNxQVoyeXphYkRDVG5HOEpoSXAuMiIsImRvbWFpbiI6IkjDoXNrw7NsaW5uIMOtIFJleWtqYXbDrWsiLCJtZXNzYWdlIjoiU2Nob29sIHB1cnBvc2VzIiwiaWF0IjoxNjcwNDE5MTAzLCJleHAiOjE2NzA1MDU1MDN9.5gRBmupVj2VThbvvZ5X_97F7tXrnwG2Q4bXjCt5tmdU'

export const getTheaters = async () => {
    const result = await fetch(ENDPOINT + 'theaters', {
        method: 'GET',
        headers: {
        'X-ACCESS-TOKEN': ACCESS_TOKEN
        }
    })
    return result.json()
}
export const getMovies = async () => {
    const result = await fetch(ENDPOINT + 'movies', {
        method: 'GET',
        headers: {
        'X-ACCESS-TOKEN': ACCESS_TOKEN
        }
    })
    return result.json()
}
export const getUpcoming = async () => {
    const result = await fetch(ENDPOINT + 'upcoming', {
        method: 'GET',
        headers: {
        'X-ACCESS-TOKEN': ACCESS_TOKEN
        }
    })
    return result.json()
}
export const getImages = async () => {
    const result = await fetch(ENDPOINT + 'images', {
        method: 'GET',
        headers: {
        'X-ACCESS-TOKEN': ACCESS_TOKEN
        }
    })
    return result.json()
}
export const getGenres = async () => {
    const result = await fetch(ENDPOINT + 'genres', {
        method: 'GET',
        headers: {
        'X-ACCESS-TOKEN': ACCESS_TOKEN
        }
    })
    return result.json()
    }

const cinemaService = {
    
}