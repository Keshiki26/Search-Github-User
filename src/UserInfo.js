import { Button, Grid, Typography } from '@material-ui/core';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import React from 'react';
import './UserInfo.css';

export default function UserInfo(props) {
	return (
		<Grid item container xs={12} className="userinfo-container">
			<Grid item xs={12} container className="userinfo-box">
				<Grid item xs={12} className="userinfo-upper">
					<Typography className="userinfo-upper-text">User Info</Typography>
				</Grid>
				<Grid item xs={12} container className="userinfo-bottom">
					<Grid item xs={12} container className="userinfo-info">
						<Grid item xs={12} sm={6} className="userinfo-info-top">
							<img
								src={props.avatar}
								className="userinfo-avatar"
								alt={props.name}
							></img>
							<div className="userinfo-info-texts">
								<Typography className="userinfo-info-name">
									{props.name}
								</Typography>
								<Typography className="userinfo-info-id">
									@{props.username}
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} sm={6} className="userinfo-info-bottom">
							<Button
								className="userinfo-info-button"
								variant="contained"
								color="primary"
								href={props.url}
								target="_blank"
								startIcon={<GroupAddSharpIcon />}
							>
								Follow
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={12} className="userinfo-desc">
						<Typography>{props.desc}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
