import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'Saira,sans-serif',
                boxSizing: 'border-box',
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
