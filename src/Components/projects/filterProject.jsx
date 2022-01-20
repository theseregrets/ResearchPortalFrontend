/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Icon,
  Typography,
  Chip,
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/styles';
import { Branches } from '../../Data/branch';

const department = Branches.map((item) => item.value);

const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3rem',
  },
  icon: {
    transform: 'translateY(-8px)',
  },
  accord: {
    // backgroundColor: 'transparent',
    // margin: '1rem auto',
  },
  btn: {
    width: 'fit-content',
    marginBottom: '1rem',
  },
  accord_detail: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    // width: '500px',
    BackgroundColor: 'white',

    '& > div': {
      flex: '1 1 0',
    },
  },
  chips: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',

    '& > div': {
      flex: '1 1 0',
    },
  },
}));

export default function FilterProject(props) {
  const classes = useStyle();

  const { allProjects } = props;

  const [filterParameter, setFilterParameter] = useState({
    dept: [],
    prof: [],
    tag: [],
  });

  function addFP(label, fr) {
    if (fr === 'dept') {
      if (!filterParameter.dept.includes(label)) {
        setFilterParameter({
          dept: [...filterParameter.dept, label],
          prof: [...filterParameter.prof],
          tag: [...filterParameter.tag],
        });
      }
    } else if (fr === 'prof') {
      if (!filterParameter.prof.includes(label)) {
        setFilterParameter({
          dept: [...filterParameter.dept],
          prof: [...filterParameter.prof, label],
          tag: [...filterParameter.tag],
        });
      }
    } else if (fr === 'tag') {
      if (!filterParameter.tag.includes(label)) {
        setFilterParameter({
          dept: [...filterParameter.dept],
          prof: [...filterParameter.prof],
          tag: [...filterParameter.tag, label],
        });
      }
    }
  }

  function filter() {
    let filteredProjects = allProjects;
    let temp = [];

    if (
      filterParameter.dept.length !== 0 ||
      filterParameter.prof.length !== 0 ||
      filterParameter.tag.length !== 0
    ) {
      if (filterParameter.dept.length !== 0) {
        filteredProjects.forEach((element) => {
          filterParameter.dept.forEach((p) => {
            if (element.teacher.branch === p) {
              temp.push(element);
            }
          });
        });

        filteredProjects = temp;
        temp = [];
      }

      if (filterParameter.prof.length !== 0) {
        filteredProjects.forEach((element) => {
          filterParameter.prof.forEach((p) => {
            if (element.prof === p) {
              temp.push(element);
            }
          });
        });

        filteredProjects = temp;
        temp = [];
      }

      if (filterParameter.tag.length !== 0) {
        filteredProjects.forEach((element) => {
          element.tags.forEach((t) => {
            filterParameter.tag.forEach((p) => {
              if (t === p && !temp.includes(element)) {
                temp.push(element);
              }
            });
          });
        });

        filteredProjects = temp;
      }

      props.setProject(filteredProjects);
    } else {
      props.setProject(allProjects);
    }
  }

  function handleDelete(label, fr) {
    if (fr === 'dept') {
      const p = filterParameter.dept.filter((d) => d !== label);
      setFilterParameter({
        dept: p,
        prof: [...filterParameter.prof],
        tag: [...filterParameter.tag],
      });
    } else if (fr === 'prof') {
      const p = filterParameter.prof.filter((d) => d !== label);
      setFilterParameter({
        dept: [...filterParameter.dept],
        prof: p,
        tag: [...filterParameter.tag],
      });
    } else if (fr === 'tag') {
      const p = filterParameter.tag.filter((d) => d !== label);
      setFilterParameter({
        dept: [...filterParameter.dept],
        prof: [...filterParameter.prof],
        tag: p,
      });
    }
  }

  useEffect(() => {
    filter();
  }, [filterParameter]);

  return (
    <div className={classes.root}>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={() => {
          setFilterParameter({ dept: [], prof: [], tag: [] });
        }}
      >
        <RestoreIcon />
        Reset
      </Button>

      <Accordion elevation={3} className={classes.accord}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Icon>
            <FilterListIcon className={classes.icon} />
          </Icon>
          <Typography>Filter</Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.accord_detail}>
          <div>
            <Typography>Department :</Typography>
            {department.map((ele) => (
              <Chip
                key={ele}
                label={ele}
                style={{ marginRight: '3px', marginBottom: '5px' }}
                size="small"
                onClick={() => {
                  addFP(ele, 'dept');
                }}
              />
            ))}
          </div>

          {/* <div>
            <Typography>Professor :</Typography>
            {prof.map((ele) => (
              <Chip
                label={ele}
                style={{ marginRight: '3px', marginBottom: '5px' }}
                size="small"
                onClick={() => {
                  addFP(ele, 'prof');
                }}
              />
            ))}
          </div> */}

          {/* <div>
            <Typography>Project Tag :</Typography>
            {projTag.map((ele) => (
              <Chip
                label={ele}
                style={{ marginRight: '3px', marginBottom: '5px' }}
                size="small"
                onClick={() => {
                  addFP(ele, 'tag');
                }}
              />
            ))}
          </div> */}
        </AccordionDetails>
      </Accordion>

      <div className={classes.chips}>
        <div>
          {filterParameter.dept.map((ele) => (
            <Chip
              key={ele}
              label={ele}
              style={{ marginRight: '3px', marginBottom: '5px' }}
              // variant="outlined"
              size="small"
              color="primary"
              onClick={() => {}}
              onDelete={() => {
                handleDelete(ele, 'dept');
              }}
            />
          ))}
        </div>

        <div>
          {filterParameter.prof.map((ele) => (
            <Chip
              key={ele}
              label={ele}
              style={{ marginRight: '3px', marginBottom: '5px' }}
              // variant="outlined"
              size="small"
              color="primary"
              onClick={() => {}}
              onDelete={() => {
                handleDelete(ele, 'prof');
              }}
            />
          ))}
        </div>

        <div>
          {filterParameter.tag.map((ele) => (
            <Chip
              key={ele}
              label={ele}
              style={{ marginRight: '3px', marginBottom: '5px' }}
              // variant="outlined"
              size="small"
              color="primary"
              onClick={() => {}}
              onDelete={() => {
                handleDelete(ele, 'tag');
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
