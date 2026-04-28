import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import LogosData from "../jsondata/LogosData";
import API_BASE_URL from "../config/api";
import {
  RefreshCcw,
  ChevronDown,
  Send,
  CheckCircle2,
  Pencil,
} from "lucide-react";

const WhebotPage = ({ isMinimized, setIsMinimized }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showIntroText, setShowIntroText] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [chatStep, setChatStep] = useState("select_type");
  const [selectedType, setSelectedType] = useState("");
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  const [formData, setFormData] = useState({
    service: "",
    subRequirement: "",
    requirement: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
     
  });
  const [clientFormData, setClientFormData] = useState({
  company: "",
  issue: "",
  email: "",
  mobile: "",
});

  const messagesEndRef = useRef(null);
const chatBodyRef = useRef(null);
const userScrollingRef = useRef(false);
const autoScrollLockRef = useRef(false);
const scrollTimerRef = useRef(null);

  /* -------------------------------- HELPERS -------------------------------- */

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

const scrollToBottom = (smooth = true) => {
  const el = chatBodyRef.current;
  if (!el) return;

  el.scrollTo({
    top: el.scrollHeight,
    behavior: smooth ? "smooth" : "auto",
  });
};

const isNearBottom = () => {
  const el = chatBodyRef.current;
  if (!el) return true;

  const gap =
    el.scrollHeight - el.scrollTop - el.clientHeight;

  return gap < 140;
};

