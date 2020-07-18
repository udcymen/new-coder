import React, { useState, useEffect } from 'react';

import { createStyles, Theme, makeStyles, fade } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';

import { Question } from '../../common/type';

interface Column {
    id: string;
    label: string;
}

const ItemsCountPerPage = [10, 25, 50, 100];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            flexGrow: 1,
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputInput: {
            padding: theme.spacing(1, 6),
            transition: theme.transitions.create('width'),
        },
    }),
);

const QuestionHome: React.FC<{}> = () => {
    const classes = useStyles();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [activePage, setActivePage] = useState<number>(0);
    const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
    const [itemsCountPerPage, setItemsCountPerPage] = useState<number>(10);
    const columns: Column[] = [
        {
            id: "id",
            label: "ID"
        },
        {
            id: "title",
            label: "Title"
        }
    ];

    const fetchQuestions = () => {

        let requestUrl = `/api/questions`

        axios.get(requestUrl)
            .then(res => {
                setQuestions(res.data.content);
                setTotalItemsCount(res.data.totalElements);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        setActivePage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemsCountPerPage(+event.target.value);
    }

    return (
        <Paper>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    fullWidth
                    color='secondary'
                    aria-label="Search Question Input"
                    placeholder="Search question by title, description or tag"
                    classes={{
                        input: classes.inputInput,
                    }}
                />
            </div>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questions.map((question: Question) => {
                            return (
                                <TableRow key={question.id}>
                                    {columns.map((column) => {
                                        return (
                                            <TableCell key={column.id}>
                                                {question[column.id]}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={ItemsCountPerPage}
                component="div"
                count={totalItemsCount}
                rowsPerPage={itemsCountPerPage}
                page={activePage}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default QuestionHome;