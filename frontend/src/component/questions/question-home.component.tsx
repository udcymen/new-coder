import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Question } from '../../common/type';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const GET_QUESTIONS_URL = "/api/questions";

const QuestionHome: React.FC<{}> = () => {
    const classes = useStyles();
    const [questions, setQuestions] = useState<Question[]>([]);

    const fetchQuestions = () => {
        axios.get(GET_QUESTIONS_URL)
            .then(res => setQuestions(res.data.content))
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <div>
            {questions.map((question: Question) => {
                return (
                    <pre>
                        {JSON.stringify(question)}
                    </pre>
                );
            })}
        </div>
    );
}

export default QuestionHome;