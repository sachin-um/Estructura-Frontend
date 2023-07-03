import { AppBar, Container, Toolbar } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let pages = [
  { id: 0, title: "Estructura", link: "/" },
  { id: 1, title: "Sign In", link: "/SignIn" },
  { id: 2, title: "SignUp", link: "/SignUp" },
  { id: 3, title: "Forgot", link: "/ForgotPassword" },
];

function TopBar(props) {
  const title = props.title
    ? props.title
    : "Estructura: Creating Homes; Connecting Experts";

  // TODO: Add Logo Properly
  // TODO: Create Sections for links(Home,Professionals etc) and User stuff(Login,Logout etc..)
  // TODO: Add Search Bar?
  // TODO: Style where necessary
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <AppBar position='sticky'>
        <Container>
          <Toolbar sx={{ display: { flex: "flex", gap: 10 } }}>
            {pages.map((page) => (
              <Link key={page.id} to={page.link}>
                {page.title}
              </Link>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default TopBar;

export { pages };
