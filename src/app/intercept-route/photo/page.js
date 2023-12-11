import Link from "next/link";
const photos = [
	{ id: "1", src: "http://placekitten.com/200/200" },
	{ id: "2", src: "http://placebear.com/200/200" },
];

export default () => {
	return (
		<div>
			{photos.map(({ id, src }) => (
				<Link key={id} href={`/intercept-route/photo/${id}`}>
					<img width='100' src={src} />
				</Link>
			))}
		</div>
	);
};
