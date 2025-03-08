import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h2>About Wellness Log Frog</h2>
            <p>
                Wellness Log Frog is a wellness tracking app that helps users monitor their hydration habits and other wellness behaviors. 
                Built with <strong>MongoDB</strong>, it securely stores user data, allowing users to track their daily water intake 
                and other self-care habits over time.
            </p>
            <h3>Key Features:</h3>
            <ul>
                <li>🌿 **Secure Login System** - Users can sign up and log in to manage their personal wellness data.</li>
                <li>🐸 **Water Tracking** - Log your daily water intake in cups and monitor hydration levels.</li>
                <li>📊 **Wellness Data Storage** - Saves all user inputs using a MongoDB database for long-term tracking.</li>
                <li>🌱 **Forest-Themed UI** - A relaxing and immersive experience with a nature-inspired design.</li>
                <li>💃 **Animated Frog Reactions** - Get rewarded with a dancing frog when you log data successfully!</li>
            </ul>
            <p>
                Start your wellness journey today and let the **Wellness Log Frog** help you stay hydrated and healthy!
            </p>
        </div>
    );
}

export default About;
