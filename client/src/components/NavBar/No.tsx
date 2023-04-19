import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 'auto',
    maxWidth: 600,
  },
  media: {
    width: 150,
  },
  content: {
    flex: '1 0 auto',
  },
  updateButton: {
    marginRight: theme.spacing(2),
  },
}));

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        alt="Profile image"
        image=""
        title="Profile image"
      />
      <CardContent className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
            name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="textSecondary" component="p">
              designation
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Email: email
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Date of Birth: dob
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Gender: gender
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary" className={classes.updateButton} >
                Update
              </Button>
              <Button variant="contained" color="secondary" >
                Delete
              </Button>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
