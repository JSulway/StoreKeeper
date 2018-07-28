import React from 'react';
import PageHeader from './page_header';
import OrdersTable from './components/orders/orders_table';
import ORDERS_DATA from './data/data';

const STATUSES = ['all', 'open', 'shipped'];

class Orders extends React.Component {
	constructor(props) {
		super(props);
		// state variable used to hold which was selected
		this.state = { selectedStatus: 'all' };
	}
	
    render(){
		// pull out the selected status from the state of the component
		const { selectedStatus } = this.state;
		
		const statuses = STATUSES.map((status, i) => {
			// map status' to render an anchor tag
			const className = status === selectedStatus ? 'selectedstatus' : 'status';
			// give it an onclick handler binding it to a component and the status
			// mark the selected status with the selected class name
			return (
				<a key={i} className={className} onClick={this.handleStatusClick.bind(this, status)}>
					{status}
				</a>
			);
		});
		
		// select only the orders that match the selected state
		let orders = ORDERS_DATA;
		if(selectedStatus != 'all'){
				orders = ORDERS_DATA.filter((order) => {
					return order.orderStatus === selectedStatus;
				});
		}
	
		// add status' to markup so it can render	
		// select only the orders that match the selected state
		return(
			<div className='orders'>
				<PageHeader>
					<h1>Orders</h1>

					<div className='status-nav'>{statuses}</div>
				</PageHeader>
				<OrdersTable orders={orders} />
			</div>
		);		
	}
	
	// Click handler added which receives the status that was clicked through the .bind call
	handleStatusClick(status) {
			this.setState({ selectedStatus: status });
	}
}

export default Orders;