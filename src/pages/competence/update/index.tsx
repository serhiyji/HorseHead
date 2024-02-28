import { useFormik } from "formik";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Title } = Typography;

const validationSchema = Yup.object().shape({
    code: Yup.string()
        .required("Required")
        .max(16, "Maximum length is 16 characters"),
    name: Yup.string()
        .required("Required")
        .min(1, "Minimum length is 1 characters")
        .max(256, "Maximum length is 256 characters"),
    description: Yup.string()
        .required("Required")
        .max(1024, "Maximum length is 1024 characters")
});

const UpdateCompetence = () => {
    const { UpdateCompetenceA, GetAllCompetenceA } = useActions();
    const [ isRedirect, setIsRedirect ] = useState(false);
    const { selectedCompetence } = useTypedSelector((store) => store.CompetenceReducer);
    const { user } = useTypedSelector((score) => score.UserReducer);

    const formik = useFormik({
        initialValues: {
            id: selectedCompetence?.id || "",
            code: selectedCompetence?.code || "",
            name: selectedCompetence?.name || "",
            description: selectedCompetence?.description || "",
            appUserId: selectedCompetence?.appUserId || ""
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            UpdateCompetenceA(values);
            //GetAllCompetenceA(1, 10, user.Id);
            setIsRedirect(true);
        },
    });

    useEffect(() => {
        formik.setValues({
            id: selectedCompetence.id,
            code: selectedCompetence.code,
            name: selectedCompetence.name,
            description: selectedCompetence.description,
            appUserId: selectedCompetence.appUserId
        });
    }, []);

    if(isRedirect)
    {
        return <Navigate to="/dashboard/competence"/>
    }else
    return(
        <Row justify="center" align="top" style={{ minHeight: "100vh" }}>
            <Col span={8}>
                <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
                    Редагування компетенції
                </Title>
                <Form
                    name="loginForm"
                    initialValues={formik.initialValues}
                    onFinish={formik.handleSubmit}
                >
                    <Form.Item
                        name="code"
                        validateStatus={formik.errors.code && "error"}
                        // help={formik.errors.code}
                    >
                        <Input
                            placeholder="Код"
                            {...formik.getFieldProps("code")}
                        />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        validateStatus={formik.errors.name && "error"}
                        // help={formik.errors.name}
                    >
                        <Input
                            placeholder="Назва"
                            {...formik.getFieldProps("name")}
                        />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        validateStatus={formik.errors.description && "error"}
                        // help={formik.errors.description}
                    >
                        <Input
                            placeholder="Опис"
                            {...formik.getFieldProps("description")}
                        />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Link to={"/dashboard/competence/getall"}>
                                <Button type="default">
                                    <ArrowLeftOutlined />
                                </Button>
                            </Link>
                            <Button type="primary" htmlType="submit">
                                Відредагувати
                            </Button>
                        </div>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
    )
};

export default UpdateCompetence;