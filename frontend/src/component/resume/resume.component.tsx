import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TypographyChip from './typography-chip.component';
import Section from './section.component';
import ListItemText from '@material-ui/core/ListItemText';

const educationClasses: string[] = [
    "Advanced Software Engineering",
    "Advanced Web Development",
    "Web Application Security",
    "Computer Network",
    "Database Systems",
    "Operating System",
    "Data Structures",
    "Introduction to Artificail Intelligent",
    "Machine Learning",
    "Machine Learning",
    "Data Mining"
]

const programmingLanguagues: string[] = [
    "ASP.Net",
    "Python",
    "Java",
    "Javascript",
    "Typescript",
]

const databases: string[] = [
    "Mongo DB",
    "PostgreSQL",
    "MySQL",
]

const webTech: string[] = [
    "React",
    "Node.js",
    "jQuery",
    "Twitter Bootstrap",
    "HTML5",
    "CSS3",
    "XML",
    "AJAX",
    "JSON",
    "Docker",
    "Nginx",
    "Redux",
    "Spring Boot",
    "Swagger",
]

const frameworks: string[] = [
    "Angular",
    "Team Foundation Server"
]

const conveyanceTech: string[] = [
    "ASP.NET Core",
    "Azure Cosmos",
    "Angular",
    "Typescript",
    "Twitter Bootstrap",
    "IIS Server",
]

const newCoderTech: string[] = [
    "React",
    "Typescript",
    "Nginx",
    "Spring Boot",
    "Swagger",
    "Docker",
    "Linux",
    "AWS",
    "PosgreSQL",
    "Open Source",
]

const redditTech: string[] = [
    "Angular",
    "Firebase",
    "Typescript",
    "Open Source",
]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Typography: {
            margin: theme.spacing(0.5, 0),
        },
    }),
);

const Resume: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Section title={"Education"}>
                    <Grid item xs={12}>
                        <Typography variant={"h6"} className={classes.Typography}>University of Delaware</Typography>
                        <Typography className={classes.Typography}>Award: Dean’s list from Fall 2017 to May 2020</Typography>
                        <Typography className={classes.Typography}>Certification: AWS Solutions Architect Associate</Typography>
                        <TypographyChip text={"Relevant Course Work: "} list={educationClasses}></TypographyChip>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>Sep 2016 - May 2020</Typography>
                    </Grid>
                </Section>
                <Section title={"Skill"}>
                    <Grid item>
                        <TypographyChip text={"Programming Languages: "} list={programmingLanguagues}></TypographyChip>
                        <TypographyChip text={"Databases: "} list={databases}></TypographyChip>
                        <TypographyChip text={"Web Technologies: "} list={webTech}></TypographyChip>
                        <TypographyChip text={"Frameworks: "} list={frameworks}></TypographyChip>
                    </Grid>
                </Section>
                <Section title={"Work Experience"}>
                    <Grid item xs={12}>
                        <Typography variant={"h6"} className={classes.Typography}>SQL/JavaScript Developer Intern – Siemens Healthineers</Typography>
                        <Typography className={classes.Typography}>
                            Design, develop, and implement customizations and reports using .NET (C#), JavaScript,
                            Microsoft SQL Server Reporting Services (SSRS), and SQL Server Analysis Services (SSAS).
                        </Typography>
                        <Typography className={classes.Typography}>Design, develop, cooperate with multiple client-side web extensions for TFS customizations.</Typography>
                        <Typography className={classes.Typography}>Developed TFS web extensions with jQuery, Bootstrap and built-in RESTful API</Typography>
                        <Typography className={classes.Typography}>Integrate completed team-level customizations and reports into TFS.</Typography>
                        <Typography className={classes.Typography}>Participate in Agile Scrum meeting daily to accomplish product backlog items.</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>January 2019 - May 2020</Typography>
                    </Grid>
                </Section>
                <Section title={"Project"}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={"h6"} className={classes.Typography}>Conveyance</Typography>
                            <TypographyChip text={"Technologies: "} list={conveyanceTech}></TypographyChip>
                            <ul>
                                <li>
                                    <ListItemText primary="Build a three-tier full-stack web application to track monthly report for employees and managers site-wide." />
                                </li>
                                <li>
                                    <ListItemText primary="Write end to end unit tests and with MSTest for service and controller." />
                                </li>
                                <li>
                                    <ListItemText primary="Integrate user with Windows Credential within organization." />
                                </li>
                                <li>
                                    <ListItemText primary="Manage server IIS test system and deployment on Widnows Server." />
                                </li>
                                <li>
                                    <ListItemText primary="Integrated with Microsoft OpenXML to generate multiple format reports." />
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={"h6"} className={classes.Typography}>New Coder</Typography>
                            <TypographyChip text={"Technologies: "} list={newCoderTech}></TypographyChip>
                            <ul>
                                <li>
                                    <ListItemText primary="Build a three-tier full-stack web application to track monthly report for employees and managers site-wide." />
                                </li>
                                <li>
                                    <ListItemText primary="Write end to end unit tests and with MSTest for service and controller." />
                                </li>
                                <li>
                                    <ListItemText primary="Integrate user with Windows Credential within organization." />
                                </li>
                                <li>
                                    <ListItemText primary="Manage server IIS test system and deployment on Widnows Server." />
                                </li>
                                <li>
                                    <ListItemText primary="Integrated with Microsoft OpenXML to generate multiple format reports." />
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={"h6"} className={classes.Typography}>DIY Reddit</Typography>
                            <TypographyChip text={"Technologies: "} list={redditTech}></TypographyChip>
                            <ul>
                                <li>
                                    <ListItemText primary="Built a single page app which user can post, vote, comment with according models, components and services." />
                                </li>
                                <li>
                                    <ListItemText primary="Built reactive forms for users to create account, post and comment." />
                                </li>
                                <li>
                                    <ListItemText primary="Manage authenticate user through google sign in and email sign in." />
                                </li>
                                <li>
                                    <ListItemText primary="Secured data with firebase database rules using NoSQL database type." />
                                </li>
                                <li>
                                    <ListItemText primary="Introduced moderator/admin role at account level to manage website." />
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Section>
            </Grid>
        </div>
    );
}

export default Resume;