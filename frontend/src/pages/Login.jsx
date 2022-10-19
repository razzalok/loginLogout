import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isLoading } = useLogin();
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<>
		<div className="row container mx-auto">
			<div className="mx-auto d-none d-sm-block col-sm-2 col-md-2 text-white"></div>
			<div className="col-md-6 ">
				<div className="card card-body mt-5">
					<div className="sign-in-heading my-3">
						<h2 className="text-center ">Welcome Back </h2>
					</div>
					<form className="form-floating text-dark" onSubmit={handleSubmit}>
						<div className="form-floating mb-3">
							<input
								type="email"
								className="form-control"
								placeholder="name@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor="floatingInput">Email address</label>
						</div>
						<div className="form-floating mb-3">
							<input
								type="password"
								className="form-control"
								placeholder="name@example.com"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label htmlFor="floatingInput">Password</label>
						</div>
						<div className="d-grid gap-2 ">
							<button className="btn btn-primary" type="submit">
								Login Now
							</button>
						</div>
					</form>
					<p className="text-center mt-3">
						Don't Have an account <Link to="/signup">create one</Link>
					</p>
				</div>
			</div>
			<div className="mx-auto d-none d-sm-block col-sm-2 col-md-2 text-white"></div>
		</div>
	</>
	);
};

export default Login;
