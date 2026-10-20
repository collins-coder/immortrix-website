import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import "./FAQ.css";

const FAQS = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with organisations of different sizes that want to simplify operations, connect their systems or build software around the way they actually work.",
  },
  {
    q: "Can you build something around our existing processes?",
    a: "Yes. We start by understanding your people, processes and goals, then design the solution around them rather than forcing you into a generic tool.",
  },
  {
    q: "Can you connect the systems we already use?",
    a: "Yes. System integration is a core part of our work, so your existing tools, data and workflows can talk to each other.",
  },
  {
    q: "How do we start a project with you?",
    a: "Send us a message through the contact form, by email or on WhatsApp. We will talk through what you need and recommend a sensible next step.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We can continue to support, maintain and improve your solution as your business grows and changes.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="faq-label">FAQ</span>
          <h2>
            Questions <span>we are often asked.</span>
          </h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <Plus />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;