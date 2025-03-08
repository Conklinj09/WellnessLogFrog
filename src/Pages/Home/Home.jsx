import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Wellness Log Frog 🐸</h1>
            <p>Track your wellness habits and stay hydrated in a fun and interactive way!</p>
            <p>Log in or sign up to start tracking your daily water intake and wellness journey.</p>
            <div className="home-buttons">
                <a href="/login" className="btn">Login</a>
                <a href="/signup" className="btn">Sign Up</a>
