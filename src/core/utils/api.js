const URL = 'https://loft-taxi.glitch.me/auth';

export const fetchLogin = data => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());
};
