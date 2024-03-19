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
                <img src={value.icon} alt="coin-icon" width="48px" height="48px" />
                <Typography variant='body2'>{ value.name }</Typography>
            </Box>
        </BasicCellRenderer>
    )
}

export const UrlCellRenderer = ({ value, mediaType }) => {
    return (
        <BasicCellRenderer mediaType={mediaType}>
            <Box className="cellText">
                {value.map((url, index) => (
                    <Typography key={url || "" + index}>
                        <a href={url} target='#'>{ url }</a>
                    </Typography>
                ))}
            </Box>
        </BasicCellRenderer>
    )
}