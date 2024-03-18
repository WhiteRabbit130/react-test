import './style.css';

export const BasicCellRenderer = ({ children,  mediaType}) => {
    return (
        <td className='cell' media-type={mediaType}>
            { children }
        </td>
    )
}

export const StringCellRenderer = ({ value, mediaType }) => {
    return (
        <BasicCellRenderer mediaType={mediaType}>
            <h6>{ value }</h6>
        </BasicCellRenderer>
    )
}

export const IconCellRenderer = ({ value, mediaType }) => {
    return (
        <BasicCellRenderer mediaType={mediaType}>
            <div className="iconCell">
                <img src={value.icon} alt="coin-icon" width="48px" height="48px" />
                <p className='body1'>{ value.name }</p>
            </div>
        </BasicCellRenderer>
    )
}

export const UrlCellRenderer = ({ value, mediaType }) => {
    return (
        <BasicCellRenderer mediaType={mediaType}>
            <div className="cellText">
                {value.map((url, index) => (
                    <div key={url || "" + index}>
                        <a href={url} target='#'>{ url }</a>
                    </div>
                ))}
            </div>
        </BasicCellRenderer>
    )
}