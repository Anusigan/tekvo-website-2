export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  company?: string
  service?: string
  budget?: string
  message?: string
  created_at?: string
  updated_at?: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  service: string
  budget: string
  message: string
}
