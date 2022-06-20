import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FilterList } from '@mui/icons-material';
import useTheme from "@mui/material/styles/useTheme";
import { navigate } from "gatsby";

export const useCustomSearchInput = () => {
    const [ querySearch, setQuerySearch ] = React.useState<string | undefined>( undefined );

    const handleSearch = () => {
        navigate(`/propiedades?search=${ querySearch }` );
    }
    return {
        querySearch,
        setQuerySearch,
        handleSearch
    }
}

export const CustomSearchInput = ({querySearch, setQuerySearch, handleSearch}:{
    querySearch: string | undefined,
    setQuerySearch:any,
    handleSearch: any
}) => {
    const theme = useTheme();
    return(
        <Paper
            onKeyDown={ (e:any) => {
                if(e.keyCode == 13){
                    console.log('value', e.target.value);
                    // put the login here
                }
            }}
            component="form"
            sx={{ borderRadius: 4, backgroundColor: '#EBF2FF', p: 0, display: 'flex', alignItems: 'center', width: 420 }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <FilterList />
            </IconButton>
            <InputBase
                onChange={ (e) => setQuerySearch( e.target.value ) }
                defaultValue={querySearch}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Cerca de la playa, terreno, etc..."
                inputProps={{ 'aria-label': 'buscar' }}
            />
            <IconButton
                onClick={ handleSearch }
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '0 16px 16px 0',
                    p: '16px',
                    color: "white"
                }}
                aria-label="buscar"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
