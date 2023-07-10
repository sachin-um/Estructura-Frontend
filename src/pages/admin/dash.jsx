function AdminDashboard() {
  return (
    <>
      <button
        onClick={(e) =>
          localStorage.getItem("accessToken")
            ? fetch("http://localhost:8080/api/v1/admin", {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
              })
                .then((res) => (res.status === 200 ? res.json() : res))
                .then((data) => {
                  if (data.status === 403) throw data;
                  console.log(data);
                })
                .catch((data) => {
                  console.log(data);
                  fetch("http://localhost:8080/api/v1/auth/refresh-token", {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "refreshToken"
                      )}`,
                    },
                  })
                    .then((res) => (res.status === 200 ? res.json() : res))
                    .then((data) => {
                      localStorage.setItem(
                        "accessToken",
                        data.access_token ?? localStorage.getItem("accessToken")
                      );
                      localStorage.setItem(
                        "refreshToken",
                        data.refresh_token ??
                          localStorage.getItem("refreshToken")
                      );
                      console.log(data);
                    });
                })
            : fetch("http://localhost:8080/api/v1/auth/authenticate", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: "admin@gmail.com",
                  password: "password",
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  localStorage.setItem("accessToken", data.access_token);
                  localStorage.setItem("refreshToken", data.refresh_token);
                  console.log(data);
                })
        }
      >
        query
      </button>
      <button onClick={localStorage.clear}>clear</button>
    </>
  );
}

export default AdminDashboard;
