const InventoryItem = ({ name, type, quantity = 0, price = 0 }) => {
	const highValue = (quantity * price > 1000);
	const lowStock = (quantity <= 5);
	return (
		<div>
			<h2>{`${name} (${type}) Qty: ${quantity}`}</h2>
			<Message>
				{(lowStock) ? <p>Warning! Low Stock! Current quantity {quantity}</p> : null}
				{(highValue) ? <p>Alert! High Value threshold met! Value {quantity * price}</p> : null}
			</Message>

		</div>
	);
}
