import { Grid, Typography, Link } from '@material-ui/core';
import React, { Component } from 'react';

export default class RepoInfo extends Component {
	render() {
		return (
			<Grid item container xs={12} className="userinfo-container">
				<Grid item xs={12} container className="userinfo-box">
					<Grid item xs={12} className="userinfo-upper">
						<Typography className="userinfo-upper-text">Repo Info</Typography>
					</Grid>
					<Grid item xs={12} container className="userinfo-bottom">
						<Grid item xs={12} container className="userinfo-info">
							<Grid item xs={6} className="userinfo-info-top">
								<div className="userinfo-info-texts">
									<Typography className="userinfo-info-id">
										Repository Name
									</Typography>
									<Typography className="repoinfotext">
										{this.props.currentRepo?.name}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={6} className="userinfo-info-bottom linkxd">
								<div className="userinfo-info-texts">
									<Typography className="userinfo-info-id">
										Total commits made
									</Typography>
									<Typography className=" repoinfotext">
										{this.props?.commits}
									</Typography>
								</div>
							</Grid>
						</Grid>
						<Grid item xs={12} container className="userinfo-info">
							<Grid item xs={6} className="userinfo-info-top">
								<div className="userinfo-info-texts">
									<Typography className="userinfo-info-id">
										Creation Date
									</Typography>
									<Typography className="userinfo-info-name repoinfotext">
										{this.props.currentRepo.created_at?.substring(0, 10)}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={6} className="userinfo-info-bottom linkxd">
								<div className="userinfo-info-texts">
									<Typography className="userinfo-info-id">Owner</Typography>
									<Typography className="repoinfotext">
										<a
											target="_blank"
											href={this.props.currentRepo.owner?.html_url}
										>
											{this.props.currentRepo.owner?.login}
										</a>
									</Typography>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
