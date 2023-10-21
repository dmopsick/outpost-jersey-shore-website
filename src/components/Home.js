import React, { useEffect } from 'react';
import Logo from '../images/logo1200.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-scroll";
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "skyblue"
    },

    homeContainer: {
        color: "white",
        background: "black",
        textAlign: "center"
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
    }

}));

export default function Home() {
    const classes = useStyles();
    var myIndex = 1; // Holds place in the slideshow

    useEffect(() => {

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
        <div className={classes.homeContainer}>
            <div className="section">
                <div id="outpostWithFlagSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <Link to="welcome"
                            smooth={true}
                            duration={500}
                            style={{ color: "white", flexBasis: "100%" }}>
                            <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                        </Link>
                    </div>
                </div>

                <div id="turfSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <Link to="welcome"
                            smooth={true}
                            duration={500}
                            style={{ color: "white", flexBasis: "100%" }}>
                            <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                        </Link>
                    </div>
                </div>

                <div id="largeOutpostSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <Link to="welcome"
                            smooth={true}
                            duration={500}
                            style={{ color: "white", flexBasis: "100%" }}>
                            <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                        </Link>
                    </div>
                </div>

                <div id="squatRacksSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <Link to="welcome"
                            smooth={true}
                            duration={500}
                            style={{ color: "white", flexBasis: "100%" }}>
                            <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                        </Link>
                    </div>
                </div>

                <div id="olympicPadsSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <Link to="welcome"
                            smooth={true}
                            duration={500}
                            style={{ color: "white", flexBasis: "100%" }}>
                            <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                        </Link>
                    </div>
                </div>

                <div id="smallOutpostSlide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <Link to="welcome"
                            smooth={true}
                            duration={500}
                            style={{ color: "white", flexBasis: "100%" }}>
                            <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                        </Link>
                    </div>
                </div>

            </div>

            <div id="info" className='section'>
                <h1 className='sectionHeader'>Outpost Jersey Shore</h1>
                <p className='sectionCaption'>
                    Outpost Jersey Shore is a 24/7-365 day Strength and Conditioning Facility located in Monmouth County.
                    With flexible membership options, and availability of space and time slots for trainers and other fitness professionals,
                    Outpost is the Jersey Shore's fitness and performance hub. Packed into our garage gym set up is everything you need for a killer workout, including:
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

            <div id="training" className='section redBackground'>
                <h1 className='sectionHeader'>Join our community</h1>
      
                <Button className='button'
                    variant="contained"
                    size="large"
                    href="https://theoutpost.gymmasteronline.com/portal/signup">
                    SIGN UP
                </Button>

                <Button className='button'
                    variant="contained"
                    size="large"
                    href="https://forms.gle/ARkPTHWgBxu76Pny7">
                    LEARN MORE
                </Button>
            </div>
        </div>

    )
}
