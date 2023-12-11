import { NextRequest } from "next/server";

export const getDataDemo = async (request, content) => {
	/**
	 * request 请求参数
	 * content  目前context 只有一个值就是 params，它是一个包含当前动态路由参数的对象
	 */
	const res = await fetch("https://dog-api.kinduff.com/api/facts");
	const data = await res.json();
	return NextResponse.json({ data });
};
