const Message = (props) => {
	if (props.children) {
		return (
			<div>
				{props.children}
			</div>
		);
	}
	return null;
}
