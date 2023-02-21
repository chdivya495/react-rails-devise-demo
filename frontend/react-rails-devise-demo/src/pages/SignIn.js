import React, { useEffect, useState } from "react"
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { getUser, signIn } from "../api";
import Home from "./Home";
import history from "../history";

const SignIn = () => {
  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    getUser().then((response) => {
      setUser(response)
    })
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signIn({email, password}).then(response => {
      if (response){
        setUser(response.data)
        history.push('/')
      }
    })
  }

  return (
    user ? <Home user={user} /> :
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <Link href="/sign_up" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SignIn;