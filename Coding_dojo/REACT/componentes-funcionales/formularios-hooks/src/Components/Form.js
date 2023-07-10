import React, {useState} from "react";

const Form = (props) => {
    const {inputs, setInputs} = props;
    const [firstNameValidation, setfirstNameValidation] = useState("")
    const [lastNameValidation, setlastNameValidation] = useState("")
    const [emailValidation, setemailValidation] = useState("")
    const [passwordValidation, setpasswordValidation] = useState("")
    const [confirmPasswordValidation, setconfirmPasswordValidation] = useState("")



    const onChange = (e) => {
        
        switch(e.target.name){
            case "firstName":
                (e.target.value.length < 2 && e.target.value.length >0) ? setfirstNameValidation("first name must be at least 2 characters") : setfirstNameValidation("")
                break
            case "lastName":
                e.target.value.length < 2 && e.target.value.length >0 ? setlastNameValidation("last name must be at least 2 characters") : setlastNameValidation("")
                break
            case "email":
                e.target.value.length < 5 && e.target.value.length >0 ? setemailValidation("email must have at least 5 characters") : setemailValidation("")
                break
            case "password":
                e.target.value.length < 8 && e.target.value.length >0 ? setpasswordValidation("password must have at least 8 characters") : setpasswordValidation("")
                break
            case "confirmPassword":
                e.target.value !== inputs.password ? setconfirmPasswordValidation("passwords must match") : setconfirmPasswordValidation("")
                break

        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value

        });
    };
    return(

        
        <form action="">
            <h1>Complete Form</h1>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" placeholder="ex. Sergio "/>
                <p className="validations">{firstNameValidation}</p>
            </div>         
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" placeholder="ex. Florean"/>
                <p className="validations">{lastNameValidation}</p>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" placeholder="ex. sergio.florean@gmail.com"/>
                <p className="validations">{emailValidation}</p>
            </div>
            
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange}type="password" name="password" placeholder=""/>
                <p className="validations">{passwordValidation}</p>
            </div>
            
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange}type="password" name="confirmPassword" placeholder=""/>
                <p className="validations">{confirmPasswordValidation}</p>
            </div>        
            <div>
                <input type="submit" />
            </div>   
        </form>
    );
};

export default Form;