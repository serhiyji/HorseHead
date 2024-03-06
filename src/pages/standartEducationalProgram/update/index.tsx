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
    year: Yup.number()
        .required("Required")
        .min(1, "Minimum length is 1 characters")
        .max(4, "Maximum length is 4 characters"),
    name: Yup.string()
        .required("Required")
        .min(1, "Minimum length is 1 characters")
        .max(256, "Maximum length is 256 characters"),
    code: Yup.string()
        .required("Required")
        .min(1, "Minimum length is 1 characters")
        .max(16, "Maximum length is 16 characters"),
});

const UpdateStandartEducationalProgram = () => {
    const { UpdateStandartEducationalProgramA, GetAllStandartEducationalProgramA } = useActions();
    const [ isRedirect, setIsRedirect ] = useState(false);
    const { selectedStandartEducationalProgram } = useTypedSelector((store) => store.StandartEducationalProgramReducer);
    const { user } = useTypedSelector((score) => score.UserReducer);

    const formik = useFormik({
        initialValues: {
            id: selectedStandartEducationalProgram?.id || "",
            year: selectedStandartEducationalProgram?.year || "",
            name: selectedStandartEducationalProgram?.name || "",
            code: selectedStandartEducationalProgram?.code || ""
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            UpdateStandartEducationalProgramA(values);
            //GetAllStandartEducationalProgramA(1, 10, user.Id);
            setIsRedirect(true);
        },
    });

    useEffect(() => {
        formik.setValues({
            id: selectedStandartEducationalProgram.id,
            year: selectedStandartEducationalProgram.year,
            name: selectedStandartEducationalProgram.name,
            code: selectedStandartEducationalProgram.code
        });
    }, []);

    if(isRedirect)
    {
        return <Navigate to="/dashboard/standartEducationalProgram"/>
    }else
    return(
        <Row justify="center" align="top" style={{ minHeight: "100vh" }}>
            <Col span={8}>
                <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
                    Редагування стандарту освітньої програми
                </Title>
                <Form
                    name="loginForm"
                    initialValues={formik.initialValues}
                    onFinish={formik.handleSubmit}
                >
                    <Form.Item
                        name="year" 
                        validateStatus={formik.errors.year && "error"}
                        // help={formik.errors.year}
                    >
                        <Input
                            placeholder="Рік"
                            {...formik.getFieldProps("year")}
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
                        name="code"
                        validateStatus={formik.errors.code && "error"}
                        // help={formik.errors.code}
                    >
                        <Input
                            placeholder="Код"
                            {...formik.getFieldProps("code")}
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

export default UpdateStandartEducationalProgram;