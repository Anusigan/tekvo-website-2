"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitConsultationRequest } from "@/app/actions/contact"

interface ConsultationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConsultationDialog({ open, onOpenChange }: ConsultationDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitConsultationRequest(formData)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        // Reset form
        e.currentTarget.reset()
        // Close dialog after 2 seconds
        setTimeout(() => {
          onOpenChange(false)
          setSubmitStatus({ type: null, message: "" })
        }, 2000)
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Schedule a Consultation</DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out the form below and our team will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" placeholder="John Smith" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Your Company" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project">Project Details</Label>
            <Textarea
              id="project"
              name="project"
              placeholder="Tell us about your project..."
              className="min-h-[100px]"
            />
          </div>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span className="text-sm">{submitStatus.message}</span>
            </div>
          )}

          <Button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
