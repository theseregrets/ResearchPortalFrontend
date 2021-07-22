import { makeStyles } from '@material-ui/core';
import ProjectCard from './cards';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Posts;
