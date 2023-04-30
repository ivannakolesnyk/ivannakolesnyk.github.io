/**
 * styles object contains styles for the ShoppingCartSection and TableContainer components.
 */

const styles = {
    ShoppingCartSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mt: 4,
        padding: "3.6rem 0 6.4rem 0",
        "& .MuiTableCell-root": {
            color: "secondary.main",
        },
    },
    TableContainer: {
        width: "80%",
        bgcolor: "white",
        borderRadius: 2,
        p: 2,
        color: "secondary.main",
    },
};

export default styles;