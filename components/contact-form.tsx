"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import type { ContactFormData } from "@/types/contact"

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        })
      } else {
        setSubmitStatus({ type: "error", message: result.error })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Smith"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your Company Name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interested In</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="cloud">Cloud Solutions</SelectItem>
                <SelectItem value="ai">AI & Machine Learning</SelectItem>
                <SelectItem value="blockchain">Blockchain & Web3</SelectItem>
                <SelectItem value="devops">DevOps & Automation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Project Budget</Label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k">$100,000+</SelectItem>
                <SelectItem value="discuss">Let's discuss</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              className="min-h-[120px]"
            />
          </div>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-2 p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span className="text-sm">{submitStatus.message}</span>
            </div>
          )}

          <Button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white py-3" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
