export default ({ children, team, analytics }) => {
	return (
		<div>
			{/* {children} */}
			<div>
				这是平行路由
				<div className='grid grid-rows-2 grid-cols-2 gap-4'>
					<div className='col-span-1 border-solid border-1 shadow-sm p-16'>
						{analytics}
					</div>
					<div className='col-span-1 border-solid border-1 shadow-sm p-16'>
						{team}
					</div>
				</div>
			</div>
		</div>
	);
};
