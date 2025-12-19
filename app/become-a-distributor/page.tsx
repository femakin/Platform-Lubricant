"use client";

import { useState } from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { distributorBenefits, regions } from "../data/distributorData";

// Icon components
const IconComponents: Record<string, React.ReactNode> = {
  pricing: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  marketing: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  training: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  territory: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  delivery: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  brand: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function BecomeDistributorPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    region: "",
    address: "",
    businessType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/distributor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setIsSubmitted(true);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        region: "",
        address: "",
        businessType: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fefcfc]">
      <TopBar />
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f78a24] to-[#e67a14] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Become a Platform Lubricant Distributor
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
            Join our growing network of distributors and build a successful business 
            with premium quality lubricants trusted by industries across Nigeria.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Benefits of Becoming a Distributor
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Partner with Platform Lubricant and unlock opportunities for growth and success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributorBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#f78a24]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f78a24]/10 to-[#f78a24]/5 flex items-center justify-center text-[#f78a24] mb-6">
                  {IconComponents[benefit.icon]}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Regions Covered
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're expanding our distributor network across all regions of Nigeria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <div
                key={region.id}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#f78a24] mb-2">
                  {region.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Distributor Application Form
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600">
                  Thank you for your interest. We'll contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Preferred Region *
                    </label>
                    <select
                      id="region"
                      name="region"
                      required
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select region</option>
                      {regions.map((region) => (
                        <option key={region.id} value={region.name}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="businessType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select type</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Retail">Retail</option>
                      <option value="Both">Both</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Business Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all"
                    placeholder="Enter business address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78a24] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your business and why you'd like to become a distributor..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f78a24] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e67a14] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

