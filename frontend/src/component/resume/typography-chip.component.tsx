import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

interface Props {
    text: string;
    list: string[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chip: {
            margin: theme.spacing(0.5, 0.5),
        },
    }),
);

const TypographyChip: React.FC<Props> = ({ text, list }) => {
    const classes = useStyles();

    return (
        <Typography>
            {text}
            {list.map((item: string) => {
                return (
                    <Chip key={item} variant="outlined" color="primary" className={classes.chip} label={item} />
                );
            })}
        </Typography>
    );
}

export default TypographyChip;