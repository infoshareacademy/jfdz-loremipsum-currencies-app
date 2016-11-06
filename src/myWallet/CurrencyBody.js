import React from 'react'
import CurrencyRow from './currencyRow/CurrencyRow'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    myCurrency: state.currency.myCurrency,
    currencies: state.currency.currency
})

const CurrencyAdd = ({currencies, myCurrency}) => (
    <tbody>
    {currencies
        .filter( currency => myCurrency.find(item => item.code === currency.code) !== undefined)
        .map(
            (currency, index) =>
                <CurrencyRow
                    key = { currency.code }
                    num = { index + 1 }
                    code = { currency.code }
                    name = { currency.currency }
                    quantity = {myCurrency.find(item => item.code === currency.code).quantity}
                    value =  { currency.mid } />
        )}
    </tbody>
)


export default connect(mapStateToProps)(CurrencyAdd);