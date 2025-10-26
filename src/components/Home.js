import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const useStyles = makeStyles(theme => ({
    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "white"
    },

    hoursLink: {
        color: "skyblue",
        fontSize: "32px",
        margin: "auto"
    },

    testimonialText: {
        margin: "auto",
        width: "90%",
        marginBottom: "20px"
    },

    landingPageLogoContainer: {
        zIndex: "100",
        position: "absolute",
        width: "100%",
        top: "25%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
    },

    landingPageLogo: {
        width: "50%",
        flexBasis: "20%",
        maxHeight: "500px",
        maxWidth: "250px",
        opacity: "60%"
    }

}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className='home-container center-text black-background'>
            <div className="section">
                <div id="landingPageImage" className='sectionWithBackgroundImage'>
                    <h1 className='heroText'>
                        A fitness playground for the kid in all of us
                    </h1>
                </div>
            </div>

            <div id="section2"  className='bg-gray'>
                <div className='cardContainer'>
   <Card className='card' sx={{ minWidth: 300 }}>
                    <CardContent>
                        <h1>Community</h1>
                        <img src='/images/community1.png' className='roundedImage' />
                    </CardContent>
                </Card>
                

                <Card className='card' sx={{ minWidth: 300 }}>
                    <CardContent>
                        <h1>Accessibility</h1>
                        <img src='/images/accessibility1.png' className='roundedImage' />
                    </CardContent>
                </Card>

                <Card className='card' sx={{ minWidth: 300 }}>
                    <CardContent>
                        <h1>Performance</h1>
                        <img src='/images/performance1.png' className='roundedImage' />
                    </CardContent>
                </Card>
                </div>
             


            </div>

            <div id="training" className='section'>
            
            </div>
        </div>

    )
}
