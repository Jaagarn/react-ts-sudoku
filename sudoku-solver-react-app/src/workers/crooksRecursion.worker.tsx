import { expose } from 'comlink'
import { recursionStartString, recursionStartStringWithProgress } from '../solver/CrooksRecursion'

const crooksRecursionWorker = {
    recursionStartString,
    recursionStartStringWithProgress
}

export type RunCrooksRecursionWorker = typeof crooksRecursionWorker

expose(crooksRecursionWorker)