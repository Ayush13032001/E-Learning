import { useState } from "react";
import { contactStyles } from "../assets/dummyStyles";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Mailbox,
  MessageCircle,
  MessageCircleDashed,
  MessageSquare,
  Phone,
  SendHorizonal,
  User,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") setPhoneError("");
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid 10-digits mobile number");
      return;
    }
    setIsSubmitting(true);

    const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}
`;

    const whatsappUrl = `https://wa.me/9001995951?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      setPhoneError("");
    }, 2000);
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    validatePhone(formData.phone) &&
    formData.subject &&
    formData.message;

  return (
    <div className={contactStyles.container}>
      <div className={contactStyles.mainContainer}>
        <div className={contactStyles.header}>
          <h1 className={contactStyles.title}>Contact Us</h1>
        </div>
        <div className={contactStyles.mainSection}>
          <div className={contactStyles.formContainer}>
            <div className={contactStyles.formGlow1}></div>
            <div className={contactStyles.formGlow2}></div>
            <div className={contactStyles.formGlow3}></div>
            <div className={contactStyles.form}>
              <form
                className={contactStyles.formElements}
                onSubmit={handleSubmit}
              >
                {/*email + name */}
                <div className={contactStyles.formGrid}>
                  <div className={contactStyles.formGroup}>
                    <label className={contactStyles.label}>
                      <User
                        className={`${contactStyles.labelIcon} ${contactStyles.colors.purple.icon}`}
                      />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`${contactStyles.input} ${contactStyles.colors.purple.focus} ${contactStyles.colors.purple.hover}`}
                      placeholder="Enter Your Full Name"
                    />
                  </div>
                  <div className={contactStyles.formGroup}>
                    <label className={contactStyles.label}>
                      <Mailbox
                        className={`${contactStyles.labelIcon} ${contactStyles.colors.blue.icon}`}
                      />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`${contactStyles.input} ${contactStyles.colors.blue.focus} ${contactStyles.colors.blue.hover}`}
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                {/*phone */}
                <div className={contactStyles.formGroup}>
                  <label className={contactStyles.label}>
                    <Phone
                      className={`${contactStyles.labelIcon} ${contactStyles.colors.green.icon}`}
                    />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    maxLength={10}
                    className={`${contactStyles.input} ${
                      contactStyles.colors.green.focus
                    } ${contactStyles.colors.green.hover} ${
                      phoneError ? contactStyles.inputError : ""
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {phoneError && (
                    <p className={contactStyles.errorText}>{phoneError}</p>
                  )}
                </div>

                {/* Subject */}
                <div className={contactStyles.formGroup}>
                  <label className={contactStyles.label}>
                    <MessageSquare
                      className={`${contactStyles.labelIcon} ${contactStyles.colors.purple.icon}`}
                    />
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`${contactStyles.select} ${contactStyles.colors.purple.focus}`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Collaboration">
                      Project Collaboration
                    </option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={contactStyles.formGroup}>
                  <label className={contactStyles.label}>
                    <MessageCircleDashed
                      className={`${contactStyles.labelIcon} ${contactStyles.labelIcon} ${contactStyles.colors.blue.icon}`}
                    />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`${contactStyles.textarea} ${
                      contactStyles.colors.blue.focus
                    }`}
                    placeholder="Tell Us about your project or Enquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`${contactStyles.submitButton} ${
                    isFormValid && !isSubmitting
                      ? contactStyles.submitButtonEnabled
                      : contactStyles.submitButtonDisabled
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      {/* Rotating circle ONLY */}
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                      {/* Normal text (no animation) */}
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <SendHorizonal className={contactStyles.submitIcon} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          {/* Animation Section */}
          <div className={contactStyles.animationContainer}>
            <div className={contactStyles.animationWrapper}>
              <DotLottieReact
                src="https://lottie.host/9ccf026c-11e9-417a-9a9d-0169bc83e49d/sMK5FavyPC.lottie"
                loop
                autoplay
                style={{
                  width: "100%",
                  height: "500px",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
                }}
              />
            </div>
          </div>
        </div>
        {/*Footer info */}
        <div className={contactStyles.footer}>
          <div className={contactStyles.footerBadge}>
            <MessageCircle className={contactStyles.footerIcon} />
            <span className={contactStyles.footerText}>
              All Message are sent directly to WhatsApp for Immediate response
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
