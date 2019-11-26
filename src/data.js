export const url_all = "https://melroune.github.io/starwars-api/api/all.json"

export const url = "https://melroune.github.io/starwars-api/api/id/"

export function getData() {
    return fetch(url_all).then(r => r.json())
}