import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchBar from './SearchBar';
import axios from 'axios';
import IconsC from './IconsC';
import UserInfo from './UserInfo';
import Languages from './Languages';
import Repos from './Repos';
import RepoInfo from './RepoInfo';

class App extends React.Component {
	state = {
		currentUser: {},
		found: false,
		userRepos: [],
		languages: [],
		commits: 0,
		currentRepo: {},
	};
	getRepos = (term) => {
		// var counts = {};
		axios
			.get(`https://api.github.com/users/${term}/repos`)
			.then((res) => {
				// for (var i = 0; i < res.data.length; i++) {
				// 	if (res.data[i].language !== null) {
				// 		counts[res.data[i].language] =
				// 			1 + (counts[res.data[i].language] || 0);
				// 	}
				// }
				// this.setState({ languages: Object.entries(counts) });
				this.setState({ userRepos: res.data });
			})
			.catch((res) => {
				console.log('Could not find it');
			});
	};
	statstwo = (repo) => {
		axios
			.get(`${repo.url}/commits`)
			.then((commit) => {
				this.setState({ commits: commit.data.length, currentRepo: repo });
			})
			.catch((err) => {
				console.log('could not find');
			});
	};
	stats = (repo) => {
		axios
			.get(`${repo.languages_url}`)
			.then((language) => {
				this.setState({ languages: Object.entries(language.data) });
			})
			.catch((err) => {
				console.log('could not find');
			});
		this.statstwo(repo);
	};
	submitAction = (term) => {
		this.setState({ found: false, languages: [] });
		axios
			.get(`https://api.github.com/users/${term}`)
			.then((res) => {
				this.setState({ currentUser: res.data, found: true });
			})
			.catch((res) => {
				console.log('Could not find');
				this.setState({ found: false });
			});
		this.getRepos(term);
	};
	render() {
		const user = this.state.currentUser;
		return (
			<div>
				<Grid container className="lol">
					<Grid item xs={12} className="searchBarTop">
						<AppBar color="primary" position="static">
							<Toolbar className="topTitleBar">
								<Typography variant="h6">Search Github User</Typography>
							</Toolbar>
						</AppBar>
					</Grid>

					<Grid item xs={12} container className="rest">
						<Grid item md={2}></Grid>
						<Grid item xs={12} sm={8} spacing={2} container className="issue">
							<Grid item className="SearchContainer" xs={12}>
								<SearchBar submitAction={this.submitAction} />
							</Grid>
							{this.state.found && (
								<div className="no">
									<Grid item container xs={12} className="info-box-box">
										<IconsC currentUser={user.public_repos} name="Repos" />
										<IconsC currentUser={user.following} name="Following" />
										<IconsC currentUser={user.followers} name="Followers" />
									</Grid>
									<UserInfo
										avatar={user.avatar_url}
										name={user.name}
										url={user.html_url}
										username={user.login}
										desc={user.bio}
									/>
									<Grid item container xs={12}>
										<Repos repos={this.state.userRepos} stats={this.stats} />
									</Grid>
									{this.state.languages.length !== 0 && (
										<Grid item container xs={12}>
											<Grid item xs={12} className="nono">
												<Typography
													variant="h5"
													className="userinfo-upper-text"
												>
													Languages Used
												</Typography>
												<Languages languages={this.state.languages} />
											</Grid>
											<Grid item xs={12} className="nono">
												<RepoInfo
													commits={this.state.commits}
													currentRepo={this.state.currentRepo}
												/>
											</Grid>
										</Grid>
									)}
								</div>
							)}
						</Grid>
						<Grid item md={2}></Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default App;
