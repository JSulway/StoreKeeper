import React from 'react';

const AVAILABLEPAGES = ['Dashboard', 'Orders', 'Catalogue'];

class MainNav extends React.Component {
		
	constructor(props) {
		super(props);
		// page variable used to hold which was selected
		// state it seems is a special variable and a must be used
		// a bespoke one cannot be made
		this.state = { chosenPage: 'Orders' };
	}
	
    render(){
		// pull out the selected chosenpage from the chosenpage of the component
		const { chosenPage } = this.state;
		
		const pagelinks = AVAILABLEPAGES.map((iteratedPage, i) => {
			// loop available pages to render an anchor tags with apt classnames
			const className = iteratedPage === chosenPage ? 'selectedpage' : 'nonselectedpage';
			// give it an onclick handler binding it to a component and the chosenpage
			// mark the current page with the apt class name
			return (
				<a key={i} className={className} onClick={this.handlePageClick.bind(this, iteratedPage)}>
					{iteratedPage}
				</a>
			);
		});
		
		return(
			<div className='main-nav'>{pagelinks}</div>
		);		
	}
	
	// Click handler added which receives the chosenpage that was clicked through the .bind call
	handlePageClick(iteratedPage) {
		this.setState({ chosenPage: iteratedPage });
	}
}

export default MainNav;