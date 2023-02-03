import * as React from 'react';
import {Box, Mark, Slider, Typography} from "@mui/material";
import {formatCurrency} from "../../helpers/formatCurrency";
import useTheme from "@mui/material/styles/useTheme";

type EstimatesType = {
    months: Array<any>;
    maxSelectableMonths: number;
    currentMonths: number;
    handleMonthsChange: (e: Event, newValue: number | number[]) => void;
    currentAmount: number;
    setMontsArray: any;
    setCurrentAmount: any;
}

export const useEstimates = () => {
    const [ monthsArray, setMontsArray ] = React.useState<Array<any>>([]);

    const [ currentMonths, setCurrentMonths ] = React.useState<number | number[]>( 0 );
    const [ currentAmount, setCurrentAmount ] = React.useState<number>( 0 );

    const handleMonthsChange = (e: Event, newValue:number | number[]) => {
        setCurrentMonths( newValue );

        const ma = monthsArray.find(element => element.months === newValue);

        setCurrentAmount( ma.amount  )
    }

    return {
        currentMonths,
        setCurrentMonths,
        handleMonthsChange,
        currentAmount,
        setMontsArray,
        setCurrentAmount
    }
}

export const Estimates = ({
    months,
    maxSelectableMonths,
    currentMonths,
    handleMonthsChange,
    currentAmount,
    setMontsArray,
    setCurrentAmount
  }:EstimatesType) => {

    const [ marks, setMarks ] = React.useState<boolean | Mark[]>([]);

    const theme = useTheme();

    React.useEffect(() => {
        const ma = []
        if(months) {
            months.map((item:any) => {
                ma.push({
                    value: item.months,
                    label: `${ item.months }`
                });
            })
        }
        setMarks(ma);
        setMontsArray( months );
        if( months[0]?.amount ) {
            setCurrentAmount( months[0].amount );
        }
    },[months]);

    function valuetext(value: number) {
        return `${value}`;
    }

    return(
        <>
            <Box>
                <Typography
                    sx={{
                        color: theme.palette.primary.main
                    }}
                    align="center"
                >
                    { currentMonths === 0 ? `Precio de contado:` : `${currentMonths} mensualidades de:` }
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        mt: 2,
                        color: theme.palette.primary.main,
                        fontWeight: 700
                    }}
                >
                    ${ formatCurrency( currentAmount ) }
                </Typography>
                <Slider
                    onChange={ handleMonthsChange }
                    aria-label="Mensualidades"
                    defaultValue={ currentMonths }
                    max={ 50 }
                    getAriaValueText={(e) => ``}
                    step={ null }
                    valueLabelDisplay="auto"
                    marks={ marks }
                />
            </Box>
        </>
    )
}
