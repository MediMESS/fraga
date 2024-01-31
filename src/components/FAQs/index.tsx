// Import necessary modules from Material-UI and framer-motion
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { theme } from "src/shared/Layout/theme";
import { FAQsID } from "src/shared/Utils";

// Create your functional component
const FAQs = () => {
  const faqData = [
    {
      id: 1,
      question: "How to choose fragrances ?",
      answer:
        "Consider your personal preferences, skin chemistry, and the occasion. Test different scents on your skin before making a decision.",
    },
    {
      id: 2,
      question: "How to apply fragrances ?",
      answer:
        "Apply fragrance to pulse points like wrists and neck. Avoid rubbing wrists together, as it alters the scent. For a subtle aura, spritz from a distance.",
    },
    {
      id: 3,
      question: "How long do fragrances last ?",
      answer:
        "Fragrance longevity varies, but generally lasts 4-8 hours. Factors like skin type, weather, and scent concentration play a role.",
    },
    {
      id: 4,
      question: "Are fragrances unisex ?",
      answer:
        "Many fragrances are designed for all genders. Choose scents based on personal preference rather than gender labels.",
    },
    {
      id: 5,
      question: "Are fragrances tested on animals ?",
      answer:
        "We do not support animal testing. Our fragrances are cruelty-free, crafted with ethical practices.",
    },
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
    <Box
      id={FAQsID}
      sx={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: { xs: "0 24px", lg: "0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", lg: "32px" },
        }}
      >
        {/* Titles */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: { xs: "20px", lg: "32px" },
          }}
        >
          <Typography variant="h2">FAQs</Typography>
          <Typography variant="body1">
            Find answers to common questions about fragrance selection, care,
            and the unique features of Fraga's products.
          </Typography>
        </Box>
        {/* Questions */}
        <Box>
          {/* Map through the FAQ data and render each question with smooth transition */}
          {faqData.map((faq, index) => (
            <Box key={faq.id}>
              <Box
                sx={{
                  paddingBottom: { xs: "12px", lg: "20px" },
                  paddingTop: { xs: "12px", lg: "20px" },
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                  borderTop:
                    index === 0
                      ? `1px solid ${theme.palette.primary.main}`
                      : "",
                }}
              >
                {/* Question */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">
                    {faq.question}
                    {/* Toggle button */}
                  </Typography>
                  <IconButton
                    onClick={() => toggleAnswer(faq.question)}
                    color="primary"
                  >
                    {faq.question === openQuestion ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon />
                    )}
                  </IconButton>
                </Box>
                {/* Animated answer with AnimatePresence */}
                <AnimatePresence>
                  {openQuestion === faq.question && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          marginTop: { xs: "12px", lg: "20px" },
                          color: `${theme.palette.primary.light}`,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider or borderBottom between questions */}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Finalle */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: { xs: "20px", lg: "32px" },
          }}
        >
          <Typography variant="h4">Still Have a Question</Typography>
          <Typography variant="body1">
            Contact us for further assistance.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: "150px",
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// Export your component
export default FAQs;
