"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const interest = e.target.interest.value;
    const message = e.target.message.value;

    const whatsappMessage =
      `Hi Hulool Tourism,\n\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Interest: ${interest}\n` +
      `Message: ${message}`;

    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/97477636464?text=${encoded}`, "_blank");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="text-sm font-bold text-text uppercase tracking-wider"
          >
            First Name
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none transition-all focus:border-cta focus:ring-1 focus:ring-cta"
            type="text"
            placeholder="Abdul"
            id="firstName"
            name="firstName"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="text-sm font-bold text-text uppercase tracking-wider"
          >
            Last Name
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none transition-all focus:border-cta focus:ring-1 focus:ring-cta"
            type="text"
            placeholder="k"
            id="lastName"
            name="lastName"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-bold text-text uppercase tracking-wider"
        >
          Email Address
        </label>
        <input
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none transition-all focus:border-cta focus:ring-1 focus:ring-cta"
          type="email"
          placeholder="abdul@example.com"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="interest"
          className="text-sm font-bold text-text uppercase tracking-wider"
        >
          Interested In
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none transition-all focus:border-cta focus:ring-1 focus:ring-cta"
        >
          <option>General Inquiry</option>
          <option>Umrah Inquiry</option>
          <option>Custom Itinerary</option>
        </select>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-bold text-text uppercase tracking-wider"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your dream trip..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none transition-all focus:border-cta focus:ring-1 focus:ring-cta"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-cta hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 text-lg"
      >
        Send via WhatsApp 💬
      </button>
    </form>
  );
}
