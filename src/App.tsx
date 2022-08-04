import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [url, setUrl] = useState<string | null>();
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Convert your url to a QR code
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Your url"
            variant="outlined"
            multiline
            onChange={(e) => setUrl(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          {url && QrContainer(url)}
        </Grid>
      </Grid>
    </>
  );
}

function QrContainer(url: string) {
  return <QRCode value={url}></QRCode>;
}

export default App;
