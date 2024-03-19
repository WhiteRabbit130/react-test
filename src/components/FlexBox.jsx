import { Box } from "@mui/material";

const FlexBox = (props) => (
    <Box display='flex' justifyContent='center' {...props}>{props.children}</Box>
);

export default FlexBox;