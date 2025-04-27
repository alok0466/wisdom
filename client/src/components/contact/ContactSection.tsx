import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  Home,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-accent" />,
      title: "Address",
      details: "123 Design Avenue, Suite 500\nNew York, NY 10001",
    },
    {
      icon: <Phone className="text-accent" />,
      title: "Phone",
      details: "+1 (212) 555-6789",
    },
    {
      icon: <Mail className="text-accent" />,
      title: "Email",
      details: "info@UrbanVisiondesign.com",
    },
    {
      icon: <Clock className="text-accent" />,
      title: "Hours",
      details: "Monday - Friday: 9am - 6pm\nSaturday: 10am - 4pm\nSunday: Closed",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://instagram.com" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
    { icon: <Home size={18} />, href: "https://houzz.com" },
    { icon: <HelpCircle size={18} />, href: "https://pinterest.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-montserrat text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mt-2">Contact Us</h2>
          <div className="w-24 h-px bg-accent mx-auto my-6"></div>
          <p className="text-darkText/70">Ready to transform your space? Reach out to us to discuss your project or schedule a consultation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-montserrat text-primary mb-2">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border border-secondary/30 focus:border-accent focus:outline-none bg-transparent transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-montserrat text-primary mb-2">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border border-secondary/30 focus:border-accent focus:outline-none bg-transparent transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-montserrat text-primary mb-2">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Subject"
                          className="w-full px-4 py-3 border border-secondary/30 focus:border-accent focus:outline-none bg-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-montserrat text-primary mb-2">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={6}
                          placeholder="Your Message"
                          className="w-full px-4 py-3 border border-secondary/30 focus:border-accent focus:outline-none bg-transparent transition-colors resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-accent text-white font-montserrat text-sm tracking-wider hover:bg-accent/90 transition-colors"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </form>
            </Form>
          </div>

          <div>
            <div className="bg-neutral p-8 h-full">
              <h3 className="font-playfair text-2xl font-medium text-primary mb-6">Our Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-montserrat text-sm font-medium uppercase text-primary">{item.title}</h4>
                      <p className="mt-2 text-darkText/70 whitespace-pre-line">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-montserrat text-sm font-medium uppercase text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
