import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import { FeedbackProvider } from "../context/FeedbackContext";

function Home() {


  return (
    <FeedbackProvider>
      <div>
        <FeedbackForm  />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default Home;
