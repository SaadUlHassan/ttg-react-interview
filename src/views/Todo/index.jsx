import * as React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TodoList from './containers/TodoList';

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Todo = () => {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant='h4' color='primary' align='center'>To Do App</Typography>
        <TodoList />
      </Container>
    </div>
  );
};

export default Todo;
