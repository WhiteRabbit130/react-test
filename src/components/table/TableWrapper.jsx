import { StringCellRenderer } from './TableCellRenderer'

function TableWrapper ({ headers, data }) {
  return (
    <table className='table'>
      <thead>
        <tr className='thead'>
          {headers.map(header => (
            <StringCellRenderer
              key={header.dataKey}
              value={header.label}
              mediaType={header.mediaType}
            />
          ))}
        </tr>
      </thead>

      <tbody>
        {data.length == 0 ? (
          <tr>
            <td colSpan={headers.length} className='no-item'>
              <h4>No Item to display</h4>
            </td>
          </tr>
        ) : (
          data.map((row, index) => (
            <tr key={index}>
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
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default TableWrapper