/* whenever new message comes */
useEffect(() => {
  if (autoScrollLockRef.current) return;

  const id = requestAnimationFrame(() => {
    scrollToBottom(messages.length > 1);
  });

  return () => cancelAnimationFrame(id);
}, [messages.length, isTyping, showConfirmBox]);

  const inputEnabledSteps = [
    "requirement",
    "name",
    "mobile",
    "email",
    "address",

     "client_issue",
  "client_email",
  "client_mobile",
  ];

  const isInputEnabled =
    inputEnabledSteps.includes(chatStep);

  /* ------------------------------ VALIDATIONS ------------------------------ */

  const isValidName = (val) =>
    /^[A-Za-z ]{2,50}$/.test(val);

  const isValidMobile = (val) =>
    /^[6-9]\d{9}$/.test(val);

  const isValidEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  /* -------------------------- QUESTION OPTIONS -------------------------- */

  const subOptions = {
    "Web Development": [
      "Business Website",
      "Ecommerce Website",
      "Landing Page",
      "Custom Portal",
      "Other",
    ],
    "App Development": [
      "Android App",
      "iOS App",
      "Both Android & iOS",
      "Internal App",
      "Other",
    ],
    "Digital Marketing": [
      "Leads Generation",
      "Sales Growth",
      "Brand Awareness",
      "SEO Ranking",
      "Other",
    ],
    "AI Solution & Intelligent Agent": [
      "AI Chatbot",
      "Business Automation",
      "CRM AI",
      "Custom AI Agent",
      "Other",
    ],
  };

  const clientCompanies = [
  "Savorka",
  "Expert Printer",
  "NCCL",
  "Purify India",
];

  /* -------------------------- INITIAL CHAT -------------------------- */

  const getInitialMessages = () => [
    {
      type: "bot",
      text: "Hey! I'm WheBot, How can I help you?",
      isComplete: true,
    },
    {
      type: "bot",
      text: "Please select an option below.",
      isComplete: true,
      showOptions: true,
    },
  ];

  useEffect(() => {
    if (!isMinimized && messages.length === 0) {
      setMessages(getInitialMessages());
    }
  }, [isMinimized]);

  useEffect(() => {
    if (!isMinimized) return;

    const showTimer = setTimeout(() => {
      setShowIntroText(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowIntroText(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isMinimized]);

  /* ----------------------- SCROLL FIX NO STUCK ----------------------- */

  useEffect(() => {
  const el = chatBodyRef.current;
  if (!el) return;

  const handleScroll = () => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    /* if user manually goes top/middle */
    if (!isNearBottom()) {
      autoScrollLockRef.current = true;
      userScrollingRef.current = true;
    } else {
      autoScrollLockRef.current = false;
    }

    scrollTimerRef.current = setTimeout(() => {
      userScrollingRef.current = false;
    }, 120);
  };

  el.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    el.removeEventListener(
      "scroll",
      handleScroll
    );

    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
  };
}, []);


  /* -------------------------- MESSAGE ENGINE -------------------------- */

  const typeWriterEffect = (text) => {
    let i = 0;

    const interval = setInterval(() => {
      i++;

      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];

        if (
          last &&
          last.type === "bot" &&
          !last.isComplete
        ) {
          last.displayText = text.slice(0, i);

          if (i >= text.length) {
            last.isComplete = true;
            clearInterval(interval);
          }
        }

        return updated;
      });
    }, 35);
  };

 const addUserMessage = (text) => {
  autoScrollLockRef.current = false;

  setMessages((prev) => [
    ...prev,
    {
      type: "user",
      text,
      isComplete: true,
    },
  ]);
};

  const addBotMessage = async (
  text,
  extra = {}
) => {
  autoScrollLockRef.current = false;

  setIsTyping(true);
  await sleep(550);
  setIsTyping(false);

  setMessages((prev) => [
    ...prev,
    {
      type: "bot",
      text,
      displayText: "",
      isComplete: false,
      ...extra,
    },
  ]);

  typeWriterEffect(text);
};
  const addStaticBot = (
  text,
  extra = {}
) => {
  autoScrollLockRef.current = false;

  setMessages((prev) => [
    ...prev,
    {
      type: "bot",
      text,
      isComplete: true,
      ...extra,
    },
  ]);
};

  /* -------------------------- RESET -------------------------- */

  const resetLeadData = () => {
    setFormData({
      service: "",
      subRequirement: "",
      requirement: "",
      name: "",
      mobile: "",
      email: "",
      address: "",
    });
  };

  const refreshChat = () => {
    setMessages(getInitialMessages());
    setInput("");
    setChatStep("select_type");
    setSelectedType("");
    setShowConfirmBox(false);
    setIsTyping(false);
    resetLeadData();
  };

  /* -------------------------- FLOW -------------------------- */

  const handleSelectType = async (type) => {
    addUserMessage(
      type === "new_user"
        ? "New User"
        : "Wheedle Client"
    );

    setSelectedType(type);

   if (type === "new_user") {
  setChatStep("service_select");

  await addBotMessage(
    "Please select the service you are interested in."
  );

  addStaticBot(
    "Please choose one service from the options below.",
    {
      showServices: true,
    }
  );

  return;
}

/* WHEEDLE CLIENT FLOW */

setChatStep("client_company");

await addBotMessage(
  "Welcome back! Please select your company."
);

addStaticBot(
  "Choose your company below.",
  {
    showClientCompanies: true,
  }
);
  };

  const handleServiceSelect = async (
    service
  ) => {
    addUserMessage(service);

    setFormData((prev) => ({
      ...prev,
      service,
    }));

    if (service === "Other") {
      setChatStep("requirement");

      await addBotMessage(
        "Please describe your requirement or business need."
      );
      return;
    }

    setChatStep("sub_option");

    await addBotMessage(
      "Please select one option below."
    );

    addStaticBot(
  "Please choose one option below.",
  {
    showSubOptions: true,
    subItems: subOptions[service],
  }
);
  };

  const handleSubOption = async (
    option
  ) => {
    addUserMessage(option);

    setFormData((prev) => ({
      ...prev,
      subRequirement: option,
    }));

    if (option === "Other") {
      setChatStep("requirement");

      await addBotMessage(
        "Please describe your exact requirement."
      );
      return;
    }

    setChatStep("name");

    await addBotMessage(
      "Please share your full name."
    );
  };

  const handleClientCompany = async (company) => {
  addUserMessage(company);

  setClientFormData((prev) => ({
    ...prev,
    company,
  }));

  setChatStep("client_issue");

  await addBotMessage(
    "Please share your issue."
  );
};

  const submitLead = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/chat/new-user-lead`,
        {
          userType: "new_user",
          ...formData,
        },
        {
          headers: {
            "x-api-key":
              "MY_SUPER_SECRET_KEY",
            "Content-Type":
              "application/json",
          },
        }
      );

      setShowConfirmBox(false);
      setChatStep("completed");

      await addBotMessage(
        "Thank you for your enquiry. Our team will contact you soon."
      );
    } catch (error) {
      setShowConfirmBox(false);

      await addBotMessage(
        "Unable to submit request right now. Please try again later."
      );
    }
  };

  const submitClientSupport = async () => {
  try {
    await axios.post(
      `${API_BASE_URL}/chat/client-support`,
      clientFormData,
      {
        headers: {
          "x-api-key": "MY_SUPER_SECRET_KEY",
          "Content-Type": "application/json",
        },
      }
    );

    setChatStep("completed");

    await addBotMessage(
      "Support request submitted successfully. Our support team will contact you within a few minutes."
    );
  } catch (error) {
    await addBotMessage(
      "Unable to submit request right now. Please try again later."
    );
  }
};

  const restartFlow = async () => {
    setShowConfirmBox(false);
    resetLeadData();

    setChatStep("service_select");

    await addBotMessage(
      "Let's start again. Please select the service you are interested in."
    );

    addStaticBot(
  "Please select your service again.",
  {
    showServices: true,
  }
);
  };

  /* -------------------------- SEND -------------------------- */

  const sendMessage = async () => {
    const value = input.trim();

    if (!value || !isInputEnabled) return;

    /* CLIENT ISSUE */
if (chatStep === "client_issue") {
  if (value.length < 3) {
    await addBotMessage(
      "Please enter valid issue."
    );
    return;
  }

  addUserMessage(value);

  setClientFormData((prev) => ({
    ...prev,
    issue: value,
  }));

  setInput("");
  setChatStep("client_email");

  await addBotMessage(
    "Please share your email address."
  );

  return;
}

/* CLIENT EMAIL */
if (chatStep === "client_email") {
  if (!isValidEmail(value)) {
    await addBotMessage(
      "Please enter valid email."
    );
    return;
  }

  addUserMessage(value);

  setClientFormData((prev) => ({
    ...prev,
    email: value,
  }));

  setInput("");
  setChatStep("client_mobile");

  await addBotMessage(
    "Please share your mobile number."
  );

  return;
}

/* CLIENT MOBILE */
if (chatStep === "client_mobile") {
  if (!isValidMobile(value)) {
    await addBotMessage(
      "Please enter valid mobile number."
    );
    return;
  }

  addUserMessage(value);

  setClientFormData((prev) => ({
    ...prev,
    mobile: value,
  }));

  setInput("");

  await submitClientSupport();

  return;
}

    /* REQUIREMENT */
    if (chatStep === "requirement") {
      if (value.length < 3) {
        await addBotMessage(
          "Please enter a valid requirement."
        );
        return;
      }

      addUserMessage(value);

      setFormData((prev) => ({
        ...prev,
        requirement: value,
      }));

      setInput("");
      setChatStep("name");

      await addBotMessage(
        "Please share your full name."
      );

      return;
    }

    /* NAME */
    if (chatStep === "name") {
      if (!isValidName(value)) {
        await addBotMessage(
          "Please enter a valid full name."
        );
        return;
      }

      addUserMessage(value);

      setFormData((prev) => ({
        ...prev,
        name: value,
      }));

      setInput("");
      setChatStep("mobile");

      await addBotMessage(
        "Please share your mobile number."
      );

      return;
    }

    /* MOBILE */
    if (chatStep === "mobile") {
      if (!isValidMobile(value)) {
        await addBotMessage(
          "Please enter a valid 10 digit mobile number."
        );
        return;
      }

      addUserMessage(value);

      setFormData((prev) => ({
        ...prev,
        mobile: value,
      }));

      setInput("");
      setChatStep("email");

      await addBotMessage(
        "Please share your email address."
      );

      return;
    }

    /* EMAIL */
    if (chatStep === "email") {
      if (!isValidEmail(value)) {
        await addBotMessage(
          "Please enter a valid email address."
        );
        return;
      }

      addUserMessage(value);

      setFormData((prev) => ({
        ...prev,
        email: value,
      }));

      setInput("");
      setChatStep("address");

      await addBotMessage(
        "Please provide your complete address."
      );

      return;
    }

    /* ADDRESS */
    if (chatStep === "address") {
      if (value.length < 5) {
        await addBotMessage(
          "Please enter a valid address."
        );
        return;
      }

      addUserMessage(value);

      setFormData((prev) => ({
        ...prev,
        address: value,
      }));

      setInput("");
      setChatStep("confirm");
      setShowConfirmBox(true);
    }
  };

  /* -------------------------- TYPING -------------------------- */

  const TypingIndicator = () => (
    <div className="flex items-start">
      <div className="max-w-[85%] px-4 py-3 rounded-xl bg-[#040010] border border-[#0B2CC3]">
        <div className="flex gap-1">
          {[0, 0.2, 0.4].map(
            (delay, i) => (
              <motion.span
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay,
                }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );

  /* -------------------------- MINIMIZED -------------------------- */

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        {showIntroText && (
          <div className="px-4 py-2 bg-[#040010] border border-[#0B2CC3] rounded-4xl text-white text-[13px] max-w-[210px]">
            Hey! I'm{" "}
            <span className="font-semibold">
              WheBot
            </span>
            <br />
            How can I help you?
          </div>
        )}

        <button
          onClick={() =>
            setIsMinimized(false)
          }
          className="w-10 h-10 rounded-full bg-black border-2 border-[#0B2CC3] animate-bounce"
        >
          <img
            src={LogosData.botLogo}
            alt="bot"
            className="w-full h-full object-contain scale-[2.2]"
          />
        </button>
      </div>
    );
  }

  /* -------------------------- UI -------------------------- */

  return (
    <div className="fixed bottom-4 right-4 sm:right-6 sm:bottom-6 z-50">
      <div className="rounded-[26px] p-[1.5px] bg-gradient-to-b from-[#0B2CC3] to-white">
        <div className="relative w-[92vw] sm:w-[380px] h-[75vh] sm:h-[600px] rounded-[26px] px-4 pt-4 pb-3 flex flex-col bg-gradient-to-b from-[#040010] to-[#0B2CC3] text-white overflow-hidden">
          {/* HEADER */}
          <div className="flex items-center justify-between h-[38px]">
            <img
              src={LogosData.whebot}
              alt="WheBot"
              className="w-[200px] h-[200px]"
            />

            <div className="flex items-center gap-4">
              <button
                onClick={refreshChat}
              >
                <RefreshCcw size={18} />
              </button>

              <button
                onClick={() =>
                  setIsMinimized(true)
                }
              >
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

          {/* BODY */}
          <div
            ref={chatBodyRef}
           className="flex-1 overflow-y-auto flex flex-col gap-2 pr-1 mt-3 mb-3 overscroll-contain"

          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.type === "user"
                    ? "items-end"
                    : "items-start"
                }`}
              >
                <span className="text-[11px] opacity-80 mb-1">
                  {msg.type === "user"
                    ? "You"
                    : "WheBot"}
                </span>

                <div
                  className={`max-w-[85%] text-sm px-4 py-2 rounded-xl whitespace-pre-line ${
                    msg.type === "user"
                      ? "bg-[#0B2CC3]"
                      : "bg-[#040010] border border-[#0B2CC3]"
                  }`}
                >
                  {msg.type === "bot" &&
                  !msg.isComplete ? (
                    <>
                      {msg.displayText}
                      <span className="inline-block w-[2px] h-[14px] bg-white ml-[2px] animate-pulse" />
                    </>
                  ) : (
                    msg.text
                  )}

                  {/* USER TYPE */}
                  {msg.showOptions && (
                    <div className="mt-3 flex flex-col gap-2">
                      {[
                        "Wheedle Client",
                        "New User",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex gap-2 items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="accent-blue-600 w-4 h-4"
                            onChange={() =>
                              handleSelectType(
                                item ===
                                  "New User"
                                  ? "new_user"
                                  : "wheedle_client"
                              )
                            }
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  )}


                  {/* CLIENT COMPANIES */}
{msg.showClientCompanies && (
  <div className="mt-3 flex flex-col gap-2">
    {clientCompanies.map((item) => (
      <label
        key={item}
        className="flex gap-2 items-center cursor-pointer"
      >
        <input
          type="checkbox"
          className="accent-blue-600 w-4 h-4"
          onChange={() =>
            handleClientCompany(item)
          }
        />
        {item}
      </label>
    ))}
  </div>
)}

                  {/* SERVICES */}
                  {msg.showServices && (
                    <div className="mt-3 flex flex-col gap-2">
                      {[
                        "Web Development",
                        "App Development",
                        "Digital Marketing",
                        "AI Solution & Intelligent Agent",
                        "Other",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex gap-2 items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="accent-blue-600 w-4 h-4"
                            onChange={() =>
                              handleServiceSelect(
                                item
                              )
                            }
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  )}

                  {/* SUB OPTIONS */}
                  {msg.showSubOptions && (
                    <div className="mt-3 flex flex-col gap-2">
                      {msg.subItems.map(
                        (item) => (
                          <label
                            key={item}
                            className="flex gap-2 items-center cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="accent-blue-600 w-4 h-4"
                              onChange={() =>
                                handleSubOption(
                                  item
                                )
                              }
                            />
                            {item}
                          </label>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <span className="text-[11px] opacity-80 mb-1">
                  WheBot
                </span>
                <TypingIndicator />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="mt-auto">
            <div
              className={`flex items-center gap-2 border rounded-[12px] px-4 py-2 ${
                isInputEnabled
                  ? "border-white bg-[#040010]"
                  : "border-white/20 bg-[#040010]/50"
              }`}
            >
              <input
                type="text"
                disabled={!isInputEnabled}
                value={input}
                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }
                placeholder={
                  isInputEnabled
                    ? "Type your answer..."
                    : "Select option above..."
                }
                className="bg-transparent outline-none flex-1 text-sm disabled:cursor-not-allowed"
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  sendMessage()
                }
              />

              <button
                disabled={!isInputEnabled}
                onClick={sendMessage}
                className="w-8 h-8 rounded-full bg-[#0B2CC3] flex items-center justify-center disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* FOOTER */}
          <div className="text-center text-xs mt-2">
            Powered by{" "}
            <span className="font-semibold">
              Wheedle
            </span>{" "}
            Technologies
          </div>

          {/* CONFIRM BOX */}
          {showConfirmBox && (
            <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
              <div className="w-full max-w-sm rounded-2xl border border-[#0B2CC3] bg-gradient-to-b from-[#040010] to-[#0B2CC3] p-5">
                <div className="text-lg font-semibold mb-4">
                  Confirm Details
                </div>

                <div className="space-y-2 text-sm mb-5">
                  <div>
                    <b>Service:</b>{" "}
                    {formData.service}
                  </div>
                  <div>
                    <b>Option:</b>{" "}
                    {
                      formData.subRequirement
                    }
                  </div>
                  <div>
                    <b>Requirement:</b>{" "}
                    {
                      formData.requirement
                    }
                  </div>
                  <div>
                    <b>Name:</b>{" "}
                    {formData.name}
                  </div>
                  <div>
                    <b>Mobile:</b>{" "}
                    {formData.mobile}
                  </div>
                  <div>
                    <b>Email:</b>{" "}
                    {formData.email}
                  </div>
                  <div>
                    <b>Address:</b>{" "}
                    {formData.address}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={
                      restartFlow
                    }
                    className="flex-1 border border-white rounded-xl py-2 flex justify-center items-center gap-2"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button
                    onClick={
                      submitLead
                    }
                    className="flex-1 bg-[#0B2CC3] rounded-xl py-2 flex justify-center items-center gap-2"
                  >
                    <CheckCircle2
                      size={16}
                    />
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhebotPage;




// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import LogosData from "../jsondata/LogosData";
// import API_BASE_URL from "../config/api";

// const WhebotPage = ({ isMinimized, setIsMinimized }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [showIntroText, setShowIntroText] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Auto-scroll to bottom when new messages arrive
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   useEffect(() => {
//     // Add intro message only once when bot opens for the first time
//     if (!isMinimized && messages.length === 0) {
//       setMessages([
//         {
//           type: "bot",
//           text: "Hey! I'm WheBot, How can I help you?",
//           isComplete: true, // Intro message appears instantly
//         },
//       ]);
//     }
//   }, [isMinimized]);

//   useEffect(() => {
//     if (!isMinimized) return;

//     // show after 3 sec
//     const showTimer = setTimeout(() => {
//       setShowIntroText(true);
//     }, 3000);

//     // hide after 12 sec (from page load / minimized state)
//     const hideTimer = setTimeout(() => {
//       setShowIntroText(false);
//     }, 12000);

//     return () => {
//       clearTimeout(showTimer);
//       clearTimeout(hideTimer);
//     };
//   }, [isMinimized]);

//   const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = input;

//     // Add user message
//     setMessages((prev) => [
//       ...prev,
//       { type: "user", text: userMessage, isComplete: true },
//     ]);

//     setInput("");
//     setIsTyping(true); // Show typing indicator

//     try {
//       const response = await axios({
//         method: "post",
//         url: `${API_BASE_URL}/chat`,
//         headers: {
//           "x-api-key": "MY_SUPER_SECRET_KEY",
//           "Content-Type": "application/json",
//         },
//         data: {
//           message: userMessage,
//         },
//       });

//       // FORCE typing to show for 1–2 seconds
//       await sleep(1500);

//       setIsTyping(false); // Hide typing indicator

//       // Add bot response with typewriter effect
//       const botResponse = response.data.reply;

//       // Add empty bot message that will be filled character by character
//       setMessages((prev) => [
//         ...prev,
//         {
//           type: "bot",
//           text: botResponse,
//           displayText: "", // What's currently displayed
//           isComplete: false, // Will be set to true when typing is done
//         },
//       ]);

//       // Typewriter effect
//       typeWriterEffect(botResponse);

//     } catch (error) {
//       console.error("Chat API error:", error);
//       setIsTyping(false);

//       setMessages((prev) => [
//         ...prev,
//         {
//           type: "bot",
//           text: "Unable to connect to server. Please try again.",
//           isComplete: true,
//         },
//       ]);
//     }
//   };

//   // Typewriter effect function
//   const typeWriterEffect = (fullText) => {
//     let currentIndex = 0;
//     const typingSpeed = 30; // milliseconds per character (adjust for faster/slower typing)

//     const intervalId = setInterval(() => {
//       currentIndex++;

//       setMessages((prev) => {
//         const updated = [...prev];
//         const lastMessage = updated[updated.length - 1];

//         if (lastMessage && lastMessage.type === "bot" && !lastMessage.isComplete) {
//           lastMessage.displayText = fullText.slice(0, currentIndex);

//           // Mark as complete when all text is typed
//           if (currentIndex >= fullText.length) {
//             lastMessage.isComplete = true;
//             clearInterval(intervalId);
//           }
//         }

//         return updated;
//       });
//     }, typingSpeed);
//   };

//   // Typing Indicator Component
//   const TypingIndicator = () => {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         className="flex items-start"
//       >
//         <div className="max-w-[85%] px-4 py-3 rounded-xl bg-[#040010] border border-[#0B2CC3]">
//           <div className="flex items-center gap-1">
//             <motion.span
//               className="w-2 h-2 bg-white rounded-full"
//               animate={{ y: [0, -8, 0] }}
//               transition={{
//                 duration: 0.6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.span
//               className="w-2 h-2 bg-white rounded-full"
//               animate={{ y: [0, -8, 0] }}
//               transition={{
//                 duration: 0.6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.2,
//               }}
//             />
//             <motion.span
//               className="w-2 h-2 bg-white rounded-full"
//               animate={{ y: [0, -8, 0] }}
//               transition={{
//                 duration: 0.6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.4,
//               }}
//             />
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const refreshChat = () => {
//     setMessages([]);
//     setIsTyping(false);
//   };

//   /* ---------------- MINIMIZED VIEW ---------------- */
//   if (isMinimized) {
//     return (
//       <AnimatePresence>
//         {/* ================= MINIMIZED ICON ================= */}
//         {isMinimized && (
//           <motion.div
//             key="minimized"
//             className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2"
//             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 20 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//           >
//             <AnimatePresence>
//               {showIntroText && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.6, x: 20 }}
//                   animate={{ opacity: 1, scale: 1, x: 0 }}
//                   exit={{ opacity: 0, scale: 0.6, x: 20 }}
//                   className="
//                     cursor-pointer
//                     px-4 py-2
//                     bg-[#040010]
//                     border border-[#0B2CC3]
//                     rounded-4xl
//                     text-white
//                     text-[13px]
//                     leading-snug
//                     max-w-[210px]
                    
//                   "
//                 >
//                   Hey! I'm <span className="font-semibold">WheBot</span>,
//                   <br /> How can I help you?
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <motion.button
//               layoutId="chatbot-container"
//               onClick={() => setIsMinimized(false)}
//               className="w-10 h-10 rounded-full bg-black border-2 border-[#0B2CC3] mr-2 animate-bounce"
//             >
//               <img
//                 // src="/whebot.svg"
//                 src={LogosData.botLogo}
//                 alt="WheBot"
//                 className="w-full h-full object-contain scale-[2.2]"
//               />
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     );
//   }

//   const popupVariants = {
//     hidden: {
//       opacity: 0,
//       clipPath: "circle(0% at 100% 100%)",
//     },
//     visible: {
//       opacity: 1,
//       clipPath: "circle(150% at 100% 100%)",
//       transition: {
//         type: "spring",
//         stiffness: 140,
//         damping: 28,
//         mass: 1.2,
//       },
//     },
//     exit: {
//       opacity: 0,
//       clipPath: "circle(0% at 100% 100%)",
//       transition: {
//         duration: 0.45,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Message animation variants
//   const messageVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//       scale: 0.8,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 500,
//         damping: 30,
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   /* ---------------- FULL VIEW ---------------- */
//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
//         variants={popupVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
//         {/* Gradient Border */}
//         <div className="rounded-[26px] p-[1.5px] bg-gradient-to-b from-[#0B2CC3] to-white">
//           {/* Main Container - INCREASED HEIGHT */}
//           <div
//             className="
//             w-[92vw] sm:w-[380px]
//             h-[75vh] sm:h-[600px]
//             max-h-[700px]
//             rounded-[26px]
//             px-4 pt-4 pb-3
//             flex flex-col
//             bg-gradient-to-b from-[#040010] to-[#0B2CC3]
//             text-white
//             transition-all duration-300
//             overflow-hidden
//           "
//           >
//             {/* HEADER */}
//             <div className="flex items-center justify-between h-[38px] flex-shrink-0">
//               {/* LEFT */}
//               <div className="flex items-center">
//                 <img
//                   // src="/whebot_lg.svg"
//                   src={LogosData.whebot}
//                   alt="WheBot"
//                   className="w-[200px] h-[200px]"
//                 />
//               </div>

//               {/* RIGHT ICONS */}
//               <div className="flex items-center gap-4">
//                 {/* Refresh */}
//                 <button
//                   onClick={refreshChat}
//                   title="Refresh chat"
//                   className="hover:scale-110 transition"
//                 >
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M3 12a9 9 0 1 0 3-6.7"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                     <path
//                       d="M3 4v5h5"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </button>

//                 {/* Minimize */}
//                 <button
//                   onClick={() => setIsMinimized(true)}
//                   title="Minimize"
//                   className="hover:scale-110 transition"
//                 >
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M6 9l6 6 6-6"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M6 4l6 6 6-6"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* BODY */}
//             <>
//               {/* CHAT - More space for messages */}
//               <div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-1 mt-3 mb-3">
//                 <AnimatePresence mode="popLayout">
//                   {messages.map((msg, index) => (
//                     <motion.div
//                       key={index}
//                       variants={messageVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className={`flex flex-col ${msg.type === "user" ? "items-end" : "items-start"
//                         }`}
//                     >
//                       <span className="text-[11px] text-white opacity-80 mb-1">
//                         {msg.type === "user" ? "You" : "WheBot"}
//                       </span>

//                       <div
//                         className={`max-w-[85%] text-sm px-4 py-2 rounded-xl ${msg.type === "user"
//                           ? "bg-[#0B2CC3]"
//                           : "bg-[#040010] border border-[#0B2CC3]"
//                           }`}
//                       >
//                         {msg.type === "bot" && !msg.isComplete ? (
//                           <>
//                             {msg.displayText}
//                             <span className="inline-block w-[2px] h-[14px] bg-white ml-[2px] animate-pulse" />
//                           </>
//                         ) : (
//                           msg.text
//                         )}
//                       </div>
//                     </motion.div>
//                   ))}

//                   {/* Typing Indicator */}
//                   {isTyping && (
//                     <div className="flex flex-col items-start">
//                       <span className="text-[11px] text-white opacity-80 mb-1">
//                         WheBot
//                       </span>
//                       <TypingIndicator />
//                     </div>
//                   )}
//                 </AnimatePresence>
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* INPUT */}
//               <div className="mt-auto flex-shrink-0">
//                 <div className="flex items-center gap-2 border border-white rounded-[12px] px-4 py-2 bg-[#040010]">
//                   <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Ask me anything..."
//                     className="bg-transparent outline-none flex-1 text-sm placeholder:text-white/60"
//                     onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                   />
//                   <button
//                     onClick={sendMessage}
//                     className="w-8 h-8 rounded-full bg-[#0B2CC3] flex items-center justify-center hover:scale-110 transition-transform"
//                   >
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                       <path
//                         d="M12 19V5M5 12l7-7 7 7"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* FOOTER */}
//               <div className="text-center text-xs mt-2 text-white flex-shrink-0">
//                 Powered by <span className="font-semibold">Wheedle</span>{" "}
//                 Technologies
//               </div>
//             </>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default WhebotPage;