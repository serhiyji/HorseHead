import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import * as Yup from "yup";
const { Title } = Typography;

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Required"),
});

const SignIn = () => {
    const [ isRedirect, setIsRedirect ] = useState(false);
    const { isAuth } = useTypedSelector((store) => store.UserReducer);
    const { CreateUser } = useActions();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            CreateUser(values);
            setIsRedirect(true);
        },
    });

    if (isRedirect) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <Col span={8}>
                <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
                    Реєстрація унівситетської пошти
                </Title>
                <Form
                    name="loginForm"
                    initialValues={{ remember: true }}
                    onFinish={formik.handleSubmit}
                >
                    <Form.Item
                        name="email"
                        validateStatus={formik.errors.email && "error"}
                        help={formik.errors.email}
                    >
                        <Input
                            placeholder="Email"
                            {...formik.getFieldProps("email")}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        validateStatus={formik.errors.password && "error"}
                        help={formik.errors.password}
                    >
                        <Input.Password
                            placeholder="Password"
                            {...formik.getFieldProps("password")}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        validateStatus={formik.errors.password && "error"}
                        help={formik.errors.password}
                    >
                        <Input.Password
                            placeholder="Confirm password"
                            {...formik.getFieldProps("confirmPassword")}
                        />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button type="primary" htmlType="submit">
                                Зареєструвати
                            </Button>
                            <Link to={"/signin"}>
                                <Button type="default">
                                    Увійти
                                </Button>
                            </Link>
                        </div>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default SignIn;
