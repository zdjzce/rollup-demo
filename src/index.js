// src/index.js

import _ from 'lodash'
import { add } from "./util";
import { a } from './module-a'

console.log('a:', a)

console.log(add(1, 2, 3));

const clone = _.cloneDeep({test: 1})
console.log('clone:', clone)