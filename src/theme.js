import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
     palette: {
          primary: {
            light: '#58798b',
            main: '#364954',
            dark: '#363636',
            contrastText: '#fff',
          },
          secondary: {
            light: '#00BBD5',
            main: '#0098c9',
            dark: '#027281',
            contrastText: '#000',
          },
        },
      });

export default theme;