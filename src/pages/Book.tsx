import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/src/components/ui/Button";

const formSchema = z.object({
  coupleNames: z.string().min(2, "Please enter both your names"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  weddingDate: z.string().min(1, "Please select a date"),
  location: z.string().min(2, "Please enter a location"),
  guestCount: z.string().min(1, "Please estimate guest count"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Book() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventType: "Wedding Film & Photography",
      budget: "$5,000 - $10,000"
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['coupleNames', 'email', 'phone'];
    if (step === 2) fieldsToValidate = ['eventType', 'weddingDate', 'location', 'guestCount'];
    
    const isStepValid = await trigger(fieldsToValidate as any);
    if (isStepValid) setStep(prev => prev + 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate Supabase submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    
    // In real app, call Supabase edge function or insert here
    // const { error } = await supabase.from('inquiries').insert([data]);
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-4 mb-16">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-bold border transition-colors ${
            step >= num 
              ? 'bg-[#D4AF37] border-[#D4AF37] text-black' 
              : 'border-[#A89F8C]/30 text-[#A89F8C]'
          }`}>
            {num}
          </div>
          {num < 3 && (
            <div className={`w-12 h-px mx-2 transition-colors ${step > num ? 'bg-[#D4AF37]' : 'bg-[#A89F8C]/30'}`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <main className="bg-[#0A0707] min-h-screen pt-32 pb-24">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center mb-12">
           <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#F5E9D3] mb-4">Start the Conversation</h1>
           <p className="font-sans text-[#A89F8C]">Tell us about your day. We take a limited number of commissions per year.</p>
        </div>

        {renderStepIndicator()}

        <div className="bg-[#15100E] p-8 md:p-12 border border-[#D4AF37]/15">
          {isSuccess ? (
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="text-center py-12"
             >
                <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                </div>
                <h2 className="font-display text-3xl text-[#F5E9D3] mb-4">Inquiry Received</h2>
                <p className="font-sans text-[#A89F8C] mb-8">We will review your details and get back to you within 24-48 hours. Let's create something beautiful.</p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="font-accent text-2xl text-[#D4AF37] mb-8">1. The Couple</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Both Your Names</label>
                        <input {...register("coupleNames")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37]" placeholder="Aman & Priya" />
                        {errors.coupleNames && <p className="text-red-400 text-xs mt-2">{errors.coupleNames.message}</p>}
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Email Address</label>
                        <input type="email" {...register("email")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37]" placeholder="hello@example.com" />
                        {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Phone Number</label>
                        <input type="tel" {...register("phone")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37]" placeholder="+91 98765 43210" />
                        {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone.message}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="font-accent text-2xl text-[#D4AF37] mb-8">2. The Event</h3>
                    <div className="space-y-6">
                       <div>
                        <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Event Type</label>
                        <select {...register("eventType")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37] appearance-none">
                          <option>Wedding Film & Photography</option>
                          <option>Pre-Wedding Story</option>
                          <option>Intimate Wedding / Elopement</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Date</label>
                          <input type="date" {...register("weddingDate")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37]" style={{colorScheme: 'dark'}} />
                          {errors.weddingDate && <p className="text-red-400 text-xs mt-2">{errors.weddingDate.message}</p>}
                        </div>
                        <div>
                          <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Est. Guests</label>
                          <input type="number" {...register("guestCount")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37]" placeholder="250" />
                          {errors.guestCount && <p className="text-red-400 text-xs mt-2">{errors.guestCount.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Location / Venue</label>
                        <input {...register("location")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37]" placeholder="e.g. Udaipur, India" />
                        {errors.location && <p className="text-red-400 text-xs mt-2">{errors.location.message}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="font-accent text-2xl text-[#D4AF37] mb-8">3. The Details</h3>
                    <div className="space-y-6">
                       <div>
                        <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Investment Range</label>
                        <select {...register("budget")} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37] appearance-none">
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $20,000</option>
                          <option>$20,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] mb-2">Tell us your story</label>
                        <textarea {...register("message")} rows={4} className="w-full bg-[#0A0707] border border-[#D4AF37]/30 text-[#F5E9D3] p-4 font-sans focus:outline-none focus:border-[#D4AF37] resize-none" placeholder="How did you meet? What's the vibe of the wedding..." />
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              <div className="flex justify-between mt-12 pt-8 border-t border-[#D4AF37]/15">
                {step > 1 ? (
                  <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>Back</Button>
                ) : <div />}
                
                {step < 3 ? (
                  <Button type="button" variant="primary" onClick={nextStep}>Continue</Button>
                ) : (
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
