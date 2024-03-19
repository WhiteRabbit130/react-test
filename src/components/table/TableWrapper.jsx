import { Box, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { StringCellRenderer } from './TableCellRenderer'

function TableWrapper ({ headers, data }) {
    return (
        <TableContainer component={Paper}>
            <Table className='table'>
                <TableHead>
                    <TableRow className='thead'>
                    {headers.map(header => (
                        <StringCellRenderer
                        key={header.dataKey}
                        value={header.label}
                        mediaType={header.mediaType}
                        />
                    ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.length == 0 ? (                    
                        <Box display='flex' justifyContent='center'>
                            No Item to display
                        </Box>
                    ) : (
                        data.map((row, index) => (
                            <TableRow key={index}>
                            {headers.map(header => {
                                const value = row[header.dataKey]
                                const CellRenderer = header.renderer || StringCellRenderer

                                return (
                                <CellRenderer
                                    key={header.dataKey}
                                    value={value}
                                    mediaType={header.mediaType}
                                />
                                )
                            })}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableWrapper
