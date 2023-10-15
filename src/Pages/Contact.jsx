import swal from "sweetalert";

const Contact = () => {
  const contactFormHandler = (e) => {
    e.preventDefault();
    swal("Cool!", "We will be Contact with you soon!", "success");
  };
  return (
    <div className="px-4">
      <div className="w-full max-w-sm mx-auto mt-[5%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <htmlForm className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Conytact With Us
          </h5>
          <form onSubmit={contactFormHandler} className="space-y-3">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="photourl"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Number
              </label>
              <input
                type="number"
                name="number"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Number"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <textarea
              rows={4}
              className="textarea w-full focus:outline-none textarea-bordered"
              placeholder="Leave a Message for us . . ."
            ></textarea>
            <button
              type="submit"
              className="w-full text-white bg-[#D2B48C] focus:ring-4 focus:outline-none 0 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </htmlForm>
      </div>
    </div>
  );
};

export default Contact;
