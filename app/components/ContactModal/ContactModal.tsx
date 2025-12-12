"use client";

import { useEffect, useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Question");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSent(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Unable to send your message. Please try again later.");
        setIsSubmitting(false);
        return;
      }
      setSent(true);
      setName("");
      setEmail("");
      setSubject("General Question");
      setMessage("");
      setIsSubmitting(false);
    } catch {
      setError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative w-full max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] md:text-[20px] font-semibold">Get in touch</h2>
            <button
              className="text-white/90 hover:text-white rounded-md p-1"
              aria-label="Close"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <p className="text-white/90 text-[12px] md:text-[14px] mt-1">
            We’re here to help. Send us a message and we’ll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#21212C] text-[12px] md:text-[14px] mb-1">Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 text-[#21212C] px-3 py-2 text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2EB88A] focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-[#21212C] text-[12px] md:text-[14px] mb-1">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border text-[#21212C] border-gray-300 px-3 py-2 text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2EB88A] focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-[#21212C] text-[12px] md:text-[14px] mb-1">Subject *</label>
            <input
                type="Select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border text-[#21212C] border-gray-300 px-3 py-2 text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2EB88A] focus:border-transparent"
                placeholder="General Question"
                required
              />
          </div>

          <div className="mt-4">
            <label className="block text-[#21212C] text-[12px] md:text-[14px] mb-1">Message *</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border text-[#21212C] border-gray-300 px-3 py-2 text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2EB88A] focus:border-transparent min-h-[120px]"
              placeholder="How can we help?"
              required
            />
          </div>

          {error && (
            <p className="mt-3 text-[#D92D20] text-[12px] md:text-[14px]">{error}</p>
          )}
          {sent && (
            <p className="mt-3 text-[#2EB88A] text-[12px] md:text-[14px]">{`Message sent. We’ll reply to you at your email.`}</p>
          )}

          <div className="mt-6 flex flex-col md:flex-row gap-3 md:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border border-gray-300 text-[#21212C] text-[14px] md:text-[16px] bg-white hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-5 py-2 rounded-lg text-white text-[14px] md:text-[16px] font-semibold bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] transition ${isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:opacity-95"}`}
            >
              {isSubmitting ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}