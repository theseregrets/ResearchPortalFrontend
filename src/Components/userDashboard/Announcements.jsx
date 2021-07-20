import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnnouncementCard from './AnnouncementCard';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flex: '1',
  },
  title: {
    marginTop: '50px',
    textAlign: 'center',
    padding: '10px',
  },
}));

const data = {
  img: 'https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg',
  title: 'Registrations will start from 10 August and will close on 20 August',
  project:
    'Development of experimental rover and investigation of mobility and approaches for local and global motion planning on uneven terrain',
  faculty: 'Dr. K. Kurien Issac',
  dept: 'Aerospace engineering',
  time: '10:10 AM',
};

export default function Announcements() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Announcements</h2>
      <AnnouncementCard
        img={data.img}
        title={data.title}
        project={data.project}
        faculty={data.faculty}
        dept={data.dept}
        time={data.time}
      />
      <AnnouncementCard
        img={data.img}
        title={data.title}
        project={data.project}
        faculty={data.faculty}
        dept={data.dept}
        time={data.time}
      />
      <AnnouncementCard
        img={data.img}
        title={data.title}
        project={data.project}
        faculty={data.faculty}
        dept={data.dept}
        time={data.time}
      />
    </div>
  );
}
