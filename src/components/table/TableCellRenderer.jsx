import { Box, Typography, TableCell } from '@mui/material';

import './style.css';

export const BasicCellRenderer = ({ children,  mediaType}) => {
    return (
        <TableCell media-type={mediaType}>
            { children }
        </TableCell>
    )
}

export const StringCellRenderer = ({ value, mediaType }) => {
    return (
        <BasicCellRenderer mediaType={mediaType}>
            <Typography color="textSecondary" variant='body2'>{ value }</Typography>
        </BasicCellRenderer>
    )
}

export const IconCellRenderer = ({ value, mediaType }) => {
    return (
        <BasicCellRenderer mediaType={mediaType}>
            <Box display='flex' gap='10px' alignItems='center'>
                <Box width='48px' height='48px'>
                    <img src={value.icon} alt="coin-icon" width="48px" height="100%" />
                </Box>
                <Typography color="textSecondary" variant='body2' >
                    { value.name }
                </Typography>
            </Box>
        </BasicCellRenderer>
    )
}

export const UrlCellRenderer = ({ value, mediaType }) => {
    return (
        <BasicCellRenderer mediaType={mediaType}>
            <Box>
                {value.map((url, index) => (
                    <Typography variant='body2' key={url || "" + index}>
                        <a href={url} target='#'>{ url }</a>
                    </Typography>
                ))}
            </Box>
        </BasicCellRenderer>
    )
}