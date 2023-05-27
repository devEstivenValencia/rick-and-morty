
import { useState } from "react";
import "../assets/css/Form.css";
import validate from "../assets/js/validation.js";

export default function Form({ login }) {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

	const { email, password } = userData;

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
		setErrors(
			validate({
				...userData,
				[event.target.name]: event.target.value,
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault()
		login(userData)
	}
	return (
		<form>
			<div class="inputGroup">
				<div className="input">
					<input value={email} onChange={handleChange} name="email" type="text" placeholder="test@test.co" />
					<label>Enter your user</label>
					{
						errors.email && <label className={"active" && errors.email === "Valid User" ? "valid" : "invalid"}>
							{errors.email}
							{errors.email === "Valid User" ? <i class="fi fi-rr-check"></i> : <i class="fi fi-rr-cross-small"></i>}
						</label>
					}
				</div>
				<div className="input">
					<input value={password} onChange={handleChange} name="password" type="text" placeholder="123456" />
					<label>Enter your password</label>
					{
						errors.password && <label className={"active" && errors.password === "Valid Password" ? "valid" : "invalid"}>
						{errors.password}
						{errors.password === "Valid Password" ? <i class="fi fi-rr-check"></i> : <i class="fi fi-rr-cross-small"></i>}
					</label>
					}
				</div>
				<button type="Submit" onClick={handleSubmit}>Submit</button>
			</div>
		</form>
	);
}
