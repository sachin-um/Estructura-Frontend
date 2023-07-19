


import { useState } from "react";
import { AppBar, Container, Toolbar, Link, Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link as RouterLink, useLocation } from "react-router-dom";

const pages = [
  { id: 0, title: "Estructura", link: "/" },
  { id: 1, title: "Sign In", link: "/SignIn" },
  { id: 2, title: "SignUp", link: "/SignUp" },
  { id: 3, title: "Forgot", link: "/ForgotPassword" },
];

function TopBar(props) {
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();

  const title = props.title
    ? props.title
    : "Estructura: Creating Homes; Connecting Experts";

  const handleTabChange = (pageId) => {
    setActiveTab(pageId);
  };

  const isTabActive = (pageId) => {
    return activeTab === pageId || location.pathname === pages[pageId].link;
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <AppBar position="sticky" sx={{ height: 80, backgroundColor: "#fff" }}>
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <RouterLink to="/">
                <img src={"/Logo.png"} alt="Logo" style={{ height: 70 }} />
              </RouterLink>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {pages.map((page) => (
                <Link
                  key={page.id}
                  component={RouterLink}
                  to={page.link}
                  color="inherit"
                  underline={isTabActive(page.id) ? "always" : "none"}
                  onMouseEnter={() => handleTabChange(page.id)}
                  onMouseLeave={() => handleTabChange(null)}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "Arial",
                    color: isTabActive(page.id) ? "#2E8B57" : "#435834",
                    marginLeft: 10,
                    "&:hover": {
                      color: "#2E8B57",
                    },
                    ...(isTabActive(page.id) && {
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      transform: "translateY(-2px)",
                    }),
                  }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default TopBar;
export { pages };

