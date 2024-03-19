import { useEffect, useState, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
Box,
Button,
FormControl,
InputLabel,
Select,
MenuItem,
// SelectChangeEvent,
TablePagination,
CircularProgress
} from '@mui/material'

import { getProducts } from '@api'
import FlexBox from '@components/FlexBox'
import { userState, getFullName } from '@store'
import {
IconCellRenderer,
UrlCellRenderer
} from '@components/table/TableCellRenderer'
import TableWrapper from '@components/table/TableWrapper'
import logoBcw from '@assets/logo_bcw.png'

import '@styles/App.css'

const currencies = ['USD', 'GBP', 'HKD', 'SGD', 'KRW']
const headers = [
{ label: 'ID', dataKey: 'id' },
{ label: 'Name', dataKey: 'product', renderer: IconCellRenderer },
{ label: 'Price', dataKey: 'price', mediaType: 'tablet' },
{ label: 'Product Key', dataKey: 'productKey', mediaType: 'desktop' },
{ label: 'Offer End', dataKey: 'offerEnd', mediaType: 'hd' },
{ label: 'Made At', dataKey: 'madeAt', mediaType: 'hd' },
{
    label: 'URLs',
    dataKey: 'images',
    renderer: UrlCellRenderer,
    mediaType: 'mobile'
}
]

function Home () {
const [user] = useRecoilState(userState)
const fullName = useRecoilValue(getFullName)
const [isLoading, setLoading] = useState(false)
const [currency, setCurrency] = useState('USD')
const [products, setProducts] = useState([])
const [isVisible, setIsVisible] = useState(false)
const profileButtonRef = useRef(null)
const profileBoxRef = useRef(null)

useEffect(() => {
    const handleClickOutside = event => {
    if (
        profileBoxRef.current &&
        !profileBoxRef.current.contains(event.target) &&
        profileButtonRef.current !== event.target
    ) {
        setIsVisible(false)
    }
    }
    console.log('I have been called.')

    document.addEventListener('click', handleClickOutside)
    return () => {
    document.removeEventListener('click', handleClickOutside)
    }
}, [])

useEffect(() => {
    setLoading(true)
    getProducts().then(response => {
    const data = response.filter(product => product.currency === currency)
    const transform = _data => {
        return _data.map(product => {
        return {
            ...product,
            product: {
            name: product.name,
            icon: product.images[0]
            }
        }
        })
    }

    setLoading(false)
    setProducts(transform(data))
    })
}, [currency])

const handleCurrencyChange = e => {
    setCurrency(e.target.value)
}

const handleSortByName = () => {
    const sortedProducts = products.sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
    })
    setProducts([...sortedProducts])
}

const handleSortByID = () => {
    const sortedProducts = products.sort((a, b) => a.id - b.id)
    setProducts([...sortedProducts])
}

return (
    <main>
    <header>
        <Button
        className='profile'
        onClick={() => setIsVisible(!isVisible)}
        ref={profileButtonRef}
        >
        {fullName}
        </Button>
        {isVisible && (
        <div className='profile-box' ref={profileBoxRef}>
            <h4>
            {user.firstName} {user.lastName}
            </h4>
            <p>
            <b>Email:</b> {user.userEmail}
            </p>
        </div>
        )}
    </header>

    <div className='content'>
        <div className='logo'>
        <img src={logoBcw} alt='logo-BCW' className='logo-png' />
        </div>

        <FlexBox gap='10px'>
            <Box sx={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="currency-select-label">Currency</InputLabel>
                    <Select
                        id='currency-select'
                        value={currency}
                        label='currency'
                        onChange={handleCurrencyChange}
                    >
                        {currencies.map((_currency, index) => (
                            <MenuItem key={index} value={_currency}>
                            {_currency}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                
            </Box>

            <Button onClick={handleSortByName}>
                SORT BY NAME
            </Button>
            <Button onClick={handleSortByID}>
                SORT BY RANK
            </Button>
        </FlexBox>

        {isLoading ? (
        <div className='loading'>
            <h4>Loading...</h4>
        </div>
        ) : (
        <TableWrapper headers={headers} data={products} />
        )}
    </div>
    </main>
)
}

export default Home
