import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;

    formData.set("name", `${firstName} ${lastName}`);

    formData.delete("first_name");
    formData.delete("last_name");

    const message = formData.get("message") as string;
    const phone = formData.get("phone") as string;

    formData.set("message", `${message}\n\nPhone: ${phone}`);

    formData.delete("phone");

    // Send to FormSubmit
    const res = await fetch(
      "https://us-central1-contact-from-470814.cloudfunctions.net/contactForm",
      {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      toast.success("Message Sent Successfully!");
      form.reset();
    } else {
      toast.error("Failed to send message!");
    }
  };
  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 bg-diamond-subtle opacity-5 z-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`space-y-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-primary">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-playfair">
              We'd love to hear from you. Visit us for a meal, call for takeout,
              or send us a message.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Visit Us</h4>
                      <p className="text-muted-foreground">
                        278 Pearl St,
                        <br />
                        Malden, MA 02148
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <p className="text-muted-foreground">(781) 960-8819</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Opening Hours</h4>
                      <p className="text-muted-foreground">
                        Mon - Sun: 11:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-xl overflow-hidden border border-border relative">
                {/* In a real app, embed Google Maps iframe here */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.061734261683!2d-71.0768916!3d42.4276708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3716d1f3b7f1b%3A0x6b8f3b8f3b8f3b8f!2s278%20Pearl%20St%2C%20Malden%2C%20MA%2002148!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-lg bg-muted/30"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest ml-5 text-muted-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-muted/30 border-2 border-border/50 rounded-full px-6 py-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/40"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest ml-5 text-muted-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-muted/30 border-2 border-border/50 rounded-full px-6 py-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/40"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest ml-5 text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-muted/30 border-2 border-border/50 rounded-full px-6 py-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/40"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest ml-5 text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-muted/30 border-2 border-border/50 rounded-[2rem] px-6 py-5 min-h-[180px] text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/40"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-black uppercase tracking-widest py-5 rounded-full hover:bg-secondary hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 mt-4"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
