"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Button, ConfigProvider, Menu } from "antd";

const getItem = (label, key, icon, children) => {
	return {
		key,
		icon,
		children,
		label,
	};
};

export default ({ children, params }) => {
	const router = useRouter();
	const pathName = usePathname();

	const [theme, setTheme] = useState("light");
	const [items, setItems] = useState([
		getItem("Home", "/", null),
		getItem("About", "/about", null, [
			getItem("About1", "/about/about1"),
			getItem("About2", "/about/about2"),
		]),
		getItem("Dashboard", "/dashboard", null),
	]);

	let [pathKey, setPathKey] = useState(["/"]);

	useEffect(() => {}, [pathName]);
	const onClick = (e) => {
		router.push(e?.key, { scroll: false });
	};

	const subClick = (e) => {
		console.log(e);
		setPathKey(e);
	};
	return (
		<div className='h-100vh min-h-100vh max-h-100vh flex'>
			<div className='w-full min-w-100 max-w-300'>
				<Menu
					className='h-100vh min-h-100vh max-h-100vh'
					theme={theme}
					onOpenChange={subClick}
					onClick={onClick}
					style={{ width: "300px" }}
					defaultOpenKeys={[]}
					openKeys={pathKey}
					selectedKeys={[pathName]}
					mode='inline'
					items={items}
				/>
			</div>
			<div className='w-full text-black p-10 text-lg'>{children}</div>
		</div>
	);
};
