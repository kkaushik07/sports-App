import React from "react";

const AppBar = () => {
    return(
	<nav class="navbar theme-navbar">
	    {/* Collect the nav links, forms, and other content for toggling  */}
	      <ul class="theme-nav">
	        <li><a class="theme-nav-active" href="#home">Home</a></li>
	        <li><a href="#about">About</a></li>
	        <li><a href="#why">Why</a></li>
	        <li><a href="#plan">Plan</a></li>
	        <li><a href="#faq">FAQ</a></li>
	        <li><a href="#contact">Contact us</a></li>
	      </ul>
	</nav>
    )
}

export default AppBar