import { Box, Typography } from "@material-ui/core";
import { styled } from "@mui/material";
import { theme } from "theme/theme";

const circleStyle = ({
    stroke: theme.palette.tertiary.main,
    transform: 'rotate(-90deg)', 
    transformOrigin: '50% 50%',
});

const textStyle = ({
    fill: theme.palette.tertiary.main,
    fontFamily: "'Abril Fatface'",
    fontSize: '3rem',
});

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
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
            <svg
            height={props.radius * 2}
            width={props.radius * 2}
            >
            <circle
                fill='transparent'
                strokeWidth={ props.stroke }
                strokeDasharray={ circumference + ' ' + circumference }
                style={ {  strokeDashoffset,  ...circleStyle } }
                r={ normalizedRadius }
                cx={ props.radius }
                cy={ props.radius }
            />
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" style={{...textStyle}}>{props.progress}</text>
            </svg>
            <Typography variant="h1" style={{fontSize: '4rem', color: `${theme.palette.tertiary.main}`}}>%</Typography>
        </StyledBox> 
      );
    }

export default ProgressCircle;
