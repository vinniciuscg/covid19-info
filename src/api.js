const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry(country) {
  return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

function getCountriesNames() {
  return fetch(`${path}`, headers)
    .then((response) => response.json())
}

export default {
  getCountry,
  getCountriesNames
}