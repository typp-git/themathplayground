export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="/photos/numberspotpic.jpg"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 ">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className=" text-center">
              Math Playground <span className="text-red-500"> Raffle </span>
            </h1>
            <p>
              {" "}
              Use the form below to enter the raffle for a YPP-sponsored pizza
              party! The winner will be announced by email on June 4th, 2025.
              Thank you for being a source for YPP students to celebrate and
              share their math stories!
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-gray-900"
                    >
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm/6 font-semibold text-gray-900">
                    Expected budget
                  </legend>
                  <div className="mt-4 space-y-4 text-sm/6 text-gray-600">
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="under_25k"
                        id="budget-under-25k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-blue-600 checked:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-under-25k">Less than $25K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="25k-50k"
                        id="budget-25k-50k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-blue-600 checked:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-25k-50k">$25K – $50K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="50k-100k"
                        id="budget-50k-100k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-blue-600 checked:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-50k-100k">$50K – $100K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="over_100k"
                        id="budget-over-100k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-blue-600 checked:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-over-100k">$100K+</label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
