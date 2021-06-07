import React from 'react'
import './Login.css'
import bankService from './services/Bank_service'
import { Formik } from 'formik';


class Login extends React.Component {

    // state = {
    //     accno: '',
    //     password: ''
    // }


    // accnoChange = (event) => {
    //     this.setState({
    //         accno: event.target.value
    //     })

    // }
    // passwordChange = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    handleSubmit = (values) => {
        // event
        // event.preventDefault();
        // alert("AccountNumber:" + this.state.accno)
        // alert("password:" + this.state.password)
        // console.log(values);
        bankService.login({
            accno: this.state.accno,
            password: this.state.password

        })
            .then(data => {
                localStorage.setItem("token","1234");
                this.props.history.push("/dashboard");

            })
            .catch(error => {


                alert(error.response.data.message)
            })


    }

    render() {

        return <div className="container">
            <h1>Welcome to SBI</h1>


            <Formik
                initialValues={{

                    accno: '',
                    password: ''


                }}
                validate={values => {

                    const errors = {};
                    if (!values.accno) {

                        errors.accno = "Account number is required";
                    }
                    if (values.accno.lenght<=2) {

                        errors.accno = "Account number lenth must be  greater than 2";
                    }
                    const result =/^[0-90]*$/.test(values.accno);
                    if(result==false) {

                        errors.accno = "Account number should only contain numbers";
                    }

                    if (!values.password) {

                        errors.password = "Account number is required"
                    }
                    return errors;
                }}
                onSubmit={(values => {

                    this.handleSubmit(values)


                })}
            >


                {
                    (props) => (<form onSubmit={props.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="accno"><b>Account number:</b>
                                <input onChange={props.handleChange} type="text" name="accno" className="form-control" />
                                {props.errors.accno}
                            </label>
                        </div>
                        <div className="mb-3">
                            <label><b>Password:</b>
                                <input onChange={props.handleChange} type="text" name="password" className="form-control" />
                                {props.errors.password}
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary" value="Submit">login</button>
                    </form>
                    )


                }

            </Formik>



        </div>


    }
}
export default Login