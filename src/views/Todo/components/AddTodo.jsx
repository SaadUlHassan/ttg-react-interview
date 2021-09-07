import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { AddCircle } from '@material-ui/icons';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

const AddTodo = ({ onAddTask }) => {
  const classes = useStyles();

  const initialValues = {
    addTaskInput: ''
  }

  return (
    <div className={classes.root}>
      <Formik initialValues={initialValues}
        validationSchema={yup.object().shape({
          addTaskInput: yup.string().required("This field is required."),
        })}
        onSubmit={(values) => {
          console.log(values)
          onAddTask({ id: Math.floor(Math.random() * Date.now()), title: values?.addTaskInput })
        }}>
        {({ errors, handleChange, touched }) => (
          <Form>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TextField error={errors.addTaskInput && touched.addTaskInput}
              helperText={
                errors.addTaskInput && touched.addTaskInput
                  ? errors.addTaskInput
                  : null
              } id="addTaskInput" label="Title" variant="outlined" size='small' onChange={handleChange} autoFocus={true} />
            <Button variant="contained" type='submit' color='primary'>
              <AddCircle/>
            </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTodo;
