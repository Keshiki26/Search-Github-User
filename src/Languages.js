import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default class Languages extends Component {
	getColor() {
		let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		while (color.length <= 6) {
			color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		}
		return color;
	}
	render() {
		return (
			<div className="piechart-container">
				<PieChart
					className="piechart"
					labelPosition="65"
					labelStyle={{
						fontSize: '5px',
						fontWeight: '500',
					}}
					lengthAngle={360}
					lineWidth={15}
					paddingAngle={0}
					radius={50}
					rounded
					startAngle={0}
					viewBoxSize={[100, 100]}
					label={({ dataEntry }) =>
						`${dataEntry.title}, ${Math.round(dataEntry.percentage)}%`
					}
					animate
					animationDuration={1000}
					animationEasing="ease-out"
					data={this.props?.languages.map((repo, index) => {
						return {
							key: index,
							title: repo[0],
							value: repo[1],
							color: this.getColor(),
						};
					})}
				/>
			</div>
		);
	}
}
