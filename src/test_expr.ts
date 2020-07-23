import {Expression, Options} from 'adaptive-expressions';

const expr = 'add(1,2)';
const parsed = Expression.parse(expr);
const scope = {};
const opt = new Options();
let result: any;
let error: string;
({value: result, error: error} = parsed.tryEvaluate(scope, opt));
if (!error) {
    console.log(`The evaluated result is: ${result}`);
} else {
    console.log(`Error Occurred: ${error}`);
}
