"use client";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";

// FAQ data
const faqData = [
  {
    question: "Why Opt for Emergency Rental Assistance?",
    answer:
      "Emergency Rental Assistance is dedicated to providing swift and dependable financial support for individuals facing housing challenges. If you're dealing with imminent rental payments, utility bills, or other housing-related expenses, our assistance is tailored to offer quick relief. This service is particularly helpful for those with challenging credit histories or limited financial options.",
  },
  {
    question:
      "What's the Timeline for the Emergency Rental Assistance Application Process?",
    answer:
      "Our online application process is streamlined for efficiency, typically taking around 10 minutes to complete. If you submit your application on a weekday before 11:30 a.m. CT, funds will be processed and transferred to your account by the end of the same business day. For applications between 11:30 a.m. CT and 8 p.m. CT on weekdays, funds are transferred overnight. Applications made on Friday after 11:30 a.m. CT through Sunday will be processed over the weekend, with funds arriving at your account by the end of the next business day.",
  },
  {
    question:
      "What Criteria Determine Eligibility for Emergency Rental Assistance?",
    answer:
      "To qualify for our emergency rental assistance, applicants must be at least 18 years old, have a stable income source, and meet specific eligibility standards. Depending on the type and amount of assistance required, additional criteria may apply to ensure effective support for your housing needs.",
  },
  {
    question:
      "How is Limited Credit Handled in the Emergency Rental Assistance Application Process?",
    answer:
      "Unlike traditional approaches that focus solely on credit scores, Emergency Rental Assistance utilizes an advanced algorithm that considers the genuine intent to address housing challenges. This approach enables us to assist individuals with limited credit history or past credit challenges. If you're facing such circumstances, our emergency rental assistance provides a solution without unnecessary complications.",
  },
  // Add more FAQ items here
];

export default function FAQ() {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const toggleAccordion = (index) => {
  //   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

  return (
    <div className="mt-14 ">
      <div className="faq-container bg-purple-800   py-5 px-4 sm:px-8 md:px-16 lg:px-24">
        {faqData.map((item, index) => (
          <Collapsible
            key={index}
            className="border rounded-md overflow-hidden shadow-sm my-1 dark:border-gray-800"
          >
            <CollapsibleTrigger asChild>
              <div className="flex justify-between bg-white items-center p-4">
                <h4 className="text-sm font-semibold">{item.question}</h4>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className=" border-t /border-gray-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-gray-800">
                {item.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
