import {Templates} from 'botbuilder-lg';

const templates = Templates.parseFile('data/generator.lg');
const result = templates.evaluate('roles');

console.log(result);