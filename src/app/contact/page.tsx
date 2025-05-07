'use client';

import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/common/ScrollReveal';
import ContactInfo from '../components/contact/ContactInfo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally handle the form submission
    alert('메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-10 px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold mb-6">연락하기</h1>
          <p className="text-gray-600 mb-10 max-w-2xl">
            프로젝트에 관한 문의나 협업 제안 등 어떤 내용이든 편하게 연락해 주세요. 
            가능한 빠르게 답변 드리겠습니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ScrollReveal>
            <div className="max-w-md">
              <h2 className="text-xl font-semibold mb-6">메시지 보내기</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-gray-700">이름</label>
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
                  <label htmlFor="email" className="block mb-1 text-gray-700">이메일</label>
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
                  <label htmlFor="message" className="block mb-1 text-gray-700">메시지</label>
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
                <button 
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  메시지 보내기
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h2 className="text-xl font-semibold mb-6">연락처 정보</h2>
              <ContactInfo />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">근무 시간</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">월요일 - 금요일:</span>
                <span className="font-medium">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">토요일:</span>
                <span className="font-medium">10:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">일요일:</span>
                <span className="font-medium">휴무</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
