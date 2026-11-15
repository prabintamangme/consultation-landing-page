"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[-\s()0-9]{7,20}$/;

function isValidOptionalUrl(value: string) {
  if (!value.trim()) return true;

  try {
    const url = new URL(
      /^https?:\/\//i.test(value) ? value : `https://${value}`,
    );
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate() {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = "Enter your full name.";
    if (!values.email.trim()) {
      nextErrors.email = "Enter your active email.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.whatsapp.trim()) {
      nextErrors.whatsapp = "Enter your WhatsApp number.";
    } else if (!phonePattern.test(values.whatsapp)) {
      nextErrors.whatsapp = "Enter a valid WhatsApp number.";
    }
    if (!values.businessName.trim()) {
      nextErrors.businessName = "Enter your business or institution name.";
    }
    if (!isValidOptionalUrl(values.website)) {
      nextErrors.website = "Enter a valid website or Facebook URL.";
    }

    return nextErrors;
  }

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstError = Object.keys(nextErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setIsSubmitting(true);
    sessionStorage.setItem("learningevergrow-demo-submission", "complete");
    window.setTimeout(() => router.push("/thank-you"), 500);
  }

  const fields: Array<{
    id: keyof FormValues;
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
    autoComplete?: string;
  }> = [
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "Your full name",
      required: true,
      autoComplete: "name",
    },
    {
      id: "email",
      label: "Active Email",
      placeholder: "you@example.com",
      type: "email",
      required: true,
      autoComplete: "email",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Number",
      placeholder: "+977 98XXXXXXXX",
      type: "tel",
      required: true,
      autoComplete: "tel",
    },
    {
      id: "businessName",
      label: "Business Name",
      placeholder: "Your business or institution",
      required: true,
      autoComplete: "organization",
    },
    {
      id: "website",
      label: "Website or Facebook URL",
      placeholder: "https://example.com",
      type: "url",
      autoComplete: "url",
    },
  ];

  return (
    <section
      id="consultation-form"
      className="relative scroll-mt-4 overflow-hidden bg-[#eef5f1] py-16 sm:py-24"
      aria-labelledby="form-title"
    >
      <div
        className="absolute right-[-8rem] top-[-8rem] size-80 rounded-full bg-[#c89536]/15 blur-[90px]"
        aria-hidden="true"
      />
      <div className="page-shell relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-12">
          <span className="eyebrow">Book the Call</span>
          <h2
            id="form-title"
            className="mt-5 text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#071f31] sm:text-5xl"
          >
            One-to-one research consultation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5b6e75]">
            Share what you are working on and the support you need. Your
            answers help make the conversation more focused.
          </p>

          <div className="mt-7 rounded-2xl border border-[#d6e3de] bg-white/70 p-5">
            <p className="font-extrabold text-[#0a4048]">What to expect</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#61727a]">
              <li>• A focused one-to-one conversation</li>
              <li>• Guidance based on your research needs</li>
              <li>• A clearer direction for your next step</li>
            </ul>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="glass-card rounded-[1.75rem] p-5 sm:p-8 lg:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <div
                key={field.id}
                className={field.id === "website" ? "sm:col-span-2" : ""}
              >
                <label htmlFor={field.id} className="field-label">
                  {field.label}
                  {field.required ? (
                    <span className="text-[#9f241a]" aria-hidden="true">
                      {" "}*
                    </span>
                  ) : (
                    <span className="font-medium text-[#7a8a90]"> (optional)</span>
                  )}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type ?? "text"}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  value={values[field.id]}
                  onChange={(event) => updateField(field.id, event.target.value)}
                  placeholder={field.placeholder}
                  aria-invalid={Boolean(errors[field.id])}
                  aria-describedby={
                    errors[field.id] ? `${field.id}-error` : undefined
                  }
                  className="field-input"
                />
                {errors[field.id] && (
                  <p
                    id={`${field.id}-error`}
                    role="alert"
                    className="field-error"
                  >
                    {errors[field.id]}
                  </p>
                )}
              </div>
            ))}

            <div className="sm:col-span-2">
              <label htmlFor="message" className="field-label">
                Anything You Want to Say
                <span className="font-medium text-[#7a8a90]"> (optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell me about your research and where you need support."
                className="field-input min-h-32 resize-y"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-button mt-6 w-full cursor-pointer disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting
              ? "Opening Your Next Step..."
              : "Book Your Research Consultation"}
          </button>

          <p className="mt-4 text-center text-sm font-semibold text-[#5d6f76]">
            We respect your privacy. No spam.
          </p>
          <p className="mt-2 text-center text-xs leading-5 text-[#7b8b90]">
            Preview mode: this form validates your details but does not send
            them to a backend yet.
          </p>
        </form>
      </div>
    </section>
  );
}
