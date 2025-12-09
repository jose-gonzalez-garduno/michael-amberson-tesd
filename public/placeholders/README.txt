# Placeholder Images Guide

This directory contains placeholder images for the campaign website. Replace these with actual campaign photos and graphics.

## Files and Recommended Sizes

### Hero Section
- **placeholder-hero.svg** (1600×900px)
  - Main hero/banner image for the homepage
  - Should be a high-quality campaign photo or graphic
  - Recommended format: JPG or WebP for photos, SVG for graphics
  - Location used: Homepage hero section

### Portrait/Profile
- **placeholder-portrait.svg** (800×800px)
  - Candidate portrait or headshot
  - Should be square aspect ratio
  - Recommended format: JPG or PNG
  - Location used: About page, possibly homepage

### Platform/Issue Cards
- **placeholder-card-1.jpg** (800×800px)
  - Platform or issue card background image
  - Square aspect ratio works best for cards
  - Can be photos related to the specific issue
  - Location used: Platform cards throughout the site

- **placeholder-card-2.jpg** (800×800px)
  - Alternative card image for variety
  - Same specifications as card-1
  - Location used: Platform cards throughout the site

## How to Replace

1. **Prepare your images:**
   - Resize to the recommended dimensions
   - Optimize for web (compress without losing quality)
   - Use descriptive filenames

2. **Replace the files:**
   - Simply replace the placeholder files with your actual images
   - Keep the same filenames, or update the references in:
     - `app/components/Hero.tsx`
     - `app/[locale]/about/page.tsx`
     - `src/data/platforms.ts`

3. **Update alt text:**
   - Find all `alt=""` attributes in the code
   - Add descriptive text for accessibility

## Image Optimization Tips

- Use WebP format for better compression (with JPG fallback)
- Aim for under 200KB per image when possible
- Use Next.js Image component for automatic optimization
- Test images on both desktop and mobile views

## Content Locations

To update images throughout the site, check these files:
- Hero: `app/components/Hero.tsx`
- Platform data: `src/data/platforms.ts`
- About page: `app/[locale]/about/page.tsx`

## Color Palette Reference

When creating graphics, use these campaign colors:
- Primary Accent: #69CE89 (green)
- Secondary Accent: #FBA16C (orange)
- Background: #0b0c0d (dark)
- Paper: #0f1112 (slightly lighter dark)
- Muted Text: #9aa0a6 (gray)
