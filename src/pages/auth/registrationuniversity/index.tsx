// import React, { useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useActions } from "../../../hooks/useActions";
// import { useTypedSelector } from "../../../hooks/useTypedSelector";
// import { useState } from "react";
// import Grid from "@mui/material/Grid";
// import { Link, Navigate } from "react-router-dom";
// import { Avatar } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email address").required("Required"),
//     password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Required"),
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), undefined], "Passwords must match")
//         .required("Required"),
// });

// const defaultTheme = createTheme();

const RegistrationUniversity = () => {
    return(<></>)
    // const [ isRedirect, setIsRedirect ] = useState(false);
    // const { CreateUser } = useActions();
    // const formik = useFormik({
    //     initialValues: {
    //         email: "",
    //         password: "",
    //         confirmPassword: "",
    //     },
    //     validationSchema: validationSchema,
    //     onSubmit: (values) => {
    //         CreateUser(values);
    //         setIsRedirect(true);
    //     },
    // });
    // if(isRedirect)
    // {
    //     return <Navigate to="/signin"/>
    // }else
    // return (
    //     <ThemeProvider theme={defaultTheme}>
    //         <Container component="main" maxWidth="xs">
    //             <CssBaseline />
    //             <Box
    //                 sx={{
    //                     marginTop: 1,
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     alignItems: "center",
    //                 }}
    //             >
    //                 <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //                     <LockOutlinedIcon />
    //                 </Avatar>
    //                 <Typography component="h1" variant="h5">
    //                     Реєстрація Університетського акаунту
    //                 </Typography>
    //                 <Box
    //                     component="form"
    //                     onSubmit={formik.handleSubmit}
    //                     noValidate
    //                     sx={{ mt: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
    //                 >
    //                     <TextField
    //                         margin="normal"
    //                         id="email"
    //                         label="Елекктронна пошта"
    //                         name="email"
    //                         autoComplete="email"
    //                         value={formik.values.email}
    //                         onChange={formik.handleChange}
    //                         onBlur={formik.handleBlur}
    //                         error={formik.touched.email && Boolean(formik.errors.email)}
    //                         helperText={formik.touched.email && formik.errors.email}
    //                         fullWidth
    //                     />
    //                     <TextField
    //                         margin="normal"
    //                         id="password"
    //                         label="Пароль"
    //                         type="password"
    //                         name="password"
    //                         autoComplete="new-password"
    //                         value={formik.values.password}
    //                         onChange={formik.handleChange}
    //                         onBlur={formik.handleBlur}
    //                         error={formik.touched.password && Boolean(formik.errors.password)}
    //                         helperText={formik.touched.password && formik.errors.password}
    //                         fullWidth
    //                     />
    //                     <TextField
    //                         margin="normal"
    //                         id="confirmPassword"
    //                         label="Підтвердження паролю"
    //                         type="password"
    //                         name="confirmPassword"
    //                         autoComplete="new-password"
    //                         value={formik.values.confirmPassword}
    //                         onChange={formik.handleChange}
    //                         onBlur={formik.handleBlur}
    //                         error={
    //                             formik.touched.confirmPassword &&
    //                             Boolean(formik.errors.confirmPassword)
    //                         }
    //                         helperText={
    //                             formik.touched.confirmPassword && formik.errors.confirmPassword
    //                         }
    //                         fullWidth
    //                     />
    //                     <Button
    //                         type="submit"
    //                         variant="contained"
    //                         sx={{ mt: 1, ml: 'auto', flex: 1 }}
    //                         //fullWidth
    //                     >
    //                         Зареєструвати
    //                     </Button>
    //                     <Grid container>
    //                         <Grid item xs sx={{mt: 1}}>
    //                             <Link to="/signin">Повернутися до входу</Link>
    //                         </Grid>
    //                     </Grid>
    //                 </Box>
    //             </Box>
    //         </Container>
    //     </ThemeProvider>
    // );
}

export default RegistrationUniversity;
