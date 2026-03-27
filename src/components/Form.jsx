import React, { useState, forwardRef } from "react";
import API_BASE_URL from "../config/api";

const Form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lookingFor: "",
    resume: null, // ✅ added
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      setMessage("Phone number must be 10 digits");
      return;
    }

    // Resume validation (optional but recommended)
    if (formData.resume) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(formData.resume.type)) {
        setMessage("Only PDF or Word files are allowed");
        return;
      }

      if (formData.resume.size > 2 * 1024 * 1024) {
        setMessage("File size must be less than 2MB");
        return;
      }
    }

    try {
      setLoading(true);
      setMessage("");

      const bodyData = new FormData();
      bodyData.append("name", formData.name);
      bodyData.append("email", formData.email);
      bodyData.append("phone", formData.phone);
      bodyData.append("lookingFor", formData.lookingFor);

      if (formData.resume) {
        bodyData.append("resume", formData.resume);
      }

      const res = await fetch(`${API_BASE_URL}/contact/`, {
        method: "POST",
        body: bodyData, // ✅ multipart/form-data
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✔ Saved Successfully. We will contact you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          lookingFor: "",
          resume: null,
        });
      } else {
        setMessage("Something went wrong");
      }
    } catch (error) {
      setMessage("Server error. Try again");
    }

    setLoading(false);
  };

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px] pt-28 pb-16">
        <h2 className="font-gotham font-normal text-white text-[36px] sm:text-[44px] lg:text-[53px] leading-[48px] lg:leading-[63px] text-center">
          Ready to Join Us?
        </h2>

        <p className="font-inter font-medium text-white text-[16px] leading-[26px] text-center mt-4 max-w-[720px] mx-auto">
          Ready to grow your career with a team that values your potential? Join
          us.
        </p>

        <div className="mt-14 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[570px] bg-black rounded-[50px] p-10 flex flex-col gap-[30px] shadow-[0_0_80px_rgba(11,44,195,0.55)]"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full h-[50px] bg-white/10 rounded-[10px] px-5 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#0B2CC3]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full h-[50px] bg-white/10 rounded-[10px] px-5 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#0B2CC3]"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setFormData({ ...formData, phone: value });
                }}
                maxLength={10}
                placeholder="Enter your phone number"
                className="w-full h-[50px] bg-white/10 rounded-[10px] px-5 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#0B2CC3]"
              />
            </div>

            {/* Looking For */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Looking For?</label>
              <input
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                placeholder="Enter your requirement"
                className="w-full h-[50px] bg-white/10 rounded-[10px] px-5 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#0B2CC3]"
              />
            </div>

            {/* Resume Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Upload Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full text-white file:bg-[#0B2CC3] file:text-white file:border-0 file:px-4 file:py-2 file:rounded-[6px]"
              />
              {formData.resume && (
                <p className="text-xs text-gray-300">
                  Selected: {formData.resume.name}
                </p>
              )}
            </div>

            {/* Message */}
            {message && (
              <p
                className={`text-center text-sm ${
                  message.includes("Successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[62px] rounded-[10px] text-white font-medium border border-[#355BFF] transition bg-[#0B2CC3] hover:bg-[#102FE0] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Get a Call"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Form;