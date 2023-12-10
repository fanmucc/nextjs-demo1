export default ({ children, team, analytics }) => {
	return (
		<div>
			{/* {children} */}
			<div>
				这是平行路由
				<div>{analytics}</div>
				<div>{team}</div>
			</div>
		</div>
	);
};
