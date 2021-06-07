import React from 'react';

class Deposit extends React.Component {

    state = {
        accno: '',
        password: '',
        amount: ''
    }


    accnoChange = (event) => {
        this.setState({
            accno: event.target.value
        })

    }
    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    amountChange = (event) => {
        this.setState({
            amount: event.target.value
        })

    }
    handleSubmit = (event) => {
        alert("AccountNumber:" + this.state.accno)
        alert("password:" + this.state.password)
        alert("Amount:" + this.state.amount)

    }
    render() {

        return <div className="container">
            <h1>Cash Deposit Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label ><b>Account number:</b>
                        <input onChange={this.accnoChange} type="text" name="accno" className="form-control" />
                    </label>
                </div>
                <div className="mb-3">
                    <label><b>Password:</b>
                        <input onChange={this.passwordChange} type="text" name="accno" className="form-control" />
                    </label>
                </div>
                <div class="mb-3">
                    <label><b>Amount:</b>
                        <input onChange={this.amountChange} type="text" name="amount" className="form-control" />
                    </label>
                </div>
                <button type="submit" class="btn btn-primary" value="Submit">Deposit</button>
            </form>
        </div>

    }
}
export default Deposit