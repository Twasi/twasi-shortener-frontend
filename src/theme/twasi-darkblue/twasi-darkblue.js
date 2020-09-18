import { createMuiTheme } from '@material-ui/core/styles';

import './twasi-darkblue.css';

export default createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#1a2035'
    },
    primary: {
      main: '#2f80ed',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#de6464',
      contrastText: '#ffffff'
    }
  },
  neutral: {
    color: '#da7720'
  },
  overrides: {
    MuiPaper: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#afb6c5', // Some CSS
        backgroundColor: '#202940',
        borderRadius: '4px',
        border: '0px solid #25373e'
      },
      elevation1: {
        boxShadow: 'none'
      },
      elevation2: {
        boxShadow: 'none'
      },
      elevation3: {
        boxShadow: 'none'
      },
      elevation4: {
        boxShadow: 'none'
      }
    },
    MuiBadge: {
      badge: {
        position: 'relative',
        marginLeft: '5px'
      }
    },
    MuiCardContent: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#afb6c5', // Some CSS
        backgroundColor: '#232f4a', // Some CSS
        borderRadius: '15px'
      }
    },
    MuiMenuItem: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#afb6c5', // Some CSS
        padding: '10px',
        '&:hover': {
          backgroundColor: '#1a2035'
        },
        '&$selected': { // Name of the rule
          color: '#ffffff',
          backgroundColor: '#2f80ed'
        }
      }
    },
    MuiListItemText: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#afb6c5'
      }
    },
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        textTransform: 'none', // Some CSS
        color: '#afb6c5', // Some CSS
        borderRadius: '50px'
      },
      containedPrimary: {
        boxShadow: 'none',
        background: '#3f51b5',
        '&$disabled': {
          background: '#232f4a',
          color: '#afb6c5'
        }
      },
      containedSecondary: {
        boxShadow: 'none',
        background: 'linear-gradient(135deg,#de6464,#ff7b7b)',
        '&$disabled': {
          background: '#232f4a',
          color: '#afb6c5'
        }
      },
      outlinedPrimary: {
        borderWidth: '1px',
        '&:hover': {
          borderWidth: '1px'
        }
      },
      outlinedSecondary: {
        borderWidth: '1px',
        '&:hover': {
          borderWidth: '1px'
        }
      },
      contained: {
        boxShadow: 'none',
        backgroundColor: '#232f4a',
        color: '#afb6c5',
        '&$disabled': {
          backgroundColor: '#232f4a',
          color: '#afb6c5'
        },
        '&:hover': {
          backgroundColor: '#1a2035'
        }
      }
    },
    MuiToggleButtonGroup: {
      root: {
        "&$selected": {
          backgroundColor: "transparent",
          boxShadow: "none"
        }
      }
    },
    MuiToggleButton: {
      label: {
        textTransform: 'none'
      },
      root: {
        '&$selected': {
          background: 'linear-gradient(135deg, rgb(63, 81, 181), rgb(84, 128, 255))'
        }
      }
    },
    MuiFab: {
      root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: '#1a2035'
        }
      }
    },
    MUIDataTableToolbar: {
      root: {
        padding: '23px'
      },
      titleText: {
        color: '#afb6c5'
      },
      icon: {
        color: '#afb6c5'
      }
    },
    MUIDataTableHeadCell: {
      fixedHeader: {
        backgroundColor: '#202940',
        borderBottom: '3px solid #2f80ed'
      }
    },
    MuiTableCell: { // Name of the component ⚛️ / style sheet
      head: {
        color: '#afb6c5'
      },
      body: { // Name of the rule
        color: '#afb6c5', // Some CSS
        borderColor: 'transparent',
        padding: '16px'
      },
      root: {
        padding: '16px',
        borderBottom: '0px'
      }
    },
    MuiTableRow: {
      root: {
        '&:nth-of-type(even)': {
          backgroundColor: '#232f4a'
        }
      }
    },
    MuiInputAdornment: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: '#1b292d' // Some CSS
      }
    },
    MuiTabs: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: '#202940', // Some CSS
        border: '0px !important',
        borderRadius: '4px',
      }
    },
    MuiTab: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        border: '0px',
        textTransform: 'none',
        color: '#afb6c5'
      },
      textColorPrimary: {
        '&$selected': {
          color: '#afb6c5'
        },
      }
    },
    MuiChip: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: '#232f4a' // Some CSS
      },
      colorPrimary: {
        backgroundColor: '#2f80ed'
      },
      colorSecondary: {
        background: 'linear-gradient(135deg,#de6464,#ff7b7b)'
      }
    },
    MuiAvatar: { // Name of the component ⚛️ / style sheet
      colorDefault: { // Name of the rule
        backgroundColor: '#1a2035', // Some CSS
        color: '#ffffff'
      }
    },
    MuiTypography: { // Name of the component ⚛️ / style sheet
      body1: { // Name of the rule
        color: '#afb6c5' // Some CSS
      },
      body2: { // Name of the rule
        color: '#afb6c5' // Some CSS
      }
    },
    MuiTooltip: { // Name of the component ⚛️ / style sheet
      tooltip: { // Name of the rule
        color: '#afb6c5', // Some CSS
        backgroundColor: 'rgba(0,0,0,0.0)',
        opacity: '1'
      },
      popper: {
        opacity: '1'
      }
    },
    MuiSelect: {
      root: {
        borderRadius: "3px",
        backgroundColor: "#1a2035",
        margin: "0px 5px 0px 5px",
        color: '#ffffff',
        fontSize: '0.875em',
        borderBottom: '0px'
      },
      select: {
        padding: "5px",
      },
      selectMenu: {
        padding: "5px",
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        borderRadius: '4px 4px 0px 0px',
        backgroundColor: '#232f4a',
        borderBottom: '3px solid #2f80ed'
      }
    },
    MuiExpansionPanel: {
      root: {
        '&:before': {
          display: 'none'
        }
      }
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: '#202940',
        height: '20px'
      }
    },
    MuiDialogContent: {
      root: {
        padding: '24px',
        whiteSpace: 'pre-wrap'
      }
    },
    MuiSlider: {
      markLabel: {
        filter: 'grayscale(100%)'
      },
      markLabelActive: {
        filter: 'grayscale(0%)'
      }
    },
  },
  typography: {
    useNextVariants: true
  }
});
