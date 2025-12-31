import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <>
      <div className="absolute inset-0 bg-diamond-subtle opacity-5 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-primary">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl italic font-serif">
            We'd love to hear from you. Visit us for a meal, call for takeout,
            or send us a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 min-h-[150px] focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
