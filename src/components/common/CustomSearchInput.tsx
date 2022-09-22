import * as React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Close, FilterList} from '@mui/icons-material';
import useTheme from "@mui/material/styles/useTheme";
import { useFlexSearch } from 'react-use-flexsearch';
import { navigate } from "gatsby";
import {Box, CardActionArea, Grow, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";

function truncate(str, max) {
    return str.length > max ? str.substr(0, max-1) + '…' : str;
}

export const unFlattenResults = results =>
    results.map(post => {
        const { name, description, slug } = post;
        return { slug, project: { name, description } };
    });

export const useCustomSearchInput = ( index:any | null, store:any | null, query:string | undefined ) => {
    const [ querySearch, setQuerySearch ] = React.useState<string | undefined>( query );
    const [ iterableResults, setIterableResults ] = React.useState<any>([]);
    const [ openSidebar, setOpenSidebar ] = React.useState<boolean>( false );

    let results:any = null;

    if( index && store ) {
        results = unFlattenResults( useFlexSearch( querySearch, index, store ));
    }

    const handleSearch = () => {
        setIterableResults( results );
    }

    React.useEffect(() => {
        handleSearch();
    },[ querySearch, query ]);

    return {
        querySearch,
        setQuerySearch,
        handleSearch,
        iterableResults,
        setIterableResults,
        openSidebar,
        setOpenSidebar
    }
}

export const CustomSearchInput = (
    {
        querySearch,
        setQuerySearch,
        handleSearch,
        iterableResults,
        setIterableResults,
        openSidebar,
        setOpenSidebar,
        redirectTo,
        hideFiltersButton
    }:{
        querySearch: string | undefined,
        setQuerySearch: any,
        handleSearch: any,
        iterableResults: any,
        setIterableResults?: any,
        openSidebar?: boolean,
        setOpenSidebar?: any,
        redirectTo?: string | undefined,
        hideFiltersButton?: boolean,
    }) => {

    const textInput = React.useRef(null);

    const theme = useTheme();
    return(
        <Box sx={{ position: 'relative' }}>
            <Paper
                component="form"
                sx={{
                    borderRadius: 4,
                    backgroundColor: '#EBF2FF',
                    p: 0,
                    display: 'flex',
                    alignItems: 'center',
                    width: {
                        xs:320,
                        md: 420
                    }
                }}
            >
                {
                    !hideFiltersButton && (
                        <IconButton
                            sx={{
                                p: '10px',
                                display: {
                                    xs: 'inline',
                                    lg: 'none'
                                }
                            }}
                            aria-label="menu"
                            onClick={ () => setOpenSidebar( !openSidebar ) }
                        >
                            <FilterList />
                        </IconButton>
                    )
                }
                <InputBase
                    inputRef={ textInput }
                    onKeyDown={ (e:any) => {

                        if(e.keyCode === 13) {
                            e.preventDefault();
                            if( redirectTo ) {
                                navigate( `${ redirectTo }?search=${ querySearch }` );
                                return;
                            }
                            handleSearch()
                        }
                    }}
                    onChange={ (e) => setQuerySearch( e.target.value ) }
                    defaultValue={ querySearch ? querySearch : undefined }
                    sx={{ pl:{
                            md: 1,
                            xs: 0
                        }, ml: 1, flex: 1 }}
                    placeholder="Cerca de la playa, terreno, etc..."
                    inputProps={{ 'aria-label': 'buscar' }}
                    value={ querySearch }
                />
                {
                    textInput?.current?.value !== "" && (
                        <IconButton
                            sx={{
                                zIndex: 3,
                            }}
                            onClick={ () => {
                                if( redirectTo ) {
                                    navigate( `${ redirectTo }?search=${ querySearch }` );
                                    return;
                                }
                                textInput.current.value = ""
                                setIterableResults( [] );
                                setQuerySearch( undefined );
                            }}
                        >
                            <Close/>
                        </IconButton>
                    )
                }
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
            <Grow
                in={ querySearch && iterableResults.length > 0 }
                style={{ transformOrigin: '0 0 0' }}
                {...(querySearch && iterableResults ? { timeout: 1000 } : {})}
            >
                        <Paper
                            elevation={ 4 }
                            sx={{
                                p: 1,
                                position: 'absolute',
                                width: '100%',
                                zIndex: 2,
                                minHeight: 100
                            }}
                        >
                            {
                                ( iterableResults && iterableResults.length > 0 ) ? iterableResults.map((val:any, index:number) => (
                                    <Card
                                        key={ index }
                                        sx={{
                                            p: 1,
                                            borderRadius: 0,
                                            borderBottom: `1px solid ${ theme.palette.primary.main }`,
                                            position: 'relative',
                                        }}
                                        elevation={0}
                                    >
                                        <CardActionArea
                                            onClick={ () => navigate(`/propiedad/${ val.slug }` )}
                                        >
                                            <CardContent>
                                                <Typography color="secondary" variant="h6">
                                                    { val.project.name }
                                                </Typography>
                                                <Typography fontSize={ 14 }>
                                                    { truncate( val.project.description , 80 ) }
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )) : (
                                    querySearch && iterableResults.length === 0 && (
                                        <Typography>
                                            No se encontraron resultados para la búsqueda "{ querySearch }"
                                        </Typography>
                                    )
                                )
                            }
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    zIndex: 3,
                                }}
                                onClick={ () => {
                                    textInput.current.value = ""
                                    setIterableResults([]);
                                    setQuerySearch( undefined );
                                }}
                            >
                                <Close/>
                            </IconButton>
                        </Paper>
            </Grow>


        </Box>

    )
}

