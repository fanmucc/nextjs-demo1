import { Suspense } from "react";

async function getData() {
	let data = new Promise((resolve) => {
		setTimeout(() => {
			return resolve([
				{
					id: 1,
					name: "张三",
				},
				{
					id: 2,
					name: "李四",
				},
			]);
		}, 2000);
	});
	let res = await fetch("http://127.0.0.1:4523/m1/3740351-0-default/test/demo");
	if (!res.ok) {
		// 这会触发最近的 `error.js` 错误边界
		throw new Error("Failed to fetch data");
	}
	return res.json();
	// return await data;
}

export default async () => {
	const {
		data: { list },
	} = await getData();
	return (
		<div>
			<div className='text-3xl'>服务器组件</div>
			<div>
				服务器组件不需要特殊设置，nextjs默认为服务器组件
				<br />
				服务器组件 useState, onClick, 等一些监听事件等无法使用
			</div>
			<div>渲染列表</div>
			<Suspense fallback={<p>Loading feed...</p>}>
				{list?.map((i) => {
					return (
						<div key={i?.id} className='text-xl'>
							{i?.name}
						</div>
					);
				})}
			</Suspense>
		</div>
	);
};
