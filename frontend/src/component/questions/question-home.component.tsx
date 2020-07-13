import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const GET_QUESTIONS_URL = "/api/questions"

const QuestionHome: React.FC<{}> = () => {
    const classes = useStyles();

    axios.get(GET_QUESTIONS_URL)
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        });

    return (
        <pre>{}</pre>
    );
}

export default QuestionHome;