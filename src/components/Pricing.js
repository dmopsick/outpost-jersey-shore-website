import Button from '@mui/material/Button';

export default function Pricing() {
  return (
    <div className='padding-bottom page-container black-background'>
      <h1 className='section-header'>Pricing</h1>
      <ul className='info-list margin-top'>
        <li>Outpost 24/7 Membership - $55/month
          <ul>
            <li>24/7-365 self service access to the best gym at the Jersey Shore!</li>
          </ul>
        </li>

        <li>Adult Group Fitness - $195/month
          <ul>
            <li>Unlimited sessions during our <em>Adult Group Fitness sessions</em> + 24/7 access outside of the coaching hours</li>
          </ul>
        </li>

        <li>Private training (1 to 8 people) - $110/hour
          <ul>
            <li>Custom programming and the undivided attention of one of our coaches</li>
            <li>Session rate can be split up to 8 people for small group training</li>
            <li>5 sessions x $500 ($100/session) + 10 sessions x $900 ($90/session)</li>
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
  );
}
