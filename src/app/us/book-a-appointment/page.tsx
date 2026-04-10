import { constructMetadata } from "@/lib/seo";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const generateMetadata = () => constructMetadata(
  "Book a Appointment",
  "Schedule a consultation for Reddit strategy in the US.",
  "/us/book-a-appointment",
  "us"
);

export default function Page() {
  return (
    <section style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <div className="container">
        <div className="split-layout">
          {/* Content Left */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>
              Ready to engineer reputation?
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '500px' }}>
              Host a discovery call. We'll listen to your objectives, tell you what’s possible, and get started with Reddify.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(230, 46, 86, 0.1)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '1rem', fontWeight: 700 }}>01</div>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Strategic Alignment</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>Ensuring our methodology fits your brand goals.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(230, 46, 86, 0.1)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '1rem', fontWeight: 700 }}>02</div>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Network Activation</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>Tailoring operator selection for your niche.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div style={{ flex: 1.2 }}>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
