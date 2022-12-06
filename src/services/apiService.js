const ENDPOINT = 'https://api.kvikmyndir.is/'
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzhlMDIyM2ZmMmQ4ZDEwOWVmYWZmOTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhlbGdpIEhyYWZuIEF4ZWxzc29uIiwiZW1haWwiOiJoZWxnaWEyMUBydS5pcyIsInVzZXJuYW1lIjoiZHJjaW5lbWEtaGdrIiwicGFzc3dvcmQiOiIkMmEkMDgkSk41UkhnZHZ3RndDYWc0bFpZQXl1LmkwSlNtb2NKUEdXeDk5VjNPUDNKeFg4bkMuRWVJLmEiLCJkb21haW4iOiJsb2NhbGhvc3QiLCJtZXNzYWdlIjoiZm9yIGEgc2Nob29sIHByb2plY3QgbWFraW5nIGEgbW92aWUgYXBwIiwiaWF0IjoxNjcwMzI2ODI4LCJleHAiOjE2NzA0MTMyMjh9.45AtK2xtUmr02c50gyvwv0CdK_qn93fzMdQVB3S1KA8'

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

