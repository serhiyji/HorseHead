import React from "react";
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
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
});

const SignIn = () => {
    const { LoginUser } = useActions();
    const { isAuth } = useTypedSelector((store) => store.UserReducer);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            LoginUser(values);
        },
    });

    if (isAuth) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <Col span={8}>
                <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
                    Вхід
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

                    <Form.Item>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button type="primary" htmlType="submit">
                                Увійти
                            </Button>
                            <Link to={"/registrationuniversity"}>
                                <Button type="default">
                                    Зареєструвати університетську пошту
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
