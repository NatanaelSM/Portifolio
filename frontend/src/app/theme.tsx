import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'Saira,sans-serif'
            },
            a:{
                fontWeight: 600,
                textDecoration: 'none',
            }
        },
    },
});
