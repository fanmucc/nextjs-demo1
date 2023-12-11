const photos = [
	{ id: "1", src: "http://placekitten.com/200/200" },
	{ id: "2", src: "http://placebear.com/200/200" },
];

export default ({ params: { id } }) => {
	console.log("=====", id);
	const photo = photos.find((p) => p.id === id);
	return (
		<img
			style={{
				width: "50%",
				display: "block",
				marginLeft: "auto",
				marginRight: "auto",
			}}
			src={photo.src}
		/>
	);
};
