import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El email no es valido'],
    password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth)
    const isChekingAuthentication = useMemo(() => status === 'cheking', [status])

    const {
        displayName, email, password, onInputChange, formState,
        displayNameValid, emailValid, passwordValid, isFormValid
    } = useForm(formData, formValidations)

    const onSubmit = (event) => {
        event.preventDefault()
        setFormSubmitted(true)

        if (!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout title='Register'>
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            type="text"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid} />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid} />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid} />
                    </Grid>

                    <Grid
                        container spacing={2}
                        sx={{ mb: 2, mt: 1 }}
                        display={!!errorMessage ? '' : 'none'}>
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button
                                disabled={isChekingAuthentication}
                                type="submit"
                                variant="contained"
                                fullWidth>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography>You have an account? </Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/Login' sx={{ ml: 1 }}>
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout >
    )
}