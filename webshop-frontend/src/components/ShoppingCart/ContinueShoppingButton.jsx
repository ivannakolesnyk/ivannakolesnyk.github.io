import {Button} from "@mui/material";

const ContinueShoppingButton = ({ onClick }) => {
    return (
        <Button
            variant="outlined"
            color="secondary"
            onClick={onClick}
            sx={{ mr: 1 }}
        >
            Continue Shopping
        </Button>
    );
}

export default ContinueShoppingButton;