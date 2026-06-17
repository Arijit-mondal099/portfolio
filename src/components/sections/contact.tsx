import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/layout/section";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

/** "Open to opportunities" pill with a pulsing dot, shown by the heading. */
function AvailabilityBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {profile.availability}
    </span>
  );
}

/**
 * Contact — a short lead-in plus social links (with handles) on the left, the
 * message form on the right, vertically centered. Stacks on small screens.
 */
export function Contact() {
  return (
    <Section id="contact" heading="Contact" action={<AvailabilityBadge />}>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 sm:items-center">
        <div className="flex flex-col gap-6">
          <p className="leading-relaxed text-muted-foreground">
            {profile.contactNote}
          </p>

          <ul className="flex flex-col gap-1">
            {socials.map(({ label, handle, href, icon: Icon }) => {
              const isExternal = href.startsWith("http");
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="group -mx-2 flex items-center gap-3 rounded-md px-2 py-2 transition-colors duration-200 ease-out hover:bg-muted"
                  >
                    <Icon className="size-5 shrink-0 text-muted-foreground transition-colors duration-200 ease-out group-hover:text-foreground" />
                    <span className="flex flex-col leading-tight">
                      <span className="text-foreground">{label}</span>
                      <span className="text-xs text-muted-foreground">
                        {handle}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
