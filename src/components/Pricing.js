import Button from '@mui/material/Button';

export default function Pricing() {
    return (
        <div className='padding-bottom page-container black-background'>
            <h1 className='section-header'>Pricing</h1>
            <ul className='info-list margin-top'>
                <li>Outpost 24/7 Membership - $50/month
                    <ul>
                        <li>24/7-365 self-access to the best gym at the Jersey Shore! </li>
                    </ul>
                </li>

                <li>Adult Group Fitness - $175/month
                    <ul>
                        <li>Unlimited sessions during our Adult Group Fitness sessions + 24/7 access outside of the coaching hours</li>
                    </ul>
                </li>

                <li>Private training (1-4 people) - $100/hour at Outpost + $120/hour for offsite sessions
                    <ul>
                        <li>Custom programming and the undivided attention of one of our coaches</li>
                        <li>Session rate can be split up to 4 people for small group training</li>
                        <li>5 sessions x $450 ($90/session) + 10 sessions x $800 ($80/session)</li>
                    </ul>
                </li>

                <li>After School Strength & Speed - $250 for 8 weeks of 2 sessions per week
                    <ul>
                        <li>$25 for single visits</li>
                    </ul>
                </li>

                <li>Custom Online Programming - $150 / month
                    <ul>
                        <li>4 weeks of custom workouts</li>
                        <li>Two (2) 30-minute calls or 1 in-person training session</li>
                        <li>Text access to coaches (48 hour grace period)</li>
                        <li>Includes monthly-membership to Outpost but you do not have to workout at our facility</li>
                    </ul>

                </li>
            </ul>

            <div className='center-text'>
                <Button className='button'
                    variant="contained"
                    size="small"
                    target="_blank"
                    href="https://theoutpost.gymmasteronline.com/portal/signup">
                    Online Sign Up
                </Button>
            </div>
        </div>
    )

}
