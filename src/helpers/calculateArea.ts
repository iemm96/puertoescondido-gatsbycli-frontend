export const calculateArea = ( a:number, b:number, unit:string | null, ) => {
  if(unit) {
    switch ( unit ) {
      case "metros_cuadrados": {
          const result = ( a * b );
          return result > 10000 ?
             `${ new Intl.NumberFormat().format( result / 10000 ) } hectáreas`:
             `${ new Intl.NumberFormat().format( result )  } m²`;
      }
      case "pies_cuadrados":
        return `${a * b} ft²`;
    }
  }

  return a * b;
}