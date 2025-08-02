export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface ContactItemProps {
  icon: string;
  title: string;
  content: string;
}
