import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Card, CardActions, CardContent, Button, Modal, Backdrop, Fade } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import IconButton from '@mui/material/IconButton';

interface ProgramLearningOutcomesData {
    id: number,
    code: string
    name: string,
    description: string,
    appUserId: string,
}

const AllProgramLearningOutcomess = () => {
    const { GetAllProgramLearningOutcomesA, GetProgramLearningOutcomesByUserIdA, DeleteProgramLearningOutcomesA, SetSelectedProgramLearningOutcomes } = useActions();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isRedirect, setIsRedirect] = useState(false);
    const { allProgramLearningOutcomes } = useTypedSelector((store) => store.ProgramLearningOutcomesReducer);
    const { user } = useTypedSelector((score) => score.UserReducer);

    const handleOpenModal = (id: number) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        if (selectedId !== null) {
            DeleteProgramLearningOutcomesA(selectedId);
            setIsModalOpen(false);
        }
    };

    const handleUpdate = (programLearningOutcomes: ProgramLearningOutcomesData) => {
        SetSelectedProgramLearningOutcomes(programLearningOutcomes);
        setIsRedirect(true);
    };

    useEffect(() => {
        // GetAllProgramLearningOutcomesA();
        GetProgramLearningOutcomesByUserIdA(user.Id);
    }, []);

    if (isRedirect) {
        return <Navigate to="/dashboard/programlearningoutcomes/update" />;
    } else {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ textAlign: "left", marginBottom: "20px" }}>
                    <Link to="/dashboard/programlearningoutcomes/create" style={{ textDecoration: "none" }}>
                        <Button variant="contained" color="primary">
                            Створити програмний результат навчання
                        </Button>
                    </Link>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {allProgramLearningOutcomes.map((programLearningOutcomes: ProgramLearningOutcomesData) => (
                        <Card key={programLearningOutcomes.id} style={{ margin: "10px", width: "calc(50% - 20px)" }}>
                            <CardContent>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <h3>{programLearningOutcomes.code}</h3>
                                    <div>
                                        <IconButton onClick={() => handleOpenModal(programLearningOutcomes.id)} aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleUpdate(programLearningOutcomes)} aria-label="update">
                                            <UpdateIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                <h3 style={{ marginTop: "1px" }}>{programLearningOutcomes.name}</h3>
                                <p>{programLearningOutcomes.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    closeAfterTransition
                >
                    <Fade in={isModalOpen}>
                        <div style={{ backgroundColor: "#fff", border: "2px solid #000", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)", padding: 20, maxWidth: 400, margin: "auto", marginTop: "20vh", textAlign: "center" }}>
                            <h2 id="transition-modal-title">Увага всі звязки з Програмними результатами навчання буде розірвано. Підтвердити видалення</h2>
                            <div style={{ marginTop: "20px" }}>
                                <Button variant="contained" onClick={handleDelete} style={{ marginRight: "10px", color: "#fff", backgroundColor: "#000" }}>Так</Button>
                                <Button variant="contained" onClick={handleCloseModal} style={{ color: "#fff", backgroundColor: "#000" }}>Ні</Button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default AllProgramLearningOutcomess;
