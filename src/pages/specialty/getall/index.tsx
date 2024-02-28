import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Button, Modal, Card, Space, Pagination } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Navigate } from "react-router-dom";

interface SpecialtyData {
    id: number,
    code: string
    name: string,
}

const AllSpecialtys = () => {
    const { GetAllSpecialtyA, DeleteSpecialtyA, SetSelectedSpecialty } = useActions();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isRedirect, setIsRedirect] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { allSpecialty, pageNumber, pageSize, totalCount, countPages } = useTypedSelector((store) => store.SpecialtyReducer);

    const handleOpenModal = (id: number) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        if (selectedId !== null) {
            DeleteSpecialtyA(selectedId);
            setIsModalOpen(false);
        }
    };

    const handleUpdate = (specialty: SpecialtyData) => {
        SetSelectedSpecialty(specialty);
        setIsRedirect(true);
    };

    useEffect(() => {
        GetAllSpecialtyA(currentPage, 2,);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (isRedirect) {
        return <Navigate to="/dashboard/specialty/update" />;
    } else {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ textAlign: "left", marginBottom: "20px" }}>
                    <Link to="/dashboard/specialty/create" style={{ textDecoration: "none" }}>
                        <Button type="primary">
                            Створити спеціальність
                        </Button>
                    </Link>
                </div>
                <Space direction="vertical" style={{ width: "100%" }}>
                    {allSpecialty.map((specialty: SpecialtyData) => (
                        <Card key={specialty.id} style={{ width: "100%" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <h3>{specialty.code}</h3>
                                <div>
                                    <Button type="text" icon={<DeleteOutlined />} onClick={() => handleOpenModal(specialty.id)} />
                                    <Button type="text" icon={<EditOutlined />} onClick={() => handleUpdate(specialty)} />
                                </div>
                            </div>
                            <h3 style={{ marginTop: "1px" }}>{specialty.name}</h3>
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
                    <p>Всі зв'язки з Освітніми програмами буде розірвано. Підтвердити видалення?</p>
                </Modal>
            </div>
        );
    }
}

export default AllSpecialtys;
