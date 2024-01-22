// Import necessary modules from Material-UI and framer-motion
import React, { useState } from "react";
import { Container, Typography, IconButton, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion, AnimatePresence } from "framer-motion";

// Create your functional component
const FAQSection: React.FC = () => {
  const faqData = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    // Add more questions as needed
  ];

  // State to manage the open/closed state of each question
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  // Function to toggle the answer visibility
  const toggleAnswer = (question: string) => {
    setOpenQuestion((prevQuestion) =>
      prevQuestion === question ? null : question
    );
  };

  return (
    <Container maxWidth="md">
      {/* Map through the FAQ data and render each question with smooth transition */}
      {faqData.map((faq, index) => (
        <div key={index}>
          {/* Question */}
          <Typography variant="h6" gutterBottom>
            {faq.question}
            {/* Toggle button */}
            <IconButton
              onClick={() => toggleAnswer(faq.question)}
              color="primary"
            >
              <AddIcon />
            </IconButton>
          </Typography>
          {/* Animated answer with AnimatePresence */}
          <AnimatePresence>
            {openQuestion === faq.question && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="body1" color="textSecondary">
                  {faq.answer}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Divider or borderBottom between questions */}
          <Divider style={{ marginBottom: "15px" }} />
        </div>
      ))}
    </Container>
  );
};

// Export your component
export default FAQSection;
