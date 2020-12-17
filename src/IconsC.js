import React from 'react';
import BookSharpIcon from '@material-ui/icons/BookSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import { Grid, Typography } from '@material-ui/core';

export default function IconsC(props) {
	const icon = () => {
		if (props.name === 'Repos') {
			return <BookSharpIcon className="info-icon" fontSize="large" />;
		} else if (props.name === 'Followers') {
			return <GroupAddSharpIcon className="info-icon" fontSize="large" />;
		} else {
			return <PeopleAltSharpIcon className="info-icon" fontSize="large" />;
		}
	};
	return (
		<Grid item xs={12} md={4}>
			<div className="info-icon-box">
				<div className="info-info">
					{icon()}
					<div className="icon-text-box">
						<Typography className="info-icon-number">
							{props.currentUser}
						</Typography>
						<Typography className="info-icon-text">{props.name}</Typography>
					</div>
				</div>
			</div>
		</Grid>
	);
}
