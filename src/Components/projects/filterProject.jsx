import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
  Typography,
  Chip,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FilterListIcon from '@material-ui/icons/FilterList';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/styles';

const department = [
  'computer Science',
  'electronic and communication',
  'electrical',
  'civil',
  'metallurgy',
  'Biotechnology',
  'computer Science',
  'electronic and communication',
  'electrical',
  'civil',
  'metallurgy',
  'Biotechnology',
];
const prof = [
  'Dr Xyz',
  'Dr ABC',
  'Dr ARCDEG',
  'Dr PQRSTUV',
  'Dr Xyz',
  'Dr ABC',
  'Dr ARCDEG',
  'Dr PQRSTUV',
];
const projTag = [
  'Artificial Intelligence',
  'Machine learning',
  'Blockchain',
  'Web Development',
  'Ethical hacking',
  'Data Science',
  'ReactJS',
  'C++',
];
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '3rem',
  },
  icon: {
    transform: 'translateY(-8px)',
  },
  accord: {
    // backgroundColor: 'transparent',
  },
  accord_detail: {
    boxShadow: '0px 1px 14px 0px rgba(0,0,0,0.12)',
    // width: '500px',
    BackgroundColor: 'white',
  },
}));

export default function FilterProject() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {/* <div> */}
      <Accordion elevation={0} className={classes.accord}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Icon>
            <FilterListIcon className={classes.icon} />
          </Icon>
          <Typography> Filter</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accord_detail}>
          <div>
            <Typography>Department :</Typography>
            {department.map((ele) => (
              <Chip
                label={ele}
                style={{ marginRight: '3px', marginBottom: '5px' }}
                // variant="outlined"
                size="small"
                onClick={() => {}}
                onDelete={() => {}}
                deleteIcon={<DoneIcon />}
              />
            ))}
          </div>
          <div>
            <Typography>Professor :</Typography>
            {prof.map((ele) => (
              <Chip
                label={ele}
                style={{ marginRight: '3px', marginBottom: '5px' }}
                // variant="outlined"
                size="small"
                onClick={() => {}}
                onDelete={() => {}}
                deleteIcon={<DoneIcon />}
              />
            ))}
          </div>
          <div>
            <Typography>Project Tag :</Typography>
            {projTag.map((ele) => (
              <Chip
                label={ele}
                style={{ marginRight: '3px', marginBottom: '5px' }}
                // variant="outlined"
                size="small"
                onClick={() => {}}
                onDelete={() => {}}
                deleteIcon={<DoneIcon />}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      {/* </div> */}
      {/* <div>
        <Accordion elevation={0} className={classes.accord}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Icon>
              <PersonIcon className={classes.icon} />
            </Icon>
            <Typography> Professor</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accord_detail}>
            gdsdsgd
          </AccordionDetails>
        </Accordion>
      </div> */}
      {/* <div>
        <Accordion elevation={0} className={classes.accord}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Icon>
              <ApartmentIcon className={classes.icon} />
            </Icon>
            <Typography> Department</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accord_detail}>
            gdsdsgd
          </AccordionDetails>
        </Accordion>
      </div> */}
    </div>
  );
}
