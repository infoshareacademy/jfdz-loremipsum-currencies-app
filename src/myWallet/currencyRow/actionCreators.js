import { CHANGE_SUM_CURRENCY } from './actionTypes'

export function changeSumCurrency(changedValue) {
    return {
        type: CHANGE_SUM_CURRENCY,
        changedValue: changedValue
    }
}
