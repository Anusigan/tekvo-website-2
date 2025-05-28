"use server"

import { createServerClient } from "@/lib/supabase"
import type { ContactFormData } from "@/types/contact"

export async function submitContactForm(formData: ContactFormData) {
  try {
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit contact form. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
      data,
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function submitConsultationRequest(formData: FormData) {
  try {
    const supabase = createServerClient()

    const name = formData.get("name") as string
    const [firstName, ...lastNameParts] = name.split(" ")
    const lastName = lastNameParts.join(" ") || ""

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: formData.get("email") as string,
          company: formData.get("company") as string,
          service: "consultation",
          message: formData.get("project") as string,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit consultation request. Please try again.",
      }
    }

    return {
      success: true,
      message: "Consultation request submitted! We'll contact you within 24 hours.",
      data,
    }
  } catch (error) {
    console.error("Consultation request error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
