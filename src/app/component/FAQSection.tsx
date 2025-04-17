'use client';

import FAQItem from '../component/FAQItem';

const faqs = [
  {
    question: 'What are the school hours at Little Learners Academy?',
    answer:
      'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.',
  },
  {
    question: 'How do you handle food allergies and dietary restrictions?',
    answer:
      'We take allergies seriously. Please notify us of any dietary needs. We work closely with families to accommodate restrictions safely.',
  },
  {
    question: 'What is the teacher-to-student ratio at Little Learners Academy?',
    answer:
      'Our typical ratio is 1:8 to ensure each child receives personalized attention and guidance.',
  },
  {
    question: 'Is there a uniform policy for students?',
    answer:
      'Yes, students are expected to follow a comfortable and simple uniform policy that supports active play and learning.',
  },
  {
    question: 'How do you handle discipline and behavior management?',
    answer:
      'We use positive reinforcement strategies and work collaboratively with families to address behavior in a supportive manner.',
  },
  {
    question: 'How do I apply for admission to Little Learners Academy?',
    answer:
      'You can apply through our website or contact our front office for an application packet and tour scheduling.',
  },
  {
    question: 'How do I apply for admission to Little Learners Academy?',
    answer:
      'You can apply through our website or contact our front office for an application packet and tour scheduling.',
  },
  {
    question: 'How do I apply for admission to Little Learners Academy?',
    answer:
      'You can apply through our website or contact our front office for an application packet and tour scheduling.',
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-12 ">
        <div className='flex justify-center items-center mb-10'>
        <div className="border relative w-60 p-4 bg-white rounded-2xl">
            <h1>Solutions For The Doubts</h1>
        </div>
        </div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 ">
            Find all the essential information you need in our FAQ section,
            designed to address the most frequently asked questions and help you
            make informed decisions for your child’s education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
