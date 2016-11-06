import { CHANGE_QUANTITY } from './actionTypes'

export function changeQuantity(quantity, code) {
    return {
        type: CHANGE_QUANTITY,
        quantity: quantity,
        code: code
    }
}
