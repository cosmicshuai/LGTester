import {Templates} from 'botbuilder-lg';

const templates = Templates.parseFile('data/a.lg');
const templateName = templates.allTemplates[0].name;
const result = templates.evaluate(templateName);

console.log(result);