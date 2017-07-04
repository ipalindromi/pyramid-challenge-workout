import React from 'react'
import PropTypes from 'prop-types'
import plateCalculator from 'plate-calculator'

const _calculateSeries = (selectedDifficulty,
	max,
	startingWeight,
	smallestWeight = 2.5,
	units = 'lbs') => {

	if (selectedDifficulty === undefined) {
		throw new Error('Unrecognized difficulty level');
	}

	// SET ALL THE DIFFICULTY VARIABLES
	// ----------------------------------
	let sets = selectedDifficulty.sets;
	let percentOfMax = selectedDifficulty.percentOfMax / 100;

	// This is the weight that will be lifted for 1 rep
	let goalMaxWeight = max * percentOfMax;

	const smallestIncrease = smallestWeight * 2;

	let series = [];

	// This keeps track of whenever we can't exactly match weight increase to plate sizes
	let drift = 0;

	// TODO : To be used in full pyramid 1 == forward -1 == backward
	let direction = 1;

	// The weight being lifted this set
	let currentWeight = startingWeight;

	let set = 1;

	// FIXME : This loop should be broken out for directionality
	for (set; set <= 15; set++) {

		// This is the weight we'd want if everything were perfectly divisible.
		// Assume the first full set is with just the bar
		// FIXME: Assumes barbell
		var goal = (goalMaxWeight - (startingWeight)) / (15 - 1);

		// This is the nearest weight to the plates that we actually have
		var nearest = Math.round(goal / smallestIncrease) * smallestIncrease;

		// Increase the drive by how much we missed the plate by
		drift += (goal - nearest);

		var increase = nearest;

		// The final increase gets adjusted by the drift whenever it becomes
		// enough to be registered in our smallest available units
		if (Math.abs(drift) > smallestIncrease) {
			if (drift > -1) {
				increase += smallestIncrease;
				drift -= smallestIncrease
			} else {
				increase -= smallestIncrease;
				drift += smallestIncrease
			}
		}

		if (increase < 0 || set === sets || set === 15) {
			increase = 0;
		}

		const reps = 15 - (set - 1);

		if (currentWeight + increase > goalMaxWeight) {
			increase = goalMaxWeight - currentWeight;
		}

		currentWeight = Math.round(currentWeight);

		series.push(
			{
				set,
				reps,
				increase,
				weight: currentWeight,
				totalWeight: currentWeight * reps,
				weightUnits: plateCalculator.calculate(currentWeight),
			}
		);

		currentWeight += increase;
	}

	// We want to work back down to startingWeight
	if (sets > 15) {
		// Do not repeat the 1 rep max set
		const reverse = series.slice(0, 14).reverse().map((set, idx) => {
			// Slice shallow copies
			return Object.assign({}, set, {
				set: 16 + idx,
				increase: (idx == 13) ? 0 : set.increase * -1,
			});
		});

		series = series.concat(reverse);
	}

	return series;
};

const ChallengeReport = (props) => {
	let content = false;

	if (!props.selectedExercise) {
		content = (
			<p key='exercise' style={{ padding: 25 }} className="bg-warning text-center">
				Your workout will be generated once you enter an excercise
			</p>
		);
	} else if (!props.maxForLift) {
		content = (
			<p key='max' style={{ padding: 25 }} className="bg-warning text-center">
				Your workout will be generated once you enter your one rep maximum for {props.selectedExercise}
			</p>
		);
	}

	if (!content) {
		const series = _calculateSeries(
			props.selectedDifficulty,
			props.maxForLift,
			45
		);

		let totalWeight = 0;
		let totalReps = 0;
		const rows = series.map((set, idx) => {
			totalWeight += set.totalWeight;
			totalReps += set.reps;

			let plateSet = [];

			if (set.weightUnits && set.weightUnits.plates) {
				set.weightUnits.plates.forEach((plate) => {
					plateSet.push(`${plate.qty}x${plate.plateWeight}`);
				})

			}

			// FIXME : un-hardcode to imperial
			return (
				<tr key={idx} title={plateSet.join(', ') + ' pound plates'}>
					<td className="">{set.set}</td>
					<td>{set.reps}</td>
					<td>{set.weight}</td>
					<td>{set.increase}</td>
					<td>{set.totalWeight}</td>
				</tr>
			);
		});

		content = (
			<div>
				<h1 style={{ margin: 0, padding: 0 }} className="text-center">
					Let's {props.selectedExercise.name}!</h1>
				<hr/>
				<table className="table table-bordered table-striped">
					<thead>
					<tr>
						<th>Set</th>
						<th>Reps</th>
						<th>Weight</th>
						<th>Increase</th>
						<th>Total Weight</th>
					</tr>
					</thead>
					<tbody>
					{rows}
					<tr>
						<td colSpan="2">Total Reps:</td>
						<td>{totalReps}</td>
						<td>Total Weight:</td>
						<td>{ totalWeight }</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}

	return (
		<div>
			{ content }
		</div>
	);
};

ChallengeReport.propTypes = {
	selectedExercise: PropTypes.object.isRequired,
	selectedDifficulty: PropTypes.object.isRequired,
	maxForLift: PropTypes.number.isRequired,
};

export default ChallengeReport;
