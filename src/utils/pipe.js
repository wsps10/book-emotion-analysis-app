const pipe = (...fns) => param => fns.reduce((val, fn) => fn(val), param);
export default pipe;