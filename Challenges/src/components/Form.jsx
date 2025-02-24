function Form({ form, setForm }) {
  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(form));

    alert(`Submitted Name: ${form.name}`);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <form action="" className="bg-black-200" onSubmit={submitForm}>
        <div>
          <label htmlFor="name">
            Name:
            <input
              onChange={handleChange}
              type="name"
              value={form.name}
              name="name"
              className="bg-gray-100 border text-black"
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              onChange={handleChange}
              type="email"
              value={form.email}
              name="email"
              className="bg-gray-100 border text-black"
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone:
            <input
              onChange={handleChange}
              type="tel"
              value={form.phone}
              name="phone"
              className="bg-gray-100 border text-black"
            />
          </label>
        </div>
        <div>
          <label htmlFor="text">
            Message:
            <textarea
              onChange={handleChange}
              name="message"
              value={form.message}
              className="bg-gray-100 border text-black"
            ></textarea>
          </label>
        </div>

        <button
          type="submit"
          className="border bg-blue-500 text-white border-black m-auto mt-10 ml-10"
        >
          Submit Form
        </button>
      </form>
      {form.name && <p className="mt-4 text-black">Your Name: {form.name}</p>}
      {form.email && (
        <p className="mt-4 text-black">Your Email: {form.email}</p>
      )}
    </>
  );
}

export default Form;
