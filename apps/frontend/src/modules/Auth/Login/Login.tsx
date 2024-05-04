import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../components";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <Divider />
      <Stack mx={"auto"} width={"400px"} mt={8} gap={2}>
        <Typography variant="h3" fontWeight={500}>
          Login
        </Typography>
        <Typography variant="body1">Hi, Welcome back 👋</Typography>
        <form>
          <Stack gap={2} mt={4}>
            <Stack gap={1}>
              <InputLabel>Email</InputLabel>
              <TextField
                type="text"
                variant="outlined"
                placeholder="E.g johndoe@email.com"
                autoComplete="off"
              />
            </Stack>

            <Stack gap={1}>
              <InputLabel>Password</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Stack>

            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                slotProps={{ typography: { variant: "body2" } }}
              />
              <Typography color="primary" variant="body2">
                Forgot password?
              </Typography>
            </Stack>

            <Button variant="contained" size="large">
              Login
            </Button>

            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Typography variant="body2">Not registered yet?</Typography>
              <Typography variant="body2">
                <Link to={"/sign-up"}>Create an account</Link>
              </Typography>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </>
  );
};