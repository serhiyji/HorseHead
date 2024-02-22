import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useState } from "react";
import { Navigate } from "react-router-dom";


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

const defaultTheme = createTheme();

const CreateCompetence = () => {
    const { CreateCompetenceA, GetAllCompetenceA } = useActions();
    const [ isRedirect, setIsRedirect ] = useState(false);
    const { user } = useTypedSelector((score) => score.UserReducer);

    const formik = useFormik({
        initialValues: {
            id: "",
            code: "",
            name: "",
            description: "",
            appUserId: user.Id,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            CreateCompetenceA(values);
            //GetAllCompetenceA(1, 2, user.Id);
            setIsRedirect(true);
        },
    });
    if(isRedirect)
    {
        return <Navigate to="/dashboard/competence"/>
    }else
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Створення компетенції
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{ mt: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
                    >
                        <TextField
                            margin="normal"
                            id="code"
                            label="Код"
                            name="code"
                            value={formik.values.code}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.code && Boolean(formik.errors.code)}
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            id="name"
                            label="Назва"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            id="description"
                            label="Опис"
                            name="description"
                            autoComplete="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            fullWidth
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 1, ml: 'auto'}}
                        >
                            Створити
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default CreateCompetence;