import React from 'react';

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    myCurrency: state.currency.myCurrency,
    currencies: state.currency.currency
})

const CurrencyFoot = ({ currencies, myCurrency }) => (
    <tfoot>
    {/*<tr>
            <td className="text-right" colSpan="5">Sum</td>
            <td className="text-center">
                0
                zł
            </td>
            <td></td>
        </tr>*/}
    </tfoot>
)

export default connect(mapStateToProps)(CurrencyFoot);

