import Link from "next/link";
const photos = [
	{ id: "1", src: "http://placekitten.com/200/200" },
	{ id: "2", src: "http://placebear.com/200/200" },
];

export default ({ children, modal }) => {
	return (
		<div>
			{children}
			<div>
				<div className='grid grid-rows-2 grid-cols-auto gap-4'>
					<div>{modal}</div>
				</div>
			</div>
		</div>
	);
};
