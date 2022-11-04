import uniqueId from './uniqueId.js';

console.time('test duration');

const iterations = (typeof process !== 'undefined') ? (!isNaN(process.argv[2]) ? process.argv[2] : (console.warn(`invalid argument: ${process.argv[2]}`), 1000)) : 1000;

console.log('starting test...');
console.log(`${iterations} iterations without transformer function argument, ${iterations} iterations with transformer function...`);
console.log(`it will take at least ${iterations * 2}ms to complete...`);

// example transformerFunction
// it will simply prefix the timestamp with a string
const transformerFunction = s => `prefixed_${s}`;

const results = [];

const rewriteLine = (typeof process !== 'undefined') ? text => {
    process.stdout.write(text);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
} : () => { };

const addResult = (transformerFunction) => {
    const result = uniqueId(transformerFunction);
    results.push(result);
    rewriteLine(`current id: ${result}`);
};

for (let i = 0; i < iterations; i++) addResult();

for (let i = 0; i < iterations; i++) addResult(transformerFunction);

console.log('');

if ((new Set(results)).size === results.length) {
    console.log('everything ok. all ids are different.');
} else {
    console.log('something is wrong. there are duplicate ids');
}

console.timeEnd('test duration');
