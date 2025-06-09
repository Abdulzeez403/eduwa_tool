"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real application, we would submit this to a backend
      setIsSubmitted(true)
      setEmail("")
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-secondary/30">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Stay in the Loop</h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Subscribe to our newsletter for the latest educational tools, expert reviews, and teaching strategies delivered to your inbox.
            </p>
          </div>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 p-6 rounded-2xl flex items-center justify-center space-x-3 border border-green-200 dark:border-green-800"
            >
              <Check className="h-6 w-6" />
              <span className="text-lg font-medium">Thank you for subscribing! Check your email for confirmation.</span>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full py-3 px-4 text-base rounded-xl border-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="px-8 py-3 text-base font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                Subscribe
              </Button>
            </motion.form>
          )}
          
          <p className="text-sm text-muted-foreground">
            By subscribing, you agree to our{" "}
            <a href="#" className="underline hover:text-foreground transition-colors">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="underline hover:text-foreground transition-colors">Privacy Policy</a>.
            <br />
            We'll never share your email with third parties.
          </p>
        </motion.div>
      </div>
    </section>
  )
}