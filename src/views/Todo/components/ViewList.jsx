import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions'
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography, TablePagination } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {},

        heading: {
            color: 'black'
        }
    })
);

const ViewList = ({ taskList, removeTask }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {taskList && taskList.length ?
                <>
                    <Table>
                        <TableHead style={{ backgroundColor: 'skyblue' }}>
                            <TableRow>
                                <TableCell className={classes.heading}>Id</TableCell>
                                <TableCell className={classes.heading}>Task</TableCell>
                                <TableCell className={classes.heading}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {taskList && taskList.map((task, i) => {
                                return (
                                    <TableRow style={{ backgroundColor: 'linen' }} key={task.id}>
                                        <TableCell className={classes.heading}>{i + 1}</TableCell>
                                        <TableCell className={classes.heading}>{task.title}</TableCell>
                                        <TableCell >
                                            <IconButton size='small' onClick={() => removeTask(task.id)}>
                                                <Delete style={{ color: 'red' }} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </>
                :
                <Typography variant='h6' color='primary' align='center'>Please Add Tasks</Typography>
            }
        </div>
    );
};

export default ViewList;
