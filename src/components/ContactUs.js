
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function ContactUs() {

    return(
        <div className='section page-container redBackground center-text'>
            <h1 className='sectionHeader'>Contact GSP</h1>
            <h2 className='section-subheader'>Stop by or hit us up</h2>
           
            <p className='large-body-text margin-top'>
                <a href="mailto:gardenstateperf@gmail.com"
                    style={{
                        color: "white"
                    }}
                >GardenStatePerf@gmail.com </a>
                •
                732-245-7494 
            </p>
            <p className='large-body-text margin-top'>
                1701 Valley Road Unit E, Ocean, NJ 07712
            </p>

            <h2 class='section-subheader' style={{
                marginTop: '25px'
            }}>Social Media</h2>
            <ul className='info-list' style={{
                textDecoration: 'none'
            }}>
                <li className='info-list-item'>
                    <a className='social-icon-link'
                        target="_blank"
                        rel="noreferrer" 
                        href="https://www.instagram.com/shanenolan_/">
                        Instagram<InstagramIcon fontSize='large' />
                    </a>
                </li>
                <li className='info-list-item'>
                    <a className='social-icon-link'
                        target="_blank"
                        rel="noreferrer" 
                        href="https://www.youtube.com/channel/UC_PjfKHV8wfWTIinmjaHPLg">
                        YouTube <YouTubeIcon fontSize='large' />
                    </a>
                </li>
            </ul>
        </div>

    )

}
