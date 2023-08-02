// src/index.js

import { cloneDeep } from 'lodash/cloneDeep'
import { add } from "./util";
console.log(add(1, 2, 3));

const clone = cloneDeep({test: 1})
console.log('clone:', clone)