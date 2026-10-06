import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Check } from "lucide-react";
import { Action, Reveal, Section, SectionHeading, Text, TextLink } from "@/components/primitives";
import { socials } from "@/data/content";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Tell me a little more (at least 10 characters)."),
});
type FormValues = z.infer<typeof schema>;

const fieldClass =
  "type-body w-full border-0 border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/70 transition-[border-color,padding,color] duration-300 ease-out hover:border-muted-foreground focus:border-foreground focus:pl-2 motion-reduce:focus:pl-0 focus:outline-none aria-[invalid=true]:border-destructive";

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit = (values: FormValues) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:hello@sahilbarve.dev?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" divided className="scroll-mt-16">
      <SectionHeading index="07" title="Contact" />

      <Reveal delay={80}>
        <h2 className="type-display mt-8 uppercase md:mt-10">
          Let&apos;s build
          <br />
          something<span className="text-accent">.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
        <Reveal delay={120} className="md:col-span-7">
          {sent ? (
            <div className="flex items-start gap-4 border border-foreground bg-surface p-6" role="status">
              <span className="flex size-8 shrink-0 items-center justify-center bg-accent">
                <Check className="size-4" />
              </span>
              <div>
                <p className="text-lg font-medium tracking-tight">Thanks — your email app should be open.</p>
                <p className="type-small mt-1 text-muted-foreground">
                  If it didn&apos;t open, write to me directly at hello@sahilbarve.dev.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message} id="name">
                  <input
                    id="name"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass}
                    {...register("name")}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message} id="email">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass}
                    {...register("email")}
                  />
                </Field>
              </div>
              <Field label="Message" error={errors.message?.message} id="message">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What are we building?"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(fieldClass, "resize-none")}
                  {...register("message")}
                />
              </Field>
              <div>
                <Action type="submit" size="lg" disabled={isSubmitting}>
                  Send message
                </Action>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={200} className="md:col-span-4 md:col-start-9">
          <p className="type-label text-muted-foreground">Direct</p>
          <ul className="mt-4">
            {socials.map((s) => (
              <li key={s.label} className="border-b border-border">
                <TextLink
                  plain
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex w-full items-center justify-between py-4"
                >
                  <span className="flex flex-col">
                    <span className="text-lg font-medium tracking-tight">{s.label}</span>
                    <span className="type-meta text-muted-foreground">{s.handle}</span>
                  </span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </TextLink>
              </li>
            ))}
          </ul>
          <Text variant="small" className="mt-6">
            Usually replies within a day. Open to freelance, full-time and interesting
            collaborations.
          </Text>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="type-label text-muted-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="type-small mt-2 text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
