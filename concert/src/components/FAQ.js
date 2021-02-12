import React from 'react'
import Taskbar from "../components/taskbar";

function FAQ ({faq, index, toggleFAQ}) {
	return (      
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
            
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
            <div className="chat-container-2">
                
          
     </div>
     
		</div>
	)
}

export default FAQ