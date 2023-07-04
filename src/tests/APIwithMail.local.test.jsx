import { MailSlurp } from "mailslurp-client";
import API from "./API";

const mailslurp = new MailSlurp({
  apiKey: "d68fff126557598f6f0e18229bcd09ae90f70c1445f77f7606f38bc3c83f4e07",
});

const password = "password";

let inbox;
let response;

it("should register a user", async () => {
  inbox = await mailslurp.createInbox();

  response = await API.post("/auth/register", {
    firstname: "TestUser",
    lastname: inbox.emailAddress,
    email: inbox.emailAddress,
    role: "CUSTOMER",
    password: password,
  });

  console.log(response.data);

  expect(response.status).toBe(200);
  expect(response.data.success).toBe(true);
}, 10000);

it("should verify email for the account", async () => {
  const emails = await mailslurp.waitForLatestEmail(inbox.id);

  const verifyLink = emails.body.match(/href=\"(.*)\"/)[1];

  response = await API.get(verifyLink);

  expect(response.status).toBe(200);
  expect(response.data).toBe(
    "Email verified successfully. Now you can login to your account"
  );
}, 10000);

let accessToken;
let refreshToken;

it("should login the user and return tokens", async () => {
  response = await API.post("/auth/authenticate", {
    email: inbox.emailAddress,
    password: password,
  });

  expect(response.status).toBe(200);
  expect(response.data.success).toBe(true);
  expect(response.data.role).toBe("CUSTOMER");
  expect(response.data.access_token).toBeTruthy();
  expect(response.data.refresh_token).toBeTruthy();

  accessToken = response.data.access_token;
  refreshToken = response.data.refresh_token;
});

it("should refresh the access token", async () => {
  API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  response = await API.post("/auth/refresh-token");

  console.log(response.data);

  expect(response.status).toBe(200);
  expect(response.data.access_token).toBeTruthy();
  expect(response.data.refresh_token).toBeTruthy();

  accessToken = response.data.access_token;
  refreshToken = response.data.refresh_token;

  API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
});

it("should access customer controller", async () => {
  const response = await API.get("/customer");

  expect(response.status).toBe(200);
});
