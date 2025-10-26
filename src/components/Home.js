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

            <div id="section2" className='longSection'>
                <Card sx={{ minWidth: 200 }}>
                    <CardContent>
                        <h1>Community</h1>
                        <img src='/images/community1.png' className='roundedImage' />
                    </CardContent>
                </Card>
            </div>

            <div id="training" className='section'>
                <h1 className='sectionHeader'>Join our community</h1>
                <p className='sectionCaption'>
                    Need a little coaching guidance to get started? Tap in with Coach Shane and Coach Rob to get started with some coaching to take your game and your fitness journey to the next level - go to ‘Learn More’ to inquire about coaching
                    <br />
                    Otherwise get yourself rolling with our online sign-up - hit the link, fill out some basic info, and get started today!

                </p>

                <Button className='button'
                    target="_blank"
                    variant="contained"
                    size="large"
                    href="https://theoutpost.gymmasteronline.com/portal/signup">
                    SIGN UP
                </Button>

                <Button className='button'
                    target="_blank"

                    variant="contained"
                    size="large"
                    href="https://forms.gle/ARkPTHWgBxu76Pny7">
                    LEARN MORE
                </Button>
            </div>
        </div>

    )
}
