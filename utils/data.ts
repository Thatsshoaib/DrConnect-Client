import { CalendarCheck, Search, Video, Bot ,Hospital , FileText, FolderArchive, FlaskConical, Headphones, HeartPulse, Stethoscope, AlertTriangle } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find Doctors", href: "/doctors" },
  { label: "Find Hospitals", href: "/hospitals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroslides = [
  {
    id: 1,
    title1: "Instant Booking",
    title2: "with Zero Hassle",
    text: "Easily schedule appointments with your preferred doctors in just a few clicks. Our seamless booking system ensures no delays, no waiting lines — just fast and reliable access to healthcare.",
    img: "/assets/images/hero1.png",
  },
  {
    id: 2,
  title1: "Connect with",
    title2: "Trusted Professionals",
    text: "Gain access to a network of certified and highly experienced medical professionals. Every profile is verified, so you can consult with confidence and trust your care is in expert hands.",
    img: "/assets/images/hero2.png",
  },
  {
    id: 3,
    title1: "Your One-Stop",
    title2: "Healthcare Platform",
    text: "From doctor consultations and appointment scheduling to hospital searches and medical advice — we bring everything you need for your health into one powerful, easy-to-use platform.",
    img: "/assets/images/hero3.png",
  },
];

export const services = [
  {
    title: "Find Doctors",
    description: "Search from verified specialists near you or online.",
    icon: Search,
  },
  {
    title: "Book Appointments",
    description: "Easily book in-clinic or video consultations in minutes.",
    icon: CalendarCheck,
  },
  {
    title: "Video Consult",
    description: "Get expert advice from your home with secure video calls.",
    icon: Video,
  },
  {
    title: "Smart Chatbot",
    description: "Ask health questions anytime — our AI chatbot is ready.",
    icon: Bot,
  },
  {
    title: "Search Hospitals",
    description: "Browse top-rated hospitals by location or specialty.",
    icon: Hospital, // You may need to import or replace with another icon
  },
  {
    title: "Digital Prescriptions",
    description: "Receive e-prescriptions directly after your consultation.",
    icon: FileText,
  },
  {
    title: "Health Records",
    description: "Securely store and access your medical reports anytime.",
    icon: FolderArchive,
  },
  {
    title: "Lab Test Booking",
    description: "Book diagnostic lab tests with sample collection at home.",
    icon: FlaskConical, // or TestTube icon
  },
  {
    title: "24/7 Support",
    description: "Our team is here round-the-clock to assist you anytime.",
    icon: Headphones, // for support/call icon
  },
  {
    title: "Wellness Plans",
    description: "Explore curated wellness packages for you and your family.",
    icon: HeartPulse,
  },
  {
  title: "Search Doctors",
  description: "Filter doctors by specialty, ratings, availability, and location.",
  icon: Stethoscope, // (or use Search if not reused)
},
{
  title: "Emergency Services",
  description: "Get immediate access to ambulance and emergency contacts near you.",
  icon: AlertTriangle, // or PhoneCall / Siren / Ambulance depending on your icon set
},

];



export const doctors = [
  {
    name: "Dr. Sneha Verma",
    title: "Dermatologist",
    desc: "Expert in treating all types of skin conditions including acne, eczema, and psoriasis.",
    image: "/assets/images/Howitworks1.jpg",
  },
  {
    name: "Dr. Arjun Mehta",
    title: "Cosmetic Surgeon",
    desc: "Specialized in non-surgical skin rejuvenation and anti-aging treatments.",
    image: "/assets/images/Howitworks1.jpg",
  },
  {
    name: "Dr. Priya Nair",
    title: "Trichologist",
    desc: "Focused on hair and scalp treatments using advanced therapies.",
    image: "/assets/images/Howitworks1.jpg",
  },
  {
    name: "Dr. Ravi Sharma",
    title: "Plastic Surgeon",
    desc: "Expert in aesthetic surgery and reconstructive procedures.",
    image: "/assets/images/Howitworks1.jpg",
  },
  {
    name: "Dr. Neha Khurana",
    title: "Laser Specialist",
    desc: "Skilled in laser treatments for pigmentation, scars, and hair removal.",
    image: "/assets/images/Howitworks1.jpg",
  },
  {
    name: "Dr. Karan Malhotra",
    title: "Skin Consultant",
    desc: "Providing personalized skin care regimens and consultations.",
    image: "/assets/images/Howitworks1.jpg",
  },
];


// components/data/testimonialsData.ts

export const testimonials = [
  {
    name: "Dr. Aisha Sharma",
    role: "Dermatologist",
    message:
      "This platform has transformed how I connect with patients. The video consultation system is seamless and reliable.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Patient",
    message:
      "Booking appointments was never this easy. The interface is super intuitive and the doctors are very professional.",
    rating: 5,
  },
  {
    name: "Dr. Vikram Rao",
    role: "Cardiologist",
    message:
      "A game-changer in digital healthcare. The support team is also very responsive and helpful.",
    rating: 4,
  },
];
