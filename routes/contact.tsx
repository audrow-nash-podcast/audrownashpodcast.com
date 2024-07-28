import { PageLayout } from "../components/PageLayout.tsx";
import FoldingSection from "../islands/FoldingSection.tsx";
import { CONTACT_EMAILS, SOCIAL_LINKS } from "../constants.ts";

export default function Contact() {
  return (
    <PageLayout title="Get in Touch" currentPage="contact">
      <h2 class="text-4xl font-bold mb-8">Get in Touch</h2>

      <div class="space-y-4">
        <FoldingSection title="Want to be on the podcast?">
          <p>
            I'm happy to schedule an intro call to see if it's a good fit.
          </p>
          <p>
            Send an email to{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.INTERVIEW}`}
              class="text-blue-600 hover:underline"
            >
              {CONTACT_EMAILS.INTERVIEW}
            </a>.
          </p>
        </FoldingSection>

        <FoldingSection title="Looking for a robotics job or a mentor?">
          <p>I'm happy to see if I can help.</p>
          <p>
            Send an email to{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.JOB_SEARCH}`}
              class="text-blue-600 hover:underline"
            >
              {CONTACT_EMAILS.JOB_SEARCH}
            </a>{" "}
            or<br />
            <a
              href={`mailto:${CONTACT_EMAILS.MENTOR}`}
              class="text-blue-600 hover:underline"
            >
              {CONTACT_EMAILS.MENTOR}
            </a>.
          </p>
        </FoldingSection>

        <FoldingSection title="Sponsor the podcast?">
          <p>I'm happy to schedule a call to see if it's a good fit.</p>
          <p>
            Send an email to{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.SPONSOR}`}
              class="text-blue-600 hover:underline"
            >
              {CONTACT_EMAILS.SPONSOR}
            </a>.
          </p>
        </FoldingSection>

        <FoldingSection title="Connect on social?">
          <p>I'm happy to connect. I'm on</p>
          <ul class="list-disc list-inside">
            <li>
              <a
                href={SOCIAL_LINKS.X.url}
                class="text-blue-600 hover:underline"
              >
                {SOCIAL_LINKS.X.displayName}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.YOUTUBE.url}
                class="text-blue-600 hover:underline"
              >
                {SOCIAL_LINKS.YOUTUBE.displayName}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.LINKEDIN.url}
                class="text-blue-600 hover:underline"
              >
                {SOCIAL_LINKS.LINKEDIN.displayName}
              </a>
            </li>
          </ul>
          <p>
            I'm most active on{" "}
            {SOCIAL_LINKS.X.displayName}, but I try to reply on all of them.
          </p>
        </FoldingSection>

        <FoldingSection title="Something else?">
          <p>I'm curious.</p>
          <p>
            Feel free to send an email to{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.GENERAL}`}
              class="text-blue-600 hover:underline"
            >
              {CONTACT_EMAILS.GENERAL}
            </a>.
          </p>
        </FoldingSection>
      </div>

      <div class="mt-12">
        <img
          src="/cato-at-computer.jpeg"
          alt="My dog Cato, hard at work"
          class="w-full max-w-2xl mx-auto mb-4"
          loading="lazy"
        />
        <p class="text-center text-sm text-gray-600">
          My dog Cato, hard at work.
        </p>
      </div>
    </PageLayout>
  );
}
