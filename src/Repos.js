import { Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';

export default function Repos(props) {
	return (
		<Grid container item xs={12}>
			<Grid item xs={12} container>
				<Grid item xs={12} className="userinfo-upper">
					<Typography className="userinfo-upper-text">
						User Repositories
					</Typography>
				</Grid>
				<Grid item xs={12} container className="userinfo-bottom repodisplay">
					<Grid item xs={12} className="repoinfo-desc">
						Click on a repo to see it's stats
					</Grid>
					<Grid item xs={12} container className="repo-info">
						{props.repos.map((repo, index) => {
							return (
								<Grid key={index} item xs={4} sm={3} className="repo-info-top">
									<IconButton onClick={() => props.stats(repo)}>
										<LibraryBooksTwoToneIcon
											className="repo-info-icon"
											fontSize="large"
											color="secondary"
										/>
									</IconButton>

									<Typography className="repo-info-text">
										{repo.name}
									</Typography>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
