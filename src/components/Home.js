import React, { useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
import { Link } from "react-scroll";
import Button from '@mui/material/Button';

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

    useEffect(() => {
        var myIndex = 1; // Holds place in the slideshow

        const backgroundSlider = setInterval(() => {
            var i;
            var x = document.querySelectorAll('.sectionWithBackgroundImage');

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1;
            }
            // Hide previous   
            x[myIndex - 1].style.display = "block";

        }, 3000);


        return () => clearInterval(backgroundSlider);
    });

    return (
        <div className='home-container center-text black-background'>
            <div className="section">
                <div id="outpostWithFlagSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>

                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Outpost Jersey Shore Logo Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="turfSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Outpost Jersey Shore Logo Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="largeOutpostSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Outpost Jersey Shore Logo Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="squatRacksSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Outpost Jersey Shore Logo Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="olympicPadsSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Outpost Jersey Shore Logo Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="smallOutpostSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Outpost Jersey Shore Logo Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div id="section2" className='longSection'>
                <h1 className='sectionHeader'>Outpost Jersey Shore</h1>
                <p className='sectionCaption'>
                    Outpost Jersey Shore is a 24/7-365 Strength and Conditioning Facility located in Monmouth County.  With group and private coaching options for adults and athletes of all backgrounds, flexible memberships, and usage of the facility for outside trainers and other fitness professionals, Outpost is the Jersey Shore’s fitness and performance hub.
                    Outpost is a community full of movers and doers supporting each other in their individual pursuit of every different goal that enters our facility. Our amazing collective of individuals creates a unique environment and family feel that will make Outpost your home away from home… hence the 24/7 access!
                </p>


                <p className='sectionCaption'>
                    Packed into our garage gym set up is everything you need for a killer workout, including:
                </p>
                <ul className='infoList'>
                    <li className='infoListItem'>3 Squat Racks</li>
                    <li className='infoListItem'>2 Deadlift Platforms</li>
                    <li className='infoListItem'>Nearly 30 yards of turf for carries, drags, and other athletic/functional movements</li>
                    <li className='infoListItem'>Sleds, kettlebells, Farmer's Carry bars and other fun “odd object” implements to spice up a training routine</li>
                    <li className='infoListItem'>A group of awesome people that make up the heart and soul of our space.</li>
                </ul>

                <Link to="training"
                    smooth={true}
                    duration={500}
                    style={{
                        textDecoration: "none",
                        color: "white"
                    }}
                >
                    <h1>JOIN <ArrowDownwardIcon className={classes.movingArrow} fontSize="large" /></h1>
                </Link>
            </div>

            <div id="training" className='section'>
                <h1 className='sectionHeader'>Join our community</h1>
                <p className='sectionCaption'>
                    Need a little coaching guidance to get started? Tap in with Coach Shane and Coach Rob to get started with some coaching to take your game and your fitness journey to the next level - go to ‘Learn More’ to inquire about coaching
                    <br/>
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
