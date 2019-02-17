import pipe from './pipe';

export const enhanceMethods = (obj, ...fns) => {
	const keys = Object.keys(obj);
	const vals = Object.values(obj);
	const enhanceds = vals.map(f => pipe(f, ...fns));

	return objetify(keys, enhanceds);
};

export const objetify = (keys, vals) => {
	return keys.reduce(function(obj, key, i){
		obj[key] = vals[i]
		return obj;
	}, {});
};