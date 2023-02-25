import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Feed flex={1} />
      <Footer marginTop="auto" />
    </Box>
  );
}

export default App;
