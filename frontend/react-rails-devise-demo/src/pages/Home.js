import { Button } from "@mui/material";
import { signOut } from "../api";
import SignIn from "./SignIn";

const Home = (props) => {
  const submitSignOut = async () => {
    const response = await signOut()
    if (response){
      window.location.href = '/sign_in'
    }
  }

  return(
    props.user ?
      <div>
        Welcome {JSON.stringify(props.user.name)}
        <Button onClick={submitSignOut}> Sign Out</Button>
      </div> :
      <SignIn />
  )
}

export default Home;