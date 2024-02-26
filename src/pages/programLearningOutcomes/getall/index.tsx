import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Button, Modal, Card, Space, Pagination } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Navigate } from "react-router-dom";

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
    const [currentPage, setCurrentPage] = useState(1);
    const { allProgramLearningOutcomes, pageNumber, pageSize, totalCount, countPages } = useTypedSelector((store) => store.ProgramLearningOutcomesReducer);
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
        GetAllProgramLearningOutcomesA(currentPage, 2, user.Id);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (isRedirect) {
        return <Navigate to="/dashboard/programlearningoutcomes/update" />;
    } else {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ textAlign: "left", marginBottom: "20px" }}>
                    <Link to="/dashboard/programlearningoutcomes/create" style={{ textDecoration: "none" }}>
                        <Button color="primary">
                            Створити програмний результат навчання
                        </Button>
                    </Link>
                </div>
                <Space direction="vertical" style={{ width: "100%" }}>
                    {allProgramLearningOutcomes.map((programLearningOutcomes: ProgramLearningOutcomesData) => (
                        <Card key={programLearningOutcomes.id} style={{ width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h3>{programLearningOutcomes.code}</h3>
                            <div>
                                <Button type="text" icon={<DeleteOutlined />} onClick={() => handleOpenModal(programLearningOutcomes.id)} />
                                <Button type="text" icon={<EditOutlined />} onClick={() => handleUpdate(programLearningOutcomes)} />
                            </div>
                        </div>
                        <h3 style={{ marginTop: "1px" }}>{programLearningOutcomes.name}</h3>
                        <p>{programLearningOutcomes.description}</p>
                    </Card>
                    ))}
                </Space>
                <Pagination
                    style={{ marginTop: '20px', textAlign: 'center' }}
                    current={currentPage}
                    total={totalCount}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                />
                <Modal
                    title="Увага"
                    visible={isModalOpen}
                    onCancel={handleCloseModal}
                    footer={[
                        <Button key="back" onClick={handleCloseModal}>
                            Ні
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleDelete}>
                            Так
                        </Button>,
                    ]}
                >
                    <p>Всі зв'язки з Програмними результатами навчання буде розірвано. Підтвердити видалення?</p>
                </Modal>
            </div>
        );
    }
}

export default AllProgramLearningOutcomess;
