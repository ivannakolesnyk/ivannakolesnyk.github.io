import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ProfilePage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
      <Card sx={{ width: "50%", maxWidth: "700px" }}>
        <CardHeader title="My Monoca" subheader="User id: 123" />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Profile Information
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Name" secondary="Simon Doe" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" secondary="simondoe@example.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Phone" secondary="+47 90090900" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                primary="Address"
                secondary="Chicken Road 13, 7080 Farm County"
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/profile/edit" variant="contained">
            Edit Profile
          </Button>
          <Button component={Link} to="/profile/changepw" variant="contained">
            Change password
          </Button>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Orders
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here you can view your orders.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/orders" variant="contained">
            View Orders
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProfilePage;
