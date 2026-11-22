export interface VolunteerOption {
  value: string;
  label: string;
  desc: string;
  /** Dedicated page, if one exists. */
  href?: string;
}

export const VOLUNTEER_OPTIONS: VolunteerOption[] = [
  { value: "regenerative-farming", label: "Regenerative Farming", desc: "Composting, seed saving, crop rotation and natural pest control on organic farms.", href: "/volunteer/regenerative-farming" },
  { value: "conservation", label: "Conservation", desc: "River, forest and watershed protection around Pokhara.", href: "/volunteer/conservation" },
  { value: "construction", label: "Construction", desc: "Building with local natural materials.", href: "/volunteer/construction" },
  { value: "spiritual", label: "Spiritual", desc: "Meditation, ritual and the spiritual side of Nepali village life.", href: "/volunteer/spiritual" },
  { value: "student-groups", label: "Student Groups", desc: "Programs for school and university groups.", href: "/volunteer/student-groups" },
  { value: "senior-citizens-care", label: "Senior Citizens Care", desc: "Companionship and practical help for elderly people in village communities.", href: "/volunteer/senior-citizens-care" },
  { value: "education", label: "Education", desc: "Teaching and learning support in local communities." },
  { value: "health", label: "Health", desc: "Health awareness and community support." },
  { value: "community-development", label: "Community Development", desc: "Work alongside villagers on local priorities." },
  { value: "orphanage", label: "Orphanage", desc: "Care and educational support for children." },
  { value: "disability", label: "Disability", desc: "Support for people living with disabilities." },
  { value: "agro-forestry", label: "Agro-Forestry", desc: "Trees, crops and livestock on the same land." },
  { value: "environment-ecology", label: "Environment & Ecology", desc: "Biodiversity and ecosystem projects." },
  { value: "poverty-alleviation", label: "Poverty Alleviation", desc: "Income-generation work with farming families." },
];

export const PROGRAMS = [
  { value: "volunteer", label: "Volunteering" },
  { value: "internship", label: "6-Week Internship" },
  { value: "training-4", label: "4 Days Basic Training" },
  { value: "training-7", label: "7 Days Advanced Training" },
  { value: "training-15", label: "15 Days TOT Program" },
];
