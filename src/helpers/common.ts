export function unwrapPromise<TData>(promiseLike: Promise<TData>): Promise<[TData, null] | [null, unknown]>;
export async function unwrapPromise<TData>(promiseLike: Promise<TData>): Promise<[TData, null] | [null, unknown]> {
	try {
		const result = await promiseLike;
		return [result, null];
	} catch (error) {
		return [null, error];
	}
}
