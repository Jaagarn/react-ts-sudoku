import { expose } from 'comlink'
import { recursionStartString } from '../solver/CrooksRecursion'

const crooksRecursionWorker = {
    recursionStartString
}

export type RunCrooksRecursionWorker = typeof crooksRecursionWorker

expose(crooksRecursionWorker)