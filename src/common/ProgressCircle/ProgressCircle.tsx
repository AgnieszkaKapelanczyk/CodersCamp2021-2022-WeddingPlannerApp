import { Box, Typography } from "@material-ui/core";
import { styled } from "@mui/material";
import { theme } from "theme/theme";

const circleStyle = ({
    stroke: theme.palette.secondary.main,
    transform: 'rotate(-90deg)', 
    transformOrigin: '50% 50%',
});

const textStyle = ({
    fill: theme.palette.secondary.main,
    fontFamily: "'Abril Fatface'",
    fontSize: '3rem',
});

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "0 2rem",
    margin: "2rem 0",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        padding: "0", 
        '& p': {
            fontSize: "1rem",
            margin: "2rem 0.8rem",
            paddingRight: "0",
        },
        '& .box-responsive': {
            display: "block",
            padding: "1.4rem",
            textAlign: "center"
        },
        '& img': {
            maxWidth: "70%",
            paddingLeft: "0",
        },
        '& .main-img': {
            padding: "1rem",
            margin: "1rem"
        }
    },
  }));

interface ProgressCircleProps {
    radius: number
    stroke: number
    progress: number
};

const ProgressCircle = (props: ProgressCircleProps) => {
    const normalizedRadius = props.radius - props.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - props.progress / 100 * circumference;

    return (
        <StyledBox>
            <Box style={{flex: '1'}}>
            <svg
            height={props.radius * 2}
            width={props.radius * 2}
            >
            <circle
                fill='transparent'
                strokeWidth={ props.stroke }
                strokeDasharray={ circumference + ' ' + circumference }
                style={ {  strokeDashoffset,  ...circleStyle } }
                stroke-width={ props.stroke }
                r={ normalizedRadius }
                cx={ props.radius }
                cy={ props.radius }
            />
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" style={{...textStyle}}>75</text>
            </svg>
            </Box>
            <Box style={{flex: '1'}}>
                <Typography variant="h1" color="secondary" style={{fontSize: '4rem'}}>%</Typography>
            </Box>
            <Box style={{flex: '2'}}>
                <Typography variant="body2">Wasz postęp przygotowań do ślubu wynosi 75%.</Typography>
            </Box>
        </StyledBox> 
      );
    }

export default ProgressCircle;
