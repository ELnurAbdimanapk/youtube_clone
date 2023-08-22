import { Search } from '@mui/icons-material'
import { IconButton, Input, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <Paper
    component='form'
    onSubmit={onhandleSubmit}
    sx={{
      borderRadius: 20,
      border: '1px solid #e3e3e3',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
    }}
  >

    <Input
    size='lg'
      className='search-bar'
      placeholder='Search...'
      sx={{
        '&:before': {
          display: 'none'
        },
        '&:hover:not(.Mui-disabled):after': {
          display: 'none'
        },
      }}
      
       value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
     />
    <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
      <Search />
    </IconButton>
  </Paper>
  )
}

export default SearchBar