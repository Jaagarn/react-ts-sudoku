import { expose } from 'comlink'
import { recursionStart } from '../solver/CrooksRecursion'

const crooksRecursionWorker = {
    recursionStart
}

export type RunCrooksRecursionWorker = typeof crooksRecursionWorker

expose(crooksRecursionWorker)