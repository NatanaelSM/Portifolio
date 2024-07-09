import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            '*': {
                boxSizing: 'border-box',
            },
            body: {
                fontFamily: 'Saira,sans-serif',
                margin: 0,
                padding: 0,
                fontWeight: 'bold',
                fontSize: '20px',
                background: '#0B0B0B',
                color: 'white',
                a: {
                    fontWeight: 600,
                    fontSize: '20px',
                    textDecoration: 'none'
                }
            },
        },
    },
});