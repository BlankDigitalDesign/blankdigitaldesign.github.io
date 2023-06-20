import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { socialLinks } from "../../constants";
import "./footer.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { lime } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textDecoration: "none",
    color: "black",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  const content = {
    copy: `© Williamson Pest Solutions/Blank Digital Design ${new Date().getFullYear()} All rights reserved.`,
    link1: "HOME",
    link2: "BEHIND THE BRAND",
    link3: "BOOKING",
    link4: "PEST DICTIONARY",
    link5: "PRIVACY POLICY",
    ...props.content,
  };

  return (
    <>
      <footer>
        <div>
          <div className="box">
            <Box py={1} textAlign="center" className="link-box">
              <Box component="nav" className={classes.footerNav}>
                <a
                  href="/"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link1"]}
                </a>
                <a
                  href="/behind-the-brand"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link2"]}
                </a>
                <a
                  href="/booking"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link3"]}
                </a>
                <a
                  href="/pest-dictionary"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link4"]}
                </a>
                <a
                  href="/privacy"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link5"]}
                </a>
              </Box>
              <Box mb={3} id="footer-copy">
                <a className="social-links" href={socialLinks.facebook}>
                  <FacebookIcon />
                </a>{" "}
                <a className="social-links" href={socialLinks.yelp}>
                  <FontAwesomeIcon icon={faYelp} />
                </a>
                <p>{content["copy"]}</p>
              </Box>
            </Box>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
