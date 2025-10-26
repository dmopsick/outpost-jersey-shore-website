import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Home() {

    return (
        <div className='home-container center-text black-background'>
            <div>
                <div id="landing-page-image" className='sectionWithBackgroundImage'>
                    <h1 className='hero-text'>
                        A fitness playground for the kid in all of us
                    </h1>
                </div>
            </div>

            <div className='bg-gray'>
                <div className='flex-container'>
                    <Card className='card' sx={{ minWidth: 300 }}>
                        <CardContent>
                            <h1>Community</h1>
                            <img src='/images/community1.png' alt='Community at the Outpost' className='rounded-image' />
                        </CardContent>
                    </Card>

                    <Card className='card' sx={{ minWidth: 300 }}>
                        <CardContent>
                            <h1>Accessibility</h1>
                            <img src='/images/accessibility1.png' alt='Accessibility at the Outpost' className='rounded-image' />
                        </CardContent>
                    </Card>

                    <Card className='card' sx={{ minWidth: 300 }}>
                        <CardContent>
                            <h1>Performance</h1>
                            <img src='/images/performance1.png' alt='Performance at the Outpost' className='rounded-image' />
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h1 className='section-subheader'>Your health is too important to waste time at the wrong gym</h1>
                <h2><del>Overcrowded commercial gyms</del></h2>
                <h2><del>Watered down group coaching</del></h2>
                <img src='/images/section-3-hero.png' alt='Outpost Beach Workout' className='section-3-hero' />
                <Button className='button'
                    variant="contained"
                    size="small"
                    target="_blank"
                    href="https://forms.gle/ARkPTHWgBxu76Pny7">
                    Talk to the owner
                </Button>
            </div>

            <div className='bg-gray flex-container black-text'>
                <div className='flex-half'>
                    <h1 className='section-header'>We’re not just here to charge you a monthly membership you will forget about.</h1>
                    <p className='large-body-text'>We care deeply about you, your training journey, and providing a <strong>unique and empowering</strong> environment to foster your fitness.</p>
                    <p className='large-body-text'>Our community is built <strong>BY and FOR the people</strong>, and we are committed to making sure our space is accessible to all who want to be a part of the Outpost</p>
                    <ul className='info-list margin-top'>
                        <li className='info-list-item'>Affordable monthly-memberships with <a href='#'>no contracts ever</a></li>
                        <li className='info-list-item'>Expert coaching services available through a multitude of avenues - private, small group, hybrid, or fully remote coaching. </li>
                        <li className='info-list-item'>24/7 access to one of the best training environments the Jersey Shore has to offer</li>
                        <li className='info-list-item'><del>Handsome, funny, witty, humble owners</del></li>
                    </ul>

                    <Button className='button'
                        variant="contained"
                        size="small"
                        target="_blank"
                        href="https://forms.gle/ARkPTHWgBxu76Pny7">
                        Learn More
                    </Button>

                </div>
                <div className='flex-half'>
                    <img src='/images/section-4-hero.png' alt='The Outpost community in action' className='section-4-hero' />
                </div>
            </div>

        </div>

    )
}
