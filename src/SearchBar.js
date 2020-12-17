import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';

export default function SearchBar(props) {
	const [term, setTerm] = useState('');

	return (
		<form
			noValidate
			onSubmit={(e) => {
				e.preventDefault();
				props.submitAction(term);
			}}
			className="form-search"
		>
			<TextField
				id="outlined-basic"
				color="secondary"
				label="Search"
				variant="outlined"
				fullWidth
				value={term}
				placeholder="Enter GitHub User"
				onChange={(e) => {
					setTerm(e.target.value);
				}}
				size="small"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</form>
	);
}
