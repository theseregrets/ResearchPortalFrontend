import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FilterProject from './filterProject';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
    marginTop: '5rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 'bolder',
    marginBottom: '1rem',
    marginLeft: '5%',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  bio_color: {
    color: '#ffb300',
  },
  proj_para: {
    // border: '1px solid lightgray',
    margin: '1rem 2rem 1rem 2rem',
    padding: '1rem',
    borderRadius: '1rem',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  accord: {
    marginBottom: '0.5rem',
    borderRadius: '4px',
    borderTop: 'none',
    transition: 'box-shadow 0.5s ease',
    '&::before': {
      display: 'none',
    },
    '&:hover': {
      boxShadow: theme.shadows[7],
    },
  },
  clip: {
    position: 'fixed',
    backgroundColor: ' rgb(91, 117, 202)',
    width: '100%',
    height: '100vh',
    clipPath: 'circle(100% at 100% -40%)',
    top: 0,
    zIndex: -2,
  },
  rings: {
    position: 'fixed',
    backgroundColor: 'rgb(91, 117, 202)',
    width: '100%',
    height: '85vh',
    clipPath: 'circle(40% at 0% 20%)',
    zIndex: '-2',
  },
  accord_sum: {
    backgroundColor: 'rgba(217, 243, 247, 0.05)',
  },
  project_chip: {
    marginRight: '3px',
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    // <TableContainer component={Paper} className="w-75 ml-auto mr-auto">
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell align="center">Project Name</TableCell>
    //         <TableCell align="center">Faculty Name</TableCell>
    //         <TableCell align="center">Department</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {projects.map((row) => (
    //         <TableRow key={row.name}>
    //           <TableCell align="center" component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="center">{row.faculty}</TableCell>
    //           <TableCell align="center">{row.dept}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <div className={classes.root}>
      <div className={classes.clip} />
      {/* <div className={classes.rings}>
        <div className={classes.innerRing} />
      </div> */}
      <FilterProject />
      {/* <Accordion className={classes.accord} elevation={3}>
        <AccordionSummary className={classes.accord_sum}>
          <div className={classes.column}>
            <Typography variant="h5">Project Name</Typography>
          </div>
          <div className={classes.column}>
            <Typography variant="h5">Prof Name</Typography>
          </div>
          <div className={classes.column}>
            <Typography variant="h5">Department</Typography>
          </div>
        </AccordionSummary>
      </Accordion> */}
      <Accordion defaultExpanded className={classes.accord} elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accord_sum}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Project Name</Typography>
            <Chip
              label="AI & ML "
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="BlockChain"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="web development"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Professor Name</Typography>
          </div>
          <div className={classes.column}>
            <Chip label="computer Science" color="primary" />
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div>
            <Typography className={classes.secondaryHeading}>
              Project Heading
            </Typography>
            <Divider />
            <div className={classes.proj_para}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                reprehenderit possimus maxime laborum laboriosam eius laboreaut,
                vero ad aperiam est officiis, nostrum nihil minus accusamus,
                commodi ipsum cumque!
              </Typography>
            </div>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="medium" variant="contained" color="primary">
            Apply
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion className={classes.accord} elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accord_sum}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Project Name</Typography>
            <Chip
              label="AI & ML "
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="BlockChain"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="web development"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Professor Name</Typography>
          </div>
          <div className={classes.column}>
            <Chip label="electronic & communication" color="primary" />
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div>
            <Typography className={classes.secondaryHeading}>
              Project Heading
            </Typography>
            <Divider />
            <div className={classes.proj_para}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                reprehenderit possimus maxime laborum laboriosam eius laboreaut,
                vero ad aperiam est officiis, nostrum nihil minus accusamus,
                commodi ipsum cumque!
              </Typography>
            </div>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="medium" variant="contained" color="primary">
            Apply
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion className={classes.accord} elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accord_sum}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Project Name</Typography>
            <Chip
              label="AI & ML "
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="BlockChain"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="web development"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Professor Name</Typography>
          </div>
          <div className={classes.column}>
            <Chip label="biotech" color="primary" />
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div>
            <Typography className={classes.secondaryHeading}>
              Project Heading
            </Typography>
            <Divider />
            <div className={classes.proj_para}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                reprehenderit possimus maxime laborum laboriosam eius laboreaut,
                vero ad aperiam est officiis, nostrum nihil minus accusamus,
                commodi ipsum cumque!
              </Typography>
            </div>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="medium" variant="contained" color="primary">
            Apply
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion className={classes.accord} elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accord_sum}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Project Name</Typography>
            <Chip
              label="AI & ML "
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="BlockChain"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="web development"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Professor Name</Typography>
          </div>
          <div className={classes.column}>
            <Chip label="electrical" color="primary" />
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div>
            <Typography className={classes.secondaryHeading}>
              Project Heading
            </Typography>
            <Divider />
            <div className={classes.proj_para}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                reprehenderit possimus maxime laborum laboriosam eius laboreaut,
                vero ad aperiam est officiis, nostrum nihil minus accusamus,
                commodi ipsum cumque!
              </Typography>
            </div>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="medium" variant="contained" color="primary">
            Apply
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion className={classes.accord} elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accord_sum}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Project Name</Typography>
            <Chip
              label="AI & ML "
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="BlockChain"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="web development"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Professor Name</Typography>
          </div>
          <div className={classes.column}>
            <Chip label="metallurgy" color="primary" />
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div>
            <Typography className={classes.secondaryHeading}>
              Project Heading
            </Typography>
            <Divider />
            <div className={classes.proj_para}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                reprehenderit possimus maxime laborum laboriosam eius laboreaut,
                vero ad aperiam est officiis, nostrum nihil minus accusamus,
                commodi ipsum cumque!
              </Typography>
            </div>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="medium" variant="contained" color="primary">
            Apply
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion className={classes.accord} elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accord_sum}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Project Name</Typography>
            <Chip
              label="AI & ML "
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="BlockChain"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
            <Chip
              label="web development"
              color="primary"
              variant="outlined"
              size="small"
              className={classes.project_chip}
            />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Professor Name</Typography>
          </div>
          <div className={classes.column}>
            <Chip label="civil" color="primary" />
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div>
            <Typography className={classes.secondaryHeading}>
              Project Heading
            </Typography>
            <Divider />
            <div className={classes.proj_para}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                reprehenderit possimus maxime laborum laboriosam eius laboreaut,
                vero ad aperiam est officiis, nostrum nihil minus accusamus,
                commodi ipsum cumque!
              </Typography>
            </div>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="medium" variant="contained" color="primary">
            Apply
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
