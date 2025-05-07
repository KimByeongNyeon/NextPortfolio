"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally handle the form submission
    alert("메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold mb-6">메시지 보내기</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-gray-700">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-shadow"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-700">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-shadow"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 text-gray-700">
            메시지
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-shadow"
            required
          />
        </div>
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          메시지 보내기
        </button>
      </form>
    </div>
  );
}
