import React from "react";
import './AppFetch.css';
class AppFetchGH extends React.Component {
  	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://api.github.com/users"
)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<pre>{/*JSON.stringify(items, null, 2)*/}</pre>
			 <h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<li key = { item.id } >
					login: { item.login}
					</li>
				))
			} 
		</div>
	);
}
}

export default AppFetchGH;
