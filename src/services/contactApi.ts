import type { ContactFormData } from "../utils/validation";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface WaitlistFormData {
  email: string;
}

export interface WaitlistSubmissionResponse {
  id: string;
  message: string;
}

export interface ContactSubmissionResponse {
  id: string;
  message: string;
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").trim();

const API_ENDPOINTS = {
  WAITLIST: "/waitlist",
  CONTACT: "/contact-us",
} as const;

class ApiError extends Error {
  status?: number;
  code?: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

function buildApiUrl(endpoint: string): string {
  if (!API_BASE_URL) {
    return endpoint;
  }

  return `${API_BASE_URL.replace(/\/+$/, "")}${endpoint}`;
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(buildApiUrl(endpoint), {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      let errorMessage = "An error occurred while processing your request";

      try {
        const errorData = await response.json();
        if (
          typeof errorData.message === "object" &&
          errorData.message !== null
        ) {
          errorMessage =
            errorData.message.message ||
            errorData.message.error ||
            errorMessage;
        } else {
          errorMessage = errorData.message || errorData.error || errorMessage;
        }
      } catch {
        errorMessage = response.statusText || errorMessage;
      }

      throw new ApiError(
        errorMessage,
        response.status,
        String(response.status),
      );
    }

    const data = await response.json();

    return {
      success: true,
      data: data.data || data,
      message: data.message,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.message,
      };
    }

    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}

export async function submitWaitlistForm(
  formData: WaitlistFormData,
): Promise<ApiResponse<WaitlistSubmissionResponse>> {
  return apiRequest<WaitlistSubmissionResponse>(API_ENDPOINTS.WAITLIST, {
    method: "POST",
    body: JSON.stringify({
      email: formData.email.trim().toLowerCase(),
    }),
  });
}

export async function submitContactForm(
  formData: ContactFormData,
): Promise<ApiResponse<ContactSubmissionResponse>> {
  return apiRequest<ContactSubmissionResponse>(API_ENDPOINTS.CONTACT, {
    method: "POST",
    body: JSON.stringify({
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }),
  });
}

export const submitContactFormApi = submitContactForm;
