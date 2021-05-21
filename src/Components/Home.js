import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { getUser } from "../redux/index"
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

const mapStateToProps = state => {
  return {
    newTitle: state.users,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

function Home(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getUser()
  }, [])
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
        <Box item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.newTitle}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </div >
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
