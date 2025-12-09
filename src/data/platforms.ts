import type { Platform } from '@/types';

export const platforms: Platform[] = [
  {
    title: 'Education Excellence',
    slug: 'education-excellence',
    summary: 'Ensuring quality education for all students with modern resources and innovative teaching methods.',
    details: `
## Our Vision for Education Excellence

Quality education is the cornerstone of our community's future. We are committed to providing every student with the resources, support, and opportunities they need to succeed.

### Key Priorities

- **Modern Learning Resources**: Investing in up-to-date textbooks, technology, and educational materials
- **Teacher Support**: Competitive salaries and professional development opportunities for educators
- **Small Class Sizes**: Maintaining optimal student-to-teacher ratios for personalized attention
- **STEM Programs**: Expanding science, technology, engineering, and mathematics education
- **Arts Education**: Preserving and enhancing music, visual arts, and performing arts programs

### Implementation Plan

1. **Phase 1 (Year 1)**: Assess current resources and identify gaps
2. **Phase 2 (Year 2)**: Implement technology upgrades and teacher training
3. **Phase 3 (Year 3)**: Expand specialized programs and measure outcomes

*This is placeholder content. Replace with actual platform details.*
    `,
    cover: '/placeholders/placeholder-card-1.jpg',
    icon: '📚',
  },
  {
    title: 'Community Engagement',
    slug: 'community-engagement',
    summary: 'Building strong partnerships between schools, families, and local organizations for student success.',
    details: `
## Community Engagement & Partnership

Strong schools require strong community partnerships. We believe in transparent communication and active collaboration with families and local organizations.

### Our Commitments

- **Open Communication**: Regular town halls and accessible board meetings
- **Parent Involvement**: Creating meaningful opportunities for family engagement
- **Local Partnerships**: Collaborating with businesses and nonprofits for student programs
- **Transparency**: Clear reporting on school performance and budget allocation
- **Multilingual Outreach**: Ensuring all families can participate regardless of language

### Action Items

- Monthly community forums
- Multilingual website and communications
- Parent advisory councils
- Business mentorship programs
- Community service opportunities for students

*This is placeholder content. Replace with actual platform details.*
    `,
    cover: '/placeholders/placeholder-card-2.jpg',
    icon: '🤝',
  },
  {
    title: 'Student Well-being',
    slug: 'student-wellbeing',
    summary: 'Prioritizing mental health, safety, and holistic support for every student in our district.',
    details: `
## Student Well-being & Support

Every student deserves to feel safe, supported, and valued. We are committed to comprehensive well-being programs that address the whole child.

### Focus Areas

- **Mental Health Services**: Expanding counseling and psychological support
- **Safe Learning Environment**: Maintaining secure campuses and anti-bullying programs
- **Nutrition Programs**: Ensuring access to healthy meals for all students
- **Special Education**: Robust support for students with diverse learning needs
- **Extracurricular Activities**: Sports, clubs, and activities for all interests

### Our Approach

We will work with mental health professionals, school counselors, and community organizations to create a supportive ecosystem that helps every student thrive academically, socially, and emotionally.

*This is placeholder content. Replace with actual platform details.*
    `,
    cover: '/placeholders/placeholder-card-1.jpg',
    icon: '💚',
  },
  {
    title: 'Fiscal Responsibility',
    slug: 'fiscal-responsibility',
    summary: 'Smart budgeting and transparent financial management to maximize educational outcomes.',
    details: `
## Fiscal Responsibility & Accountability

Every tax dollar should be used wisely to benefit our students and schools. We are committed to transparent, efficient financial management.

### Principles

- **Transparent Budgeting**: Clear, accessible financial reporting
- **Prioritize Classrooms**: Maximizing resources directed to instruction
- **Long-term Planning**: Building reserves and planning for future needs
- **Grant Opportunities**: Actively pursuing state and federal funding
- **Community Input**: Involving stakeholders in budget priorities

### Financial Goals

- Maintain healthy reserve levels
- Increase per-student spending on instruction
- Reduce administrative overhead where possible
- Invest in facility maintenance and improvements
- Secure additional funding sources

*This is placeholder content. Replace with actual platform details.*
    `,
    cover: '/placeholders/placeholder-card-2.jpg',
    icon: '💼',
  },
];

// Note: Using linear search is acceptable here because:
// 1. Platform list is small (4 items)
// 2. This function is called during build time (SSG), not at runtime
// 3. Performance impact is negligible for small datasets
// If the platform list grows significantly (>50 items), consider using a Map for O(1) lookups
export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((platform) => platform.slug === slug);
}

export function getAllPlatformSlugs(): string[] {
  return platforms.map((platform) => platform.slug);
}
