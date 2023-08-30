import API from '../lib/API';

it('Gets Access Token from API', async () => {
  const response = await API.post('/auth/authenticate', {
    email: 'admin@gmail.com',
    password: 'password',
  });

  expect(response.status).toBe(200);
  expect(response.data.accessToken).toBeTruthy();
  expect(response.data.refreshToken).toBeTruthy();

  localStorage.setItem('accessToken', response.data.accessToken);
  localStorage.setItem('refreshToken', response.data.refreshToken);
});

it('Refreshes Access Token from API', async () => {
  const response = await API.post('/auth/refresh-token');
  expect(response.status).toBe(200);
  expect(response.data.accessToken).toBeTruthy();
  expect(response.data.refreshToken).toBeTruthy();
  localStorage.setItem('accessToken', response.data.accessToken);
  localStorage.setItem('refreshToken', response.data.refreshToken);
});

it('waits and retries to get refreshed token from API', async () => {
  setTimeout(async () => {
    const response = await API.post('/auth/refresh-token');
    expect(response.status).toBe(200);
    expect(response.data.accessToken).toBeTruthy();
    expect(response.data.refreshToken).toBeTruthy();
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
  }, 10000).unref();
}, 15000);

it('Gets response from admin controller', async () => {
  const response = await API.get('/admin');
  expect(response.status).toBe(200);
  expect(response.data).toBeTruthy();
  console.log(response.data);
});
