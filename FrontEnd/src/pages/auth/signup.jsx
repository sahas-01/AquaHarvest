import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { useState } from "react";

export default function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 700,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant='outlined'
        >
          <div>
            <Typography level='h4' component='h1'>
              <b>Welcome!</b>
            </Typography>
            <Typography level='body2'>Sign up.</Typography>
          </div>
          <TextField
            name='Name'
            type='text'
            placeholder='John Doe'
            label='Name'
          />
          <TextField
            name='email'
            type='email'
            placeholder='johndoe@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label='Email'
          />
          <TextField
            name='password'
            type='password'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            label='Password'
          />
          <TextField
            name='location'
            type='text'
            placeholder='Current location'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label='Location'
          />
          <TextField
            name='bio'
            type='text'
            placeholder='Write in less than 20 words'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label='Bio'
          />
          <Button sx={{ mt: 1 /* margin top */ }}>Sign Up</Button>
          <Typography
            endDecorator={<Link href='/signin'>Log In</Link>}
            fontSize='sm'
            sx={{ alignSelf: "center" }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
