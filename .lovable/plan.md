# Navbar and logo refinement

## Scope
- Keep every page section, color, layout, and content unchanged.
- Refine only the fixed top navigation and its `SB.` identity.

## Changes
- Give `SB.` slightly more presence on page load through restrained size and weight.
- Use the existing scroll state to smoothly reduce it into a compact mark while keeping it anchored top-left.
- Preserve the current header height transition so the mark never overlaps page content.
- Keep the desktop navigation top-right and retain ABOUT, WORK, SKILLS, CONTACT, and LET'S TALK.
- Polish link underlines and muted-to-foreground hover transitions without changing typography or palette.
- Keep the existing mobile menu behavior intact.

## Technical details
- Update only `src/components/site/navigation.tsx`.
- Use CSS transitions and the existing `useScrolled` hook; GSAP is not installed and is unnecessary for this subtle effect.
- Respect reduced-motion preferences through motion-safe transition utilities.
- Verify the live page at desktop and mobile widths, checking imports, browser console errors, and horizontal overflow.
