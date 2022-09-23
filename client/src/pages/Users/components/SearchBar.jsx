import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function SearchBar() {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const onSearchPage = e => {
    navigate(`/users/customers/?q=${text}`);
  };

  const onChangeText = e => {
    setText(e.target.value);
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onSearchPage();
    }
  };

  return (
    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={text}
        placeholder="Search Text"
        inputProps={{ 'aria-label': 'search users text' }}
        onChange={onChangeText}
        onKeyPress={onKeyPress}
      />
      <IconButton onClick={onSearchPage} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
