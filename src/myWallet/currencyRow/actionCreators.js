import { CHANGE_QUANTITY } from './actionTypes'

export function changeQuantity(quantity) {
    return {
        type: CHANGE_QUANTITY,
        quantity: quantity
    }
}
