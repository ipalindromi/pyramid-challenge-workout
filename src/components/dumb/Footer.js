import React from 'react'

const Footer = () => {
	return (
		<footer className="footer panel panel-default">
			<div className="panel-body">
				<h1>What Is This?</h1>
				<p>
					This is a personal project I threw together because I wanted a fun challenge to help me
					progress past my fatigue limits. I don't have a ton of time, though,
					and was trying to think up a way to break through my limits without spending hours and
					hours doing it. This is the result.
				</p>
				<p>
					The combination of high volume and low rest periods makes for a very challenging, yet
					quick, workout that absolutely accomplishes its goal of training you to fight through
					fatigue. The next time you go for a heavy 5-rep lift, it'll feel like a relief after
					this torture.
				</p>
				<p>
					Hopefully this app makes it easier for others to join in the fun! Pyramid lifting
					schemes are nothing new, of course, but this app helps take some of the guess-work out
					of the progression and keeps you on a consistent path towards progression.
				</p>
				<h2>What's Next?</h2>
				<p>I have a lot of ideas I'd like to implement, as time allows. Most of this stuff isn't too
					difficult, so if you're a coder and want to help out, check out the github page
					 <a href="https://github.com/ipalindromi/pyramid-challenge-workout"> here!</a></p>
				<ul>
					<li>Weight calculator, so you know exactly what to put on the bar.</li>
					<li>More customization of workout parameters</li>
					<li>Ability to save best times / completions locally</li>
					<li>Make site work with metric units</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;