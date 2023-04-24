// import React from 'react';
// import { makeStyles, createTheme } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import IconButton from '@material-ui/core/IconButton';

// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

// // const theme = createTheme({
// //     palette: {
// //         primary: "#3a5a40",
// //         secondary: "#a3b18a"

// //     }
// // })

// const useStyles = makeStyles((theme) => ({
//   footerNav: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginBottom: theme.spacing(1)
//   },
//   footerLink: {
//     marginLeft: theme.spacing(3),
//     marginRight: theme.spacing(3),
//     marginBottom: theme.spacing(2),
//   },

// }));

// export default function Footer(props) {
//   const classes = useStyles();

//   const content = {
//     'copy': `© Blank Digital Design ${new Date().getFullYear()} All rights reserved.`,
//     'link1': 'About Us',
//     'link2': 'Contact Us',
//     'link3': 'Services',
//     'link4': 'Booking',
//     'link5': "Pest Dictionary",
//     ...props.content
//   };

//   return (
//     <footer className='classes.footerStyling'>
//       <Container maxWidth="lg" className='footer-content'>
//         <Box py={6} textAlign="center">
//           <Box component="nav" className={classes.footerNav}>
//             <Link href="/contact" variant="body1" color="black" className={classes.footerLink}>{content['link1']}</Link>
//             <Link href="/about-us" variant="body1" color="secondary" className={classes.footerLink}>{content['link2']}</Link>
//             <Link href="/booking" variant="body1" color="secondary" className={classes.footerLink}>{content['link3']}</Link>
//             <Link href="/pest-dictionary" variant="body1" color="secondary" className={classes.footerLink}>{content['link4']}</Link>
//           </Box>
//           <Box mb={3} id="footer-copy">
//             <IconButton color="textSecondary" aria-label="Twitter">
//               <TwitterIcon />
//             </IconButton>
//             <IconButton color="textSecondary" aria-label="Facebook">
//               <FacebookIcon />
//             </IconButton>
//             <IconButton color="textSecondary" aria-label="Instagram">
//               <InstagramIcon />
//             </IconButton>
//             <IconButton color="textSecondary" aria-label="LinkedIn">
//               <LinkedInIcon />
//             </IconButton>
//           </Box>
//           <Typography id="footer-copy" color="textSecondary" component="p" variant="body2" gutterBottom={false} className={classes.copy}>{content['copy']}</Typography>
//         </Box>
//       </Container>
//     </footer>
//   );
// }
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { footerArray } from "../../constants";
import "./footer.css";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { lime } from "@mui/material/colors";

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
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const primary = lime[100];

  const content = {
    copy: `© Blank Digital Design ${new Date().getFullYear()} All rights reserved.`,
    link1: "About Us",
    link2: "Contact Us",
    link3: "Services",
    link4: "Booking",
    link5: "Pest Dictionary",
    ...props.content,
  };

  return (
    <>
      {/* <footer>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>
      </footer> */}

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="box">
            <Box py={1} textAlign="center" className="link-box">
              <Box component="nav" className={classes.footerNav}>
                <Link
                  href="/contact"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link1"]}
                </Link>
                <Link
                  href="/about-us"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link2"]}
                </Link>
                <Link
                  href="/booking"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link3"]}
                </Link>
                <Link
                  href="/pest-dictionary"
                  variant="body1"
                  color="primary"
                  className={classes.footerLink}
                >
                  {content["link4"]}
                </Link>
              </Box>
              <Box mb={3} id="footer-copy">
                <IconButton color="primary" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="primary" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Typography
                id="footer-copy"
                color="primary"
                component="p"
                variant="body2"
                gutterBottom={false}
                className={classes.copy}
              >
                {content["copy"]}
              </Typography>
            </Box>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
