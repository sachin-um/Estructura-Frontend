import API from "../../lib/API";

function AdminDashboard() {
  return (
    <>
      <h1>Admin Dashboard</h1>
      <button
        onClick={(e) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToekn");
          API.post("/auth/authenticate", {
            email: "admin@gmail.com",
            password: "password",
          })
            .then((res) => {
              alert(JSON.stringify(res));
              if (res.status === 200) {
                localStorage.setItem("accessToken", res.data.access_token);
                localStorage.setItem("refreshToken", res.data.refresh_token);
              }
            })
            .catch((err) => alert(JSON.stringify(err)));
        }}
      >
        Authenticate
      </button>
      <button
        onClick={(e) =>
          API.get("/admin")
            .then((res) => alert(JSON.stringify(res)))
            .catch((err) => alert(JSON.stringify(err)))
        }
      >
        Admin
      </button>
    </>
  );
}

export default AdminDashboard;
