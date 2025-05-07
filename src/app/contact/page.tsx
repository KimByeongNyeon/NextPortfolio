"use client";

import { useState } from "react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/common/ScrollReveal";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "./components/ContactForm";
import WorkingHours from "./components/WorkingHours";

export default function ContactPage() {
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
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-10 px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold mb-6">연락하기</h1>
          <p className="text-gray-600 mb-10 max-w-2xl">프로젝트에 관한 문의나 협업 제안 등 어떤 내용이든 편하게 연락해 주세요. 가능한 빠르게 답변 드리겠습니다.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h2 className="text-xl font-semibold mb-6">연락처 정보</h2>
              <ContactInfo />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <WorkingHours />
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
