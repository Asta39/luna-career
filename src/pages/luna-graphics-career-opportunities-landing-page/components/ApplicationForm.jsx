import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ApplicationForm = ({ selectedPosition, onClose, onSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: selectedPosition?.title || '',
    experience: '',
    education: '',
    skills: '',
    expectedSalary: '',
    availableDate: '',
    cvUrl: '',
    fullPhotoUrl: '',
    idPhotoUrl: '',
    agreeTerms: false,
    agreePrivacy: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState({ cv: false, fullPhoto: false, idPhoto: false });
  const [fileNames, setFileNames] = useState({ cv: '', fullPhoto: '', idPhoto: '' });

  useEffect(() => {
    const savedData = localStorage.getItem('lunaGraphicsApplication');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsed.formData }));
        setFileNames(prev => ({ ...prev, ...parsed.fileNames }));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  useEffect(() => {
    const dataToSave = { formData, fileNames };
    localStorage.setItem('lunaGraphicsApplication', JSON.stringify(dataToSave));
  }, [formData, fileNames]);

  const positionOptions = [
    { value: 'Graphic Designer', label: 'Graphic Designer' },
    { value: 'Graphics Designer Intern', label: 'Graphics Designer Intern' },
    { value: 'Receptionist', label: 'Receptionist' },
    { value: 'Sales Representative', label: 'Sales Representative' },
    { value: 'Machine Operator', label: 'Machine Operator' },
    { value: 'Digital Marketing Specialist', label: 'Digital Marketing Specialist' },
    { value: 'General Application', label: 'General Application' }
  ];

  const experienceOptions = [
    { value: '0-1', label: '0-1 years' },
    { value: '1-2', label: '1-2 years' },
    { value: '2-4', label: '2-4 years' },
    { value: '4-6', label: '4-6 years' },
    { value: '6+', label: '6+ years' }
  ];

  const educationOptions = [
    { value: 'certificate', label: 'Certificate' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'degree', label: 'Bachelor\'s Degree' },
    { value: 'masters', label: 'Master\'s Degree' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileUpload = async (file, resourceType = 'image') => {
    // THIS IS THE CORRECTED LINE:
    const uploadUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;
    
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: uploadData,
      });
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      } else {
        throw new Error('File upload to Cloudinary failed.');
      }
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return null;
    }
  };

  const handleFileChange = async (field, file) => {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [field]: 'File size must be less than 5MB' }));
        return;
    }

    setUploading(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: '' }));

    // Determine the resource type based on the field
    const resourceType = field === 'cv' ? 'raw' : 'image';
    const uploadedUrl = await handleFileUpload(file, resourceType);

    setUploading(prev => ({ ...prev, [field]: false }));

    if (uploadedUrl) {
      const urlField = `${field}Url`;
      setFormData(prev => ({ ...prev, [urlField]: uploadedUrl }));
      setFileNames(prev => ({ ...prev, [field]: file.name }));
    } else {
      setErrors(prev => ({ ...prev, [field]: 'Upload failed. Please try again.' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      else if (!/^\+254\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone must be in format +254XXXXXXXXX';
      if (!formData.position) newErrors.position = 'Please select a position';
    }

    if (step === 2) {
      if (!formData.experience) newErrors.experience = 'Experience level is required';
      if (!formData.education) newErrors.education = 'Education level is required';
      if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
      if (!formData.expectedSalary.trim()) newErrors.expectedSalary = 'Expected salary is required';
      if (!formData.availableDate) newErrors.availableDate = 'Available date is required';
    }

    if (step === 3) {
      if (!formData.cvUrl) newErrors.cv = 'CV/Resume is required';
      if (!formData.fullPhotoUrl) newErrors.fullPhoto = 'Full photo is required';
      if (!formData.idPhotoUrl) newErrors.idPhoto = 'ID photo is required';
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms and conditions';
      if (!formData.agreePrivacy) newErrors.agreePrivacy = 'You must agree to privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setErrors({});

    const referenceNumber = `LG${Date.now().toString().slice(-6)}`;

    const templateParams = {
        applicantName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        education: formData.education,
        skills: formData.skills,
        expectedSalary: formData.expectedSalary,
        availableDate: formData.availableDate,
        cv_url: formData.cvUrl,
        fullPhoto_url: formData.fullPhotoUrl,
        idPhoto_url: formData.idPhotoUrl,
        referenceNumber: referenceNumber
    };

    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        localStorage.removeItem('lunaGraphicsApplication');
        
        onSuccess({
          referenceNumber,
          position: formData.position,
          applicantName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email
        });
    })
    .catch((error) => {
        console.error('FAILED...', error);
        setErrors({ submit: 'Failed to submit application. Please try again.' });
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <Input label="First Name" type="text" placeholder="Enter your first name" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} error={errors.firstName} required />
        <Input label="Last Name" type="text" placeholder="Enter your last name" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} error={errors.lastName} required />
      </div>
      <Input label="Email Address" type="email" placeholder="your.email@example.com" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} error={errors.email} required />
      <Input label="Phone Number" type="tel" placeholder="+254712345678" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} error={errors.phone} description="Format: +254XXXXXXXXX" required />
      <Select label="Position Applied For" options={positionOptions} value={formData.position} onChange={(value) => handleInputChange('position', value)} error={errors.position} placeholder="Select a position" required />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <Select label="Experience Level" options={experienceOptions} value={formData.experience} onChange={(value) => handleInputChange('experience', value)} error={errors.experience} placeholder="Select experience level" required />
        <Select label="Education Level" options={educationOptions} value={formData.education} onChange={(value) => handleInputChange('education', value)} error={errors.education} placeholder="Select education level" required />
      </div>
      <Input label="Key Skills" type="text" placeholder="e.g., Adobe Photoshop, Customer Service, Sales..." value={formData.skills} onChange={(e) => handleInputChange('skills', e.target.value)} error={errors.skills} description="Separate multiple skills with commas" required />
      <Input label="Expected Salary" type="text" placeholder="1000" value={formData.expectedSalary} onChange={(e) => handleInputChange('expectedSalary', e.target.value)} error={errors.expectedSalary} required />
      <Input label="Available Start Date" type="date" value={formData.availableDate} onChange={(e) => handleInputChange('availableDate', e.target.value)} error={errors.availableDate} required />
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">CV/Resume <span className="text-red-500">*</span></label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-smooth">
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange('cv', e.target.files[0])} className="hidden" id="cv-upload" disabled={uploading.cv} />
          <label htmlFor="cv-upload" className={uploading.cv ? 'cursor-not-allowed' : 'cursor-pointer'}>
            <Icon name="Upload" size={32} color="var(--color-muted-foreground)" className="mx-auto mb-2" />
            <p className="text-muted-foreground mb-1">{uploading.cv ? 'Uploading...' : (fileNames.cv || 'Click to upload CV/Resume')}</p>
            <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
          </label>
        </div>
        {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Full Photo <span className="text-red-500">*</span></label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-smooth">
          <input type="file" accept="image/*" onChange={(e) => handleFileChange('fullPhoto', e.target.files[0])} className="hidden" id="full-photo-upload" disabled={uploading.fullPhoto} />
          <label htmlFor="full-photo-upload" className={uploading.fullPhoto ? 'cursor-not-allowed' : 'cursor-pointer'}>
            <Icon name="Camera" size={32} color="var(--color-muted-foreground)" className="mx-auto mb-2" />
            <p className="text-muted-foreground mb-1">{uploading.fullPhoto ? 'Uploading...' : (fileNames.fullPhoto || 'Click to upload full photo')}</p>
            <p className="text-xs text-muted-foreground">JPEG, PNG (Max 5MB)</p>
          </label>
        </div>
        {errors.fullPhoto && <p className="text-red-500 text-sm mt-1">{errors.fullPhoto}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">ID Photo <span className="text-red-500">*</span></label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-smooth">
          <input type="file" accept="image/*" onChange={(e) => handleFileChange('idPhoto', e.target.files[0])} className="hidden" id="id-photo-upload" disabled={uploading.idPhoto} />
          <label htmlFor="id-photo-upload" className={uploading.idPhoto ? 'cursor-not-allowed' : 'cursor-pointer'}>
            <Icon name="CreditCard" size={32} color="var(--color-muted-foreground)" className="mx-auto mb-2" />
            <p className="text-muted-foreground mb-1">{uploading.idPhoto ? 'Uploading...' : (fileNames.idPhoto || 'Click to upload ID photo')}</p>
            <p className="text-xs text-muted-foreground">JPEG, PNG (Max 5MB)</p>
          </label>
        </div>
        {errors.idPhoto && <p className="text-red-500 text-sm mt-1">{errors.idPhoto}</p>}
      </div>
      <div className="space-y-4 pt-4 border-t border-border">
        <Checkbox label="I agree to the terms and conditions" checked={formData.agreeTerms} onChange={(e) => handleInputChange('agreeTerms', e.target.checked)} error={errors.agreeTerms} required />
        <Checkbox label="I agree to the privacy policy and data processing" checked={formData.agreePrivacy} onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)} error={errors.agreePrivacy} required />
      </div>
    </div>
  );

  const modalTitle = selectedPosition ? `Apply for ${selectedPosition.title}` : 'General Application';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div><h2 className="text-xl font-semibold text-foreground">{modalTitle}</h2><p className="text-sm text-muted-foreground">Step {currentStep} of 3</p></div>
          <Button variant="ghost" size="icon" onClick={onClose}><Icon name="X" size={20} /></Button>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step <= currentStep ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>{step}</div>
                {step < 3 && (<div className={`flex-1 h-1 rounded ${step < currentStep ? 'bg-primary' : 'bg-muted'}`} />)}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Basic Info</span><span>Professional</span><span>Documents</span>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="px-6 pb-6">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {errors.submit && (<div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg"><p className="text-red-600 text-sm">{errors.submit}</p></div>)}
            </div>
        </form>
        <div className="flex items-center justify-between p-6 border-t border-border">
          <Button variant="outline" onClick={currentStep === 1 ? onClose : handlePrevious} disabled={isSubmitting}>
            {currentStep === 1 ? 'Cancel' : 'Previous'}
          </Button>
          {currentStep < 3 ? (
            <Button variant="default" onClick={handleNext} iconName="ArrowRight" iconPosition="right">Next</Button>
          ) : (
            <Button variant="default" onClick={handleSubmit} loading={isSubmitting || uploading.cv || uploading.fullPhoto || uploading.idPhoto} iconName="Send" iconPosition="left">
              Submit Application
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;