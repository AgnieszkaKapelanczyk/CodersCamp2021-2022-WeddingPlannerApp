import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ActivationPage = () => {
    const { activationToken } = useParams();
    return (
        <Box>
            {activationToken}
        </Box>
    )
};

export default ActivationPage;