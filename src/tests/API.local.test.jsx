import API from "../lib/API";

it("Gets Accesstoken from API", async () => {
  const response = await API.post("/auth/authenticate", {
    email: "admin@gmail.com",
    password: "password",
  });

  expect(response.status).toBe(200);
  expect(response.data.access_token).toBeTruthy();
  expect(response.data.refresh_token).toBeTruthy();

  localStorage.setItem("accessToken", response.data.access_token);
  localStorage.setItem("refreshToken", response.data.refresh_token);
});

it("Refreshes Accesstoken from API", async () => {
  const response = await API.post("/auth/refresh-token");
  expect(response.status).toBe(200);
  expect(response.data.access_token).toBeTruthy();
  expect(response.data.refresh_token).toBeTruthy();
  localStorage.setItem("accessToken", response.data.access_token);
  localStorage.setItem("refreshToken", response.data.refresh_token);
});

it("waits and retries to get refreshed token from API", async () => {
  setTimeout(async () => {
    const response = await API.post("/auth/refresh-token");
    expect(response.status).toBe(200);
    expect(response.data.access_token).toBeTruthy();
    expect(response.data.refresh_token).toBeTruthy();
    localStorage.setItem("accessToken", response.data.access_token);
    localStorage.setItem("refreshToken", response.data.refresh_token);
  }, 10000).unref();
}, 15000);

it("Gets response from admin controller", async () => {
  const response = await API.get("/admin");
  expect(response.status).toBe(200);
  expect(response.data).toBeTruthy();
  console.log(response.data);
});
