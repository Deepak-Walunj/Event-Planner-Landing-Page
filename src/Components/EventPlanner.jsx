import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer.jsx';
import { useNavigate } from 'react-router-dom'

const EventPlanner = () => {
    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path)
        }
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'> 
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                
            </section>
                <section className='events_categories'>
                    <ul>
                    <h2>Social Events:</h2>
                        <li onClick={() => handleNavigation('/social-events')}>Birthday parties</li>
                        <li onClick={() => handleNavigation('/social-events')}>Anniversary celebrations</li>
                        <li onClick={() => handleNavigation('/social-events')}>Wedding receptions</li>
                        <li onClick={() => handleNavigation('/social-events')}>Baby showers</li>
                        <li onClick={() => handleNavigation('/social-events')}>Graduation parties</li>
                        <li onClick={() => handleNavigation('/social-events')}>Family reunions</li>
                    </ul>
                    <ul>
                        <h2> Entertainment Events:</h2>
                        <li onClick={() => handleNavigation('/entertainment-events')}>Concerts</li>
                        <li onClick={() => handleNavigation('/entertainment-events')}>Music festivals</li>
                        <li onClick={() => handleNavigation('/entertainment-events')}>Film screenings</li>
                        <li onClick={() => handleNavigation('/entertainment-events')}>Comedy shows</li>
                        <li onClick={() => handleNavigation('/entertainment-events')}>Art exhibitions</li>
                        <li onClick={() => handleNavigation('/entertainment-events')}>Cultural events</li>
                    </ul>
                    <ul>
                        <h2>Community Events:</h2>
                        <li onClick={() => handleNavigation('/community-events')}>Fundraising events</li>
                        <li onClick={() => handleNavigation('/community-events')}>Charity galas</li>
                        <li onClick={() => handleNavigation('/community-events')}>Volunteer drives</li>
                        <li onClick={() => handleNavigation('/community-events')}>Neighborhood block parties</li>
                        <li onClick={() => handleNavigation('/community-events')}>Community festivals</li>
                        <li onClick={() => handleNavigation('/community-events')}>Cultural celebrations</li>
                    </ul>
                </section>
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Easy event creation and management</li>
                        <li>Customizable event templates</li>
                        <li>Guest list management</li>
                        <li>Real-time collaboration</li>
                        <li>Reminders and notifications</li>
                    </ul>
                </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default EventPlanner;
