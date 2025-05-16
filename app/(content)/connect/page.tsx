"use client";
import Image from "next/image";

import { useState } from "react";

export default function Example() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          src="/photos/numberspotpic.jpg"
          alt=""
          width={2000}
          height={2000}
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full" // your styling
        />
      </div>
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-center">
              Math Playground <span className="text-red-500"> Raffle </span>
            </h1>
            <p>
              Use the form below to enter the raffle for a YPP-sponsored pizza
              party! The winner will be announced by email on June 4th, 2025.
              Thank you for being a source for YPP students to celebrate and
              share their math stories!
            </p>

            {submitted ? (
              <div className="mt-10 rounded-md bg-green-100 p-4 text-green-800 shadow-sm ring-1 ring-inset ring-green-300">
                Thank you! Your entry has been received. Keep an eye on your
                inbox for the announcement on June 4th, 2025.
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  try {
                    await fetch(
                      process.env.GOOGLE_SCRIPT_API ?? "",
                      {
                        method: "POST",
                        mode: "no-cors",
                        body: formData,
                      }
                    );

                    setSubmitted(true);
                  } catch (error) {
                    console.error("Submission failed:", error);
                  }
                }}
                method="POST"
                className="mt-16"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      First Name
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

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Last Name
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

                  {/* Email Address */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Email Address
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

                  {/* Relationship to YPP Student */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="relationship"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Relationship to YPP Student
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="relationship"
                        name="relationship"
                        type="text"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  {/* School or YPP Site Name */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="site-name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      School or YPP Site Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="site-name"
                        name="site-name"
                        type="text"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  {/* Street Address */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="street-address"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Street Address
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="street-address"
                        name="street-address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Zip Code
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="zip"
                        name="zip"
                        type="number"
                        autoComplete="postal-code"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="state"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      State (initials only)
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        maxLength={2}
                        placeholder="e.g., MA"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 uppercase outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  {/* Learn More About Math Playground */}
                  <fieldset className="sm:col-span-2">
                    <legend className="block text-sm/6 font-semibold text-gray-900 mb-2">
                      Do you want to learn more about The Math Playground?
                    </legend>
                    <div className="flex gap-x-4">
                      <label className="flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="learn-more"
                          value="Yes"
                          className="accent-blue-600"
                        />{" "}
                        Yes
                      </label>
                      <label className="flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="learn-more"
                          value="No"
                          className="accent-blue-600"
                        />{" "}
                        No
                      </label>
                    </div>
                  </fieldset>

                  {/* Add to Newsletter */}
                  <fieldset className="sm:col-span-2">
                    <legend className="block text-sm/6 font-semibold text-gray-900 mb-2">
                      Do you want to be added to YPP&apos;s newsletter?
                    </legend>
                    <div className="flex gap-x-4">
                      <label className="flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="newsletter"
                          value="Yes"
                          className="accent-blue-600"
                        />{" "}
                        Yes
                      </label>
                      <label className="flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="newsletter"
                          value="No"
                          className="accent-blue-600"
                        />{" "}
                        No
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
