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
    icon: Stethoscope,
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Advanced diagnosis and treatment for heart diseases.",
    icon: HeartPulse,
  },
  {
    id: 3,
    title: "Orthopedics",
    description: "Bone, joint and fracture care by experienced specialists.",
    icon: Bone,
  },
  {
    id: 4,
    title: "Neurology",
    description: "Expert care for brain and nervous system disorders.",
    icon: Brain,
  },
  {
    id: 5,
    title: "Pediatrics",
    description: "Complete healthcare services for infants and children.",
    icon: Baby,
  },
  {
    id: 6,
    title: "Emergency Care",
    description: "24 × 7 emergency medical support with rapid response.",
    icon: Activity,
  },
];