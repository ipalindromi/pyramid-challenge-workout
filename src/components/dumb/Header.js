import React from 'react'
import '../../styles/header.css'

const Header = (props) => {
	return (
		<header className="header padding--m">
			<h1 className="header--heading1">
				The Pyramid Challenge
			</h1>
			<h2 className="header--heading2">
				A super fun way to just about kill yourself, by <a href="http://dustinbaldwin.com" target="_blank" rel="noopener noreferrer">Dustin
				Baldwin</a>
			</h2>
			<div className="instructions">
				<h3>Rules / Instructions / More-What-You'd-Call-Guidelines</h3>
				<ol>
					<li>Choose an exercise</li>
					<li>Choose a difficulty</li>
					<li>Enter the maximum weight you can lift for a single rep for the exercise you
						chose
					</li>
					<li>Try to complete the generated workout as quickly as possible <strong>WITH GOOD
						FORM!</strong>. Track your time!
					</li>
					<li>When you miss a rep, the game is over. You'll do better next time!</li>
				</ol>
			</div>
		</header>
	);
};

export default Header;