import React from 'react'
import Section from './Section'

const Header = (props) => {
	return (
		<Section className="header">
			<h1 className="header--heading1">
				The Pyramid Challenge
			</h1>
			<h2 className="header--heading2">
				A super fun way to kill yourself, by <a href="http://dustinbaldwin.com" target="_blank">Dustin
				Baldwin</a>
			</h2>
			<Section className="instructions">
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
			</Section>
		</Section>
	);
};

export default Header;
