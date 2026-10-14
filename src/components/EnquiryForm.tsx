import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, MessageSquare, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { coursesData } from '../data/courses';
import { siteConfig } from '../data/siteConfig';

// Indian Phone Regex (10 digits starting with 6, 7, 8, or 9)
const indianPhoneRegex = /^[6-9]\d{9}$/;

const enquirySchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  phone: z
    .string()
    .trim()
    .regex(indianPhoneRegex, { message: 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .optional()
    .or(z.literal('')),
  course: z.string().min(1, { message: 'Please select a course of interest' }),
  message: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  initialCourse?: string;
  sourceContext?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialCourse, sourceContext: _sourceContext }) => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'validated'>('idle');
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      course: initialCourse || '',
      message: '',
    },
  });

  const currentValues = watch();

  const onSubmit = async (data: EnquiryFormData) => {
    // Simulate brief processing
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmittedData(data);
    setSubmissionStatus('validated');
  };

  // Build WhatsApp Message from form inputs
  const buildWhatsAppUrl = () => {
    const courseName = currentValues.course || 'a course';
    const nameStr = currentValues.fullName ? ` from ${currentValues.fullName}` : '';
    const phoneStr = currentValues.phone ? ` (Phone: ${currentValues.phone})` : '';
    const messageStr = currentValues.message ? ` Message: "${currentValues.message}"` : '';

    const text = `Hello Thulir Institute, I would like to enquire about ${courseName}${nameStr}${phoneStr}.${messageStr} Please share the fees and upcoming batch details.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div 
      className="card rounded-4 p-4 p-md-5 position-relative shadow-lg"
      style={{
        backgroundColor: '#FAF6EE',
        border: '1px solid #DDD4C4'
      }}
    >
      {/* Demo Disclosure Banner */}
      <div 
        className="d-flex align-items-start gap-2.5 p-3 rounded-3 mb-4"
        style={{
          backgroundColor: '#E2ECFA',
          border: '1px solid #BFD6F6',
          color: '#1D4ED8'
        }}
      >
        <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
        <div className="small text-dark">
          <span className="fw-bold">Client Prototype Demo:</span> This form demonstrates real-time field validation. To contact the institute directly, use the instant WhatsApp enquiry option below.
        </div>
      </div>

      <div className="mb-4">
        <h3 className="h4 fw-bold text-dark mb-1">Send an Admission Enquiry</h3>
        <p className="small mb-0 text-secondary">
          Fill in your details below and we will connect with you regarding course batches and fees.
        </p>
      </div>

      {submissionStatus === 'validated' && submittedData ? (
        <div 
          className="p-4 rounded-3 mb-4 border"
          style={{
            backgroundColor: '#E6F4ED',
            borderColor: '#BCE4CE'
          }}
        >
          <div className="d-flex align-items-start gap-3">
            <CheckCircle size={24} className="text-success flex-shrink-0 mt-1" />
            <div>
              <h4 className="h6 fw-bold text-dark mb-1">
                Form Inputs Validated Successfully!
              </h4>
              <p className="small text-secondary mb-3">
                <strong>Submission Details:</strong><br />
                Name: {submittedData.fullName}<br />
                Phone: +91 {submittedData.phone}<br />
                Course: {submittedData.course}<br />
                {submittedData.email && <>Email: {submittedData.email}<br /></>}
                {submittedData.message && <>Note: {submittedData.message}</>}
              </p>
              <div 
                className="p-2.5 rounded-2 small text-secondary mb-3"
                style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
              >
                <em>Note: As this is a frontend demonstration, transmit this enquiry directly to the official institute WhatsApp with one click:</em>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success fw-semibold d-inline-flex align-items-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>Send via Official WhatsApp Now</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionStatus('idle');
                    reset();
                  }}
                  className="btn btn-outline-secondary btn-sm"
                  style={{ backgroundColor: '#EAE3D5', borderColor: '#DDD4C4' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="row g-3">
            {/* Full Name */}
            <div className="col-12 col-md-6">
              <label htmlFor="fullName" className="form-label fw-semibold small text-dark">
                Student / Parent Name <span className="text-danger">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                className={`form-control form-control-lg fs-6 rounded-3 ${
                  errors.fullName ? 'is-invalid' : ''
                }`}
                placeholder="e.g. Ramesh Kumar"
                {...register('fullName')}
              />
              {errors.fullName && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={13} />
                  <span>{errors.fullName.message}</span>
                </div>
              )}
            </div>

            {/* Mobile Number */}
            <div className="col-12 col-md-6">
              <label htmlFor="phone" className="form-label fw-semibold small text-dark">
                Phone Number (WhatsApp) <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <span 
                  className="input-group-text border-end-0 small fw-medium text-secondary"
                  style={{ backgroundColor: '#EAE3D5', borderColor: '#C8BCAB' }}
                >
                  +91
                </span>
                <input
                  id="phone"
                  type="tel"
                  maxLength={10}
                  className={`form-control form-control-lg fs-6 rounded-end-3 ${
                    errors.phone ? 'is-invalid' : ''
                  }`}
                  placeholder="10-digit mobile number"
                  {...register('phone')}
                />
              </div>
              {errors.phone && (
                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                  <AlertCircle size={13} />
                  <span>{errors.phone.message}</span>
                </div>
              )}
            </div>

            {/* Email Address */}
            <div className="col-12 col-md-6">
              <label htmlFor="email" className="form-label fw-semibold small text-dark">
                Email Address <span className="text-muted fw-normal">(Optional)</span>
              </label>
              <input
                id="email"
                type="email"
                className={`form-control form-control-lg fs-6 rounded-3 ${
                  errors.email ? 'is-invalid' : ''
                }`}
                placeholder="name@example.com"
                {...register('email')}
              />
              {errors.email && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={13} />
                  <span>{errors.email.message}</span>
                </div>
              )}
            </div>

            {/* Course of Interest */}
            <div className="col-12 col-md-6">
              <label htmlFor="course" className="form-label fw-semibold small text-dark">
                Course of Interest <span className="text-danger">*</span>
              </label>
              <select
                id="course"
                className={`form-select form-select-lg fs-6 rounded-3 ${
                  errors.course ? 'is-invalid' : ''
                }`}
                {...register('course')}
              >
                <option value="">-- Choose a Course --</option>
                {coursesData.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.categoryLabel})
                  </option>
                ))}
              </select>
              {errors.course && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={13} />
                  <span>{errors.course.message}</span>
                </div>
              )}
            </div>

            {/* Message / Questions */}
            <div className="col-12">
              <label htmlFor="message" className="form-label fw-semibold small text-dark">
                Message / Queries <span className="text-muted fw-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                className="form-control rounded-3 fs-6"
                placeholder="Mention preferred timing (weekdays/weekends) or any specific questions..."
                {...register('message')}
              />
            </div>

            {/* Action Buttons */}
            <div className="col-12 pt-2">
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-thulir-primary flex-grow-1"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Validating...' : 'Submit Enquiry'}</span>
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-hero text-decoration-none d-inline-flex align-items-center justify-content-center gap-2"
                  title="Send directly via WhatsApp"
                >
                  <MessageSquare size={16} />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
