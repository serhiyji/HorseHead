import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Backdrop, Fade } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface UserData {
    id: number,
    code: string
    name: string,
    description: string,
    appUserId: string,
}

const AllCompetences = () => {
    const { GetAllCompetenceA, DeleteCompetenceA, SetSelectedCompetence } = useActions();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isRedirect, setIsRedirect] = useState(false);
    const { allCompetence } = useTypedSelector((store) => store.CompetenceReducer);

    const handleOpenModal = (id: number) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        if (selectedId !== null) {
            DeleteCompetenceA(selectedId);
            setIsModalOpen(false);
        }
    };

    const handleUpdate = (competence: UserData) => {
        SetSelectedCompetence(competence);
        setIsRedirect(true);
    };

    useEffect(() => {
        GetAllCompetenceA();
    }, []);

    if (isRedirect) {
        return <Navigate to="/dashboard/competence/update" />;
    } else {
        return (
            <>
                <Link to="/dashboard/competence/create" style={{ textDecoration: "none" }}>
                    <Button>Створити компетенцію</Button>
                </Link>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Code</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Delete</TableCell>
                                <TableCell align="center">Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allCompetence.map((competence: UserData) => (
                                <TableRow key={competence.id}>
                                    <TableCell align="center">{competence.code}</TableCell>
                                    <TableCell align="center">{competence.name}</TableCell>
                                    <TableCell align="center">{competence.description}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => handleOpenModal(competence.id)}>Delete</Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => handleUpdate(competence)}>Update</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={isModalOpen}>
                    <div style={{ backgroundColor: "#fff", border: "2px solid #000", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)", padding: 2, maxWidth: 400, margin: "auto", marginTop: "20vh", textAlign: "center" }}>

                            <h2 id="transition-modal-title">Увага всі звязки з Освітніми програмами буде розірвано. Підтвердити видалення</h2>
                            <Button variant="contained" onClick={handleDelete} sx={{ mr: 1, color: "white", backgroundColor: "black" }}>Yes</Button>
                            <Button variant="contained" onClick={handleCloseModal} sx={{ color: "white", backgroundColor: "black" }}>No</Button>

                        </div>
                    </Fade>
                </Modal>
            </>
        );
    }
}

export default AllCompetences;
