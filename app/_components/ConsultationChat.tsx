"use client";

import { useEffect, useRef, useState } from "react";
import { consultationChat, consultationFlow, consultationSteps, otherOptionLabel, type ConsultationAnswers, type ConsultationStepId } from "../_data/consultation-chat";
import { findApprovedConsultationGuide } from "../_data/consultation-chat-knowledge";
import { BrandMark } from "./BrandMark";

function buildConsultationEmail(answers: ConsultationAnswers) {
  const subject = `Free consultation request — ${answers.name ?? ""}`;
  const body = ["Hello Riku,", "", "I would like to request an academic planning consultation.", "", ...consultationFlow.flatMap((step) => [`${consultationSteps[step].summaryLabel}:`, answers[step] ?? "Not answered", ""])].join("\n");
  return `mailto:${consultationChat.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ConsultationChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<ConsultationAnswers>({});
  const [draft, setDraft] = useState("");
  const [isWritingOther, setIsWritingOther] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isComplete = currentStep >= consultationFlow.length;
  const activeStepId = consultationFlow[currentStep] as ConsultationStepId | undefined;
  const activeStep = activeStepId ? consultationSteps[activeStepId] : undefined;
  const guidance = findApprovedConsultationGuide(answers.supportRequest);

  useEffect(() => {
    if (!isOpen) return;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 220);
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", handleKeyDown);
    return () => { window.clearTimeout(focusTimer); window.removeEventListener("keydown", handleKeyDown); };
  }, [isOpen]);

  useEffect(() => { if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [currentStep, isOpen]);

  const advance = (step: ConsultationStepId, value: string) => { setAnswers((current) => ({ ...current, [step]: value })); setDraft(""); setIsWritingOther(false); setCurrentStep((current) => current + 1); };
  const goBack = () => { setDraft(""); setIsWritingOther(false); setCurrentStep((current) => Math.max(0, current - 1)); };
  const restart = () => { setAnswers({}); setDraft(""); setIsWritingOther(false); setCurrentStep(0); };

  const submitDraft = () => {
    if (!activeStepId || !activeStep) return;
    const value = draft.trim();
    if (!value) { if (activeStep.required || isWritingOther) return; advance(activeStepId, "Nothing specific"); return; }
    advance(activeStepId, isWritingOther ? `Other: ${value}` : value);
  };

  const renderStepInput = () => {
    if (!activeStepId || !activeStep) return null;
    if (activeStep.kind === "choice" && !isWritingOther) return <div className="consultation-options" aria-label="Choose an answer">{activeStep.options.map((option) => <button type="button" key={option} onClick={() => advance(activeStepId, option)}>{option}</button>)}{activeStep.allowOther && <button type="button" onClick={() => setIsWritingOther(true)}>{otherOptionLabel} (write your own)</button>}</div>;
    const isTextarea = activeStep.kind === "textarea" || isWritingOther;
    const placeholder = isWritingOther ? "Write your answer here." : activeStep.kind === "choice" ? "" : activeStep.placeholder;
    return <form className="consultation-step-form" onSubmit={(event) => { event.preventDefault(); submitDraft(); }}><label htmlFor="consultation-step-input">{activeStep.prompt}</label>{isTextarea ? <textarea id="consultation-step-input" value={draft} rows={3} placeholder={placeholder} onChange={(event) => setDraft(event.target.value)} /> : <input id="consultation-step-input" type={activeStep.kind === "text" ? (activeStep.inputType ?? "text") : "text"} value={draft} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); submitDraft(); } }} placeholder={placeholder} autoComplete={activeStepId === "name" ? "name" : activeStepId === "email" ? "email" : "off"} onChange={(event) => setDraft(event.target.value)} />}<div className="consultation-step-actions">{isWritingOther && <button type="button" className="consultation-step-secondary" onClick={() => { setIsWritingOther(false); setDraft(""); }}>Back to choices</button>}{!activeStep.required && !isWritingOther && <button type="button" className="consultation-step-secondary" onClick={() => advance(activeStepId, "Nothing specific")}>Skip</button>}<button type="submit" className="consultation-step-next" disabled={!draft.trim()}>Next</button></div></form>;
  };

  return <aside className={`consultation-chat${isOpen ? " is-open" : ""}`}><section id="consultation-chat-panel" className="consultation-chat-panel" role="dialog" aria-modal="false" aria-labelledby="consultation-chat-title" aria-hidden={!isOpen}><header className="consultation-chat-header"><div className="consultation-chat-identity"><BrandMark inverse /><div><span>FREE · ONE-TO-ONE</span><strong id="consultation-chat-title">{consultationChat.title}</strong></div></div><button ref={closeRef} type="button" className="consultation-chat-close" aria-label="Close consultation form" onClick={() => setIsOpen(false)}>×</button></header><div className="consultation-chat-progress" aria-label="Consultation progress"><span>{isComplete ? "Ready to review" : `Question ${currentStep + 1} / ${consultationFlow.length}`}</span><i aria-hidden="true"><b style={{ width: `${isComplete ? 100 : (currentStep / consultationFlow.length) * 100}%` }} /></i></div><div className="consultation-chat-messages" aria-live="polite"><div className="consultation-message consultation-message-assistant"><span>PLANNING CHAT</span><p>{consultationChat.welcome}</p></div>{consultationFlow.slice(0, currentStep).map((step) => <div className="consultation-exchange" key={step}><div className="consultation-message consultation-message-assistant"><span>PLANNING CHAT</span><p>{consultationSteps[step].prompt}</p></div><div className="consultation-message consultation-message-user"><span>YOUR ANSWER</span><p>{answers[step]}</p></div></div>)}{!isComplete && activeStep && <div className="consultation-current-step"><div className="consultation-message consultation-message-assistant"><span>PLANNING CHAT</span><p>{activeStep.prompt}</p></div>{renderStepInput()}{currentStep > 0 && <button type="button" className="consultation-step-back" onClick={goBack}>← Go back</button>}</div>}{isComplete && <section className="consultation-summary" aria-labelledby="consultation-summary-title"><p className="consultation-summary-kicker">READY TO SEND</p><h3 id="consultation-summary-title">Review your message</h3><dl>{consultationFlow.map((step) => <div key={step}><dt>{consultationSteps[step].summaryLabel}</dt><dd>{answers[step] ?? "Not answered"}</dd></div>)}</dl>{guidance && <div className="consultation-summary-guidance"><strong>A relevant starting point</strong><p>{guidance}</p></div>}<a className="consultation-summary-cta" href={buildConsultationEmail(answers)}>Send this by email <span aria-hidden="true">↗</span></a><button type="button" className="consultation-restart" onClick={restart}>Start again</button><small>Your email app will open. You can add context before sending. {consultationChat.privacyNote}</small></section>}<div ref={messagesEndRef} /></div>{!isComplete && <footer className="consultation-chat-compose"><div className="consultation-chat-footer"><a href={consultationChat.contactHref}>{consultationChat.contactLabel}</a><p>{consultationChat.privacyNote}</p></div></footer>}</section><button type="button" className="consultation-chat-trigger" aria-expanded={isOpen} aria-controls="consultation-chat-panel" onClick={() => setIsOpen((current) => !current)}><span className="consultation-trigger-status" aria-hidden="true" /><span><strong>{consultationChat.title}</strong><small>{consultationChat.description}</small></span><i aria-hidden="true">{isOpen ? "×" : "↗"}</i></button></aside>;
}
