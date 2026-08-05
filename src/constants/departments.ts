import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Activity,
} from "lucide-react";

export const departments = [
  {
    id: 1,
    title: "General Medicine",
    description: "Comprehensive healthcare for all age groups.",
    fullDescription:
      "Our General Medicine department provides complete diagnosis, treatment, and preventive healthcare for patients of all ages. Our experienced physicians focus on early detection, disease prevention, and long-term wellness.",
    services: [
      "General Health Checkups",
      "Fever & Infection Treatment",
      "Diabetes Management",
      "Hypertension Care",
      "Preventive Healthcare",
    ],
    icon: Stethoscope,
  },

  {
    id: 2,
    title: "Cardiology",
    description: "Advanced diagnosis and treatment for heart diseases.",
    fullDescription:
      "Our Cardiology department specializes in diagnosing and treating heart-related conditions using modern technology and experienced specialists.",
    services: [
      "ECG",
      "2D Echo",
      "Heart Checkups",
      "Blood Pressure Management",
      "Cardiac Consultation",
    ],
    icon: HeartPulse,
  },

  {
    id: 3,
    title: "Orthopedics",
    description: "Bone, joint and fracture care by experienced specialists.",
    fullDescription:
      "Our Orthopedics department offers comprehensive care for bone, joint, muscle, and spine disorders with advanced treatment options.",
    services: [
      "Fracture Treatment",
      "Joint Pain Management",
      "Arthritis Care",
      "Sports Injuries",
      "Bone Health",
    ],
    icon: Bone,
  },

  {
    id: 4,
    title: "Neurology",
    description: "Expert care for brain and nervous system disorders.",
    fullDescription:
      "We provide expert diagnosis and treatment for neurological disorders affecting the brain, spine, and nervous system.",
    services: [
      "Stroke Care",
      "Migraine Treatment",
      "Epilepsy Management",
      "Nerve Disorders",
      "Neurological Consultation",
    ],
    icon: Brain,
  },

  {
    id: 5,
    title: "Pediatrics",
    description: "Complete healthcare services for infants and children.",
    fullDescription:
      "Our Pediatrics department provides compassionate healthcare for newborns, infants, children, and adolescents.",
    services: [
      "Child Vaccination",
      "Growth Monitoring",
      "Nutrition Advice",
      "Child Fever Treatment",
      "Pediatric Consultation",
    ],
    icon: Baby,
  },

  {
    id: 6,
    title: "Emergency Care",
    description: "24 × 7 emergency medical support with rapid response.",
    fullDescription:
      "Our Emergency Department operates 24/7 with experienced doctors, nurses, and emergency care specialists ready to handle critical situations.",
    services: [
      "24/7 Emergency",
      "Ambulance Support",
      "Trauma Care",
      "Critical Care",
      "Emergency Surgery",
    ],
    icon: Activity,
  },
];