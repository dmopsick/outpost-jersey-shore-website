import Button from '@mui/material/Button';

export default function Coaching() {
  return (
    <div className='padding-bottom page-container black-background'>
      <h1 className="section-header">Coaching hours</h1>
      <ul className='info-list margin-top' style={{fontSize: '24px'}}>
        <li>Monday: 7-10 am / 4-6 pm</li>
        <li>Tuesday: 7-10 am</li>
        <li>Wednesday: 7-10 am</li>
        <li>Thursday: 8-10 am
        </li>
        <li>Friday: 7-10 am</li>
      </ul>

      <p className='large-body-text margin-top'>
        For the times listed, please be in the gym 30 minutes before the end
        time — so in by 9:30 am for a 10 am &quot;close&quot;.
      </p>

      <div className='center-text'>
        <Button className='button'
          variant="contained"
          size="small"
          target="_blank"
          href="https://forms.gle/ARkPTHWgBxu76Pny7">
                    Learn More
        </Button>
      </div>
    </div>
  );
}
