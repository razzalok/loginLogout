import { useState } from "react";
import { useContactFormContext } from "../hooks/useContactFormContext";
import { useAuthContext } from "../hooks/useAuthContex";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const navigate = useNavigate();

  const { dispatch } = useContactFormContext();
  const { user } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const form = { name, email: user.email, message, phone };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setEmail("");
      setError(null);
      setMessage("");
      setPhone("");
      dispatch({ type: "CREATE_Form", payload: json });
      navigate("/");
    }
  };

  return (
    <>
      <div className="row container mx-auto">
        <div className="mx-auto d-none d-sm-block col-sm-2 col-md-2 text-white"></div>
        <div className="col-md-6 ">
          <div className="card card-body mt-5">
            <div className="sign-in-heading my-3">
              <h2 className="text-center text-info my-2">Contact Us</h2>
            </div>
            {error && (
              <h6 className="text-center text-warning my-2">{error}</h6>
            )}
            <form className="form-floating text-dark" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className=" mb-3">
                <textarea
                  className="form-control"
                  placeholder="Write Your Message Here"
                  id="floatingTextarea2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ height: "200px" }}
                ></textarea>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="floatingInput">Phone</label>
              </div>

              <div className="d-grid gap-2 ">
                <button className="btn btn-primary" type="submit">
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto d-none d-sm-block col-sm-2 col-md-2 text-white"></div>
      </div>
    </>
  );
};

export default ContactForm;
