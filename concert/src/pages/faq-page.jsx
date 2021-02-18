import React from 'react';
import FAQ from './../components/FAQ';
import TaskBar from './../components/taskbar';
import FAQMain from './../components/faqmain';
import ReactDOM from "react-dom";

function FAQPage () {
    return (
        <div className="App">
          <FAQ>
            <FAQ.QAItem>
              <FAQ.Question answerId="q1">
                {(isOpen, onToggle) => {
                  return (
                    <>
                      {isOpen ? "Open " : "Close "}
                      <span>How do I create tutor sessions?</span>
                    </>
                  );
                }}
              </FAQ.Question>
              <FAQ.Answer id="q1">Navigate to your dashboard, click on create tutoring schedule, and input the required information then submit </FAQ.Answer>
            </FAQ.QAItem>
            <FAQ.QAItem>
              <FAQ.Question answerId="q2">
                {(isOpen, onToggle) => {
                  return (
                    <>
                      {isOpen ? "Open " : "Close "}
                      <span>How do I create groups?</span>
                    </>
                  );
                }}
              </FAQ.Question>
              <FAQ.Answer id="q2">Go to the dashboard and click on create group</FAQ.Answer>
            </FAQ.QAItem>
            <FAQ.QAItem>
              <FAQ.Question answerId="q3">
                {(isOpen, onToggle) => {
                  return (
                    <>
                      {isOpen ? "Open " : "Close "}
                      <span>How do I delete groups?</span>
                    </>
                  );
                }}
              </FAQ.Question>
              <FAQ.Answer id="q3">Click on the group and right click then click delete. </FAQ.Answer>
            </FAQ.QAItem>
          </FAQ>
        </div>
      );
}

export default FAQPage;