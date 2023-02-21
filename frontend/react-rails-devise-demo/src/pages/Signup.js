import React, { useEffect, useState } from "react"
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import ImageUpload from "./ImageUpload";
import { getUser, signUp } from "../api";
import Home from "./Home";

const SignUp = () => {
  const [name, setName] = useState("")
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")
  const [user, setUser] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signUp({ name, nickname, email, image, password })
    if (user){
      window.location.href = '/'      
    }
    setUser(user);
  }

  useEffect(() => {
    getUser().then((response) => {
      if (response){
        setUser(response)
        window.location.href = '/'
      }
    })
  }, [])

  const saveImage = (image) => {
    setImage(image)
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
      Sign Up
    </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <ImageUpload saveImage={saveImage} />
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoFocus
        onChange={e => setName(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="nickname"
        label="Nick Name/Pet Name"
        name="nickname"
        onChange={e => setNickname(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/sign_in" variant="body2">
            {"Already have an account? Sign In"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default SignUp;