import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";

interface UserData {
    id: number,
    code: string
    name: string,
    description: string,
    appUserId: string,
}

const AllCompetences = () => {
    const { GetAllCompetenceA } = useActions();
    const [ isRedirect, setIsRedirect ] = useState(false);
    const { allCompetence } = useTypedSelector((store) => store.CompetenceReducer);

    useEffect(() => {
        GetAllCompetenceA();
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Code</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allCompetence.map((user: UserData) => (
                        <TableRow key={user.id}>
                            <TableCell align="center">{user.code}</TableCell>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.description}</TableCell>
                            {/* <TableCell align="center"><Button onClick={()=>DeleteUser(user.id, user.email)}>Delete</Button></TableCell>
                            <TableCell align="center"><Button onClick={()=>EditUserAc(user)}></Button></TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AllCompetences;