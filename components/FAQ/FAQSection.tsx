"use client";

import FAQItem from "./FAQItem";
import { FAQList } from "./FAQ";
import { useState } from "react";

export default function FAQSection() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  function toggleQuestion(index: number) {
    setSelectedQuestion((st) => {
      if (st === index) return null;
      return index;
    });
  }

  return (
    <div className="md:py flex flex-col gap-10 px-8 py-14 sm:gap-12 sm:px-12 sm:py-16 md:gap-14 md:px-16 md:py-20 lg:gap-16 lg:px-20 lg:py-24">
      <h2 className="h3 text-teal-400">
        Get Clarity.
        <br />
        We Answer Your Questions
      </h2>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          {FAQList.slice(0, 3).map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              onToggle={() => toggleQuestion(index)}
              isOpen={selectedQuestion === index}
            />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-6">
          {FAQList.slice(3, 6).map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              onToggle={() => toggleQuestion(index + 3)}
              isOpen={selectedQuestion === index + 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
