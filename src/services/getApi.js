const url = 'https://economia.awesomeapi.com.br/json/all';

export default function getAPI() {
  return fetch(url).then((response) => response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
}
