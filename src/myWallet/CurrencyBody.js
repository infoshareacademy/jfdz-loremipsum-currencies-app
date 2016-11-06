import React from 'react'
import CurrencyRow from './CurrencyRow'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    myCurrency: state.currency.myCurrency,
    currencies: state.currency.currency
})

const CurrencyAdd = ({currencies, myCurrency}) => (
    <tbody>
    {currencies
        .filter( currency => myCurrency.indexOf(currency.code) !== -1)
        .map(
            (currency, index) =>
                <CurrencyRow
                    key = { currency.code }
                    num = { index + 1 }
                    code = { currency.code }
                    name = { currency.currency }
                    value =  { currency.mid } />
        )}
    </tbody>
)


export default connect(mapStateToProps)(CurrencyAdd);