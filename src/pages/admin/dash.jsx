import { useEffect, useState } from "react";
import API from "../../lib/API";

function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // API.post("auth/authenticate", {
    //   email: "admin@gmail.com",
    //   password: "password",
    // }).then((res) => {
    //   if (res.status === 200) {
    //     console.log(res.data);
    //     localStorage.setItem("accessToken", res.data.access_token);
    //     localStorage.setItem("refreshToken", res.data.refresh_token);
    //     API.defaults.headers.common[
    //       "Authorization"
    //     ] = `Bearer ${res.data.access_token}`;
    //     API.get("/admin").then((res) => {
    //       console.log(res.data);
    //     });
    //   }
    //   return res.data;
    // });
    // console.log("wtf");
    fetch("http://localhost:8080/api/v1/auth/authenticate", {
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
        fetch("http://localhost:8080/api/v1/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.access_token}`,
          },
        }).then((res) => res.json());
      });
    // .then((res) => {
    //   if (res.status === 200) {
    //     console.log(res.data);
    //     localStorage.setItem("accessToken", res.data.access_token);
    //     localStorage.setItem("refreshToken", res.data.refresh_token);
    //     API.defaults.headers.common[
    //       "Authorization"
    //     ] = `Bearer ${res.data.access_token}`;
    //     API.get("/admin").then((res) => {
    //       console.log(res.data);
    //     });
    //   }
    //   return res.data;
    // });
  }, []);

  return <></>;
}

export default AdminDashboard;
