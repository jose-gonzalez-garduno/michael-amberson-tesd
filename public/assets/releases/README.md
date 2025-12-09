# Release Cover Assets

This directory contains cover art for music releases displayed on the Music page.

## Placeholder Images

The current cover images (cover-1.jpg through cover-6.jpg) are placeholders. Replace them with actual album/release artwork.

## Image Requirements

- **Format**: JPG or PNG
- **Recommended Size**: 800x800px (square)
- **Minimum Size**: 400x400px
- **Aspect Ratio**: 1:1 (square)
- **File Size**: Keep under 500KB for optimal performance

## Naming Convention

Use the naming pattern referenced in `/data/releases.ts`:
- cover-1.jpg
- cover-2.jpg
- etc.

Or use descriptive names like:
- echoes-in-the-dark-cover.jpg
- neon-dreams-cover.jpg

Update the `coverPath` in `/data/releases.ts` accordingly.

## Adding New Releases

1. Add your cover image to this directory
2. Update `/data/releases.ts` with the new release information
3. Ensure the `coverPath` matches the filename

## Accessibility

All images must include descriptive alt text in the component that renders them. The alt text should describe the cover art meaningfully for screen reader users.
