import React from "react";

function App() {
  return (
    <main className="p-4 md:p-10 bg-gray-100 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Jemimah Waithera Gathoni
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Nakuru | jemimahwaithera5@gmail.com | 0743168837
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Professional Summary
          </h2>
          <p>
            A motivated IT professional with a Diploma and Certificate in
            Information Technology. Experienced in both technical support and
            customer-facing roles. Passionate about tech solutions that improve
            efficiency and service quality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Education
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Diploma in Information Technology</strong>, Rift Valley
              National Polytechnic (2022–2023)
            </li>
            <li>
              <strong>Certificate in Information Technology</strong>, Rift
              Valley National Polytechnic (2019–2021)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Work Experience
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Assistant ICT</strong>, Nyandarua County Government (Jan
              2023 – May 2023)
              <br />
              Provided tech support, data entry, and systems maintenance.
            </li>
            <li>
              <strong>Waiter / Cashier</strong>, Shemeji Highway Resort (Dec
              2021 – May 2022)
              <br />
              Handled customer service and payment systems.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Languages
          </h2>
          <p>Fluent in English and Swahili</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            References
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Harun Kahuthu – Senior ICT Officer, Nyandarua County Government
            </li>
            <li>Mr. Mbaria – Manager, Shemeji Highway Resort</li>
          </ul>
        </section>

        <p className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Jemimah Waithera Gathoni
        </p>
      </div>
    </main>
  );
}

export default App;
