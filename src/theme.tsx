import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
                fontSize: '61.25%',
                fontFamily: 'Saira,sans-serif',
                fontWeight: 'bold',
                color: 'white',
            },
            body: {
                a: {
                    fontWeight: 600,
                    fontSize: '20px',
                    textDecoration: 'none'
                }
            },
        },
    },
});