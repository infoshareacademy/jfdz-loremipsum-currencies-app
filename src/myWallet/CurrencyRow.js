import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class CurrencyRow extends Component {

    componentWillMount() {
        this.setState({
            currencySumValue: this.props.mid
        });
    }

    updateSumCurrency(currencyCourse, ev) {
        let updateSum = currencyCourse * ev.target.value;
        this.setState({currencySumValue: updateSum});
    }

    render() {
        return(
            <tr>
                <td className="text-center">{this.props.id}</td>
                <td>{this.props.currency}</td>
                <td className="text-center">{this.props.code}</td>
                <td className="text-center">{this.props.mid} zł</td>
                <td className="text-center">
                    <form>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" defaultValue="1" className="form-count" onChange={this.updateSumCurrency.bind(this, this.props.mid)} />
                        </FormGroup>
                    </form>
                </td>
                <td className="text-center">{this.state.currencySumValue} zł</td>
                <td><Button bsStyle="danger"><FontAwesome name="trash-o" /> Delete</Button></td>
            </tr>
        );
    }
}
