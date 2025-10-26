import Button from '@mui/material/Button';

export default function AboutUs() {

    return (
        <div className='page-container black-background'>
            <div className='flex-container'>
                <div className='flex-half'>
                    <img src='/images/about-us-hero.png' alt='The inside of the Outpost Jersey Shore gym' className='about-us-hero' />
                </div>
                <div className='flex-half'>
                    <h1 className="section-header">About Outpost Jersey Shore</h1>
                    <p className='body-text'>
                        &emsp;Outpost Jersey Shore is your “fitness playground” for the athlete in all of us. Far away from overcrowded gyms, cookie-cutter HIIT classes, and perpetual monthly contracts you will find the haven of Outpost Jersey Shore.
                    </p>

                    <p className='body-text'>
                        &emsp;Whether you are a young athlete pursuing the next levels of your sport, an adult looking to explore or maintain some athletic pursuits after the varsity days are done, or you are simply someone looking for a change of pace from the Planet Fitness-nonsense, Outpost Jersey Shore is the right environment and community for you.
                    </p>

                    <p className='body-text'>
                        &emsp;For our coaching clients, you will get to explore human movement in a fun and dynamic way that will challenge your old ideas of “athleticism” and longevity. Our coaching style is rooted in the fundamentals of strength training and athletic development before we layer on our creative approach to becoming better movers and better problem solvers. Additionally we offer a variety of coaching services - 1:1, small group, large group, hybrid / remote - to ensure accessibility to the Outpost for those interested in our services.
                    </p>

                    <p className='body-text'>
                        &emsp; =For our gym members, our environment is unlike any other you will find available to the public. You have 24/7, 365-day access to a collegiate-quality weight room. Multiple squat racks and deadlift platforms, dumbbells from five pounds up to 155 pounds, and several plate-loaded machines ensure your strength demands are readily met when you enter our facility. Nearly 25 yards of turf with sleds, battle ropes, medicine balls, and a conveniently placed Spikeball net allow your inner athlete to explore and move dynamically instead of being stuck on the leg press or recumbent bike.
                    </p>

                    <p className='body-text'>
                        &emsp;=Our coaches and owners care deeply about each of our members and bring a passion for connection and service to each interaction in our gym. Both Coach Shane and Coach Rob promote a holistic approach to health and performance with our coaching clients, an approach rooted in their own lifestyles, hobbies, and interests. With our monthly events, collaborations, fundraisers, and other community-based efforts, our network of members and “gym friends” runs deep and is a living testimony of the bond formed by our family at Outpost Jersey Shore.
                    </p>
                    <p className='body-text'>
                        &emsp;We are excited for you to come check us out and find out what part(s) of Outpost are best for you and your fitness journey!
                    </p>
                    <p className='body-text'>
                        &emsp;To learn more, hit the link below and you will hear from Coach Shane or Coach Rob within 48 hours.
                    </p>
                </div>
            </div>

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
    )

}
