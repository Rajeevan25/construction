# Design System Document: Architectural Precision & Local Heritage

## 1. Overview & Creative North Star
This design system is built to reflect the rugged reliability of Jaffna’s industrial landscape fused with the precision of high-end, contemporary craftsmanship. We are moving away from the "generic corporate" look to embrace a **Creative North Star: The Architectural Monolith.**

The "Monolith" approach treats the digital interface as a physical structure. It utilizes heavy typographic weights, expansive negative space, and tonal depth to create an environment that feels anchored and permanent. By breaking the standard grid with intentional asymmetry—such as overlapping project photography and off-center headlines—we mirror the dynamic nature of a construction site while maintaining the polished finish of a luxury firm.

## 2. Colors: Tonal Depth & The "No-Line" Rule
Our palette is rooted in the earth and steel of the construction trade, elevated by a sophisticated dark-mode architecture.

### The Palette
- **Primary Focus:** `primary-container` (#F97316) is our "Construction Orange." Use it sparingly for high-impact CTAs and critical accents.
- **Surface Foundations:** We use `surface` (#0c1322) as our deepest bedrock, layered with `surface-container` tiers to define hierarchy.
- **The "No-Line" Rule:** To achieve a premium feel, **1px solid borders are strictly prohibited** for sectioning. We define boundaries through background shifts. A `surface-container-low` section sitting on a `surface` background creates a structural break that feels built, not drawn.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tiers to create "nested" depth:
- **Base Layer:** `surface` (#0c1322)
- **Secondary Sectioning:** `surface-container-low` (#141b2b)
- **Interactive Components/Cards:** `surface-container-highest` (#2e3545)
- **Floating Elements:** Use `surface-bright` (#323949) with a 60% opacity and a 20px backdrop-blur to create a "Glassmorphism" effect for navigation bars and modal overlays.

### Signature Textures
Avoid flat, dead colors. For hero backgrounds or primary buttons, implement a subtle linear gradient:
- **Direction:** 135deg
- **From:** `primary` (#ffb690)
- **To:** `primary-container` (#f97316)
This adds "soul" and a metallic sheen reminiscent of industrial equipment.

## 3. Typography: The Editorial Voice
We use typography to command authority and convey local expertise.

- **Display & Headlines:** **Space Grotesk.** This font's geometric, technical terminals echo architectural blueprints. 
    - *Usage:* Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em).
- **Body & Labels:** **Manrope.** A highly legible, modern sans-serif that balances the "brutalist" headlines with approachable professionalism.
    - *Usage:* `body-lg` (1rem) for project descriptions to ensure effortless reading.
- **The Hierarchy Strategy:** High-contrast scales are key. Pairing a `display-md` headline with a `label-md` uppercase subtitle creates an editorial rhythm that feels curated and high-end.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "web-standard." We use **Tonal Layering** to convey importance.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background to create a soft "recessed" effect. Conversely, place a `surface-container-highest` card on `surface` to create "lift."
- **Ambient Shadows:** When a floating effect is required (e.g., a "Request Quote" modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(7, 14, 29, 0.4);`. The shadow color is derived from `surface-container-lowest`, making it feel like a natural light occlusion rather than a grey smudge.
- **The "Ghost Border" Fallback:** For accessibility in form fields, use a "Ghost Border" using `outline-variant` (#584237) at 20% opacity. 

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), 8px (`lg`) rounded corners. Typography: `title-sm` (Manrope), Bold, Uppercase.
- **Secondary:** Surface-only with a subtle `outline-variant` at 20%. No fill.
- **Tertiary:** Text-only in `primary-fixed`, used for low-priority actions.

### Cards & Lists
- **Rule:** **No Divider Lines.** Separate list items using vertical white space (use the `1.5rem` spacing increment) or by alternating background tones between `surface-container-low` and `surface-container-lowest`.
- **Project Cards:** Use `surface-container-highest`. Image should be top-aligned with no padding, while text content should have generous `2rem` padding to feel like a luxury brochure.

### Input Fields
- **Background:** `surface-container-low`.
- **States:** On focus, transition the background to `surface-container-high` and add a `primary-container` "Ghost Border" at 40% opacity.
- **Labels:** Use `label-md` in `on-surface-variant` for a muted, professional look.

### Additional Signature Components
- **The Progress Rail:** For project milestones, use a thick 8px `surface-container-highest` track with a `primary-container` fill to represent construction progress.
- **The Heritage Badge:** A small, semi-transparent glass chip using `tertiary-container` to highlight "Local Jaffna Expertise" on project images.

## 6. Do's and Don'ts

### Do:
- **Do** use asymmetrical layouts where text overlaps image containers slightly to create depth.
- **Do** utilize "Construction Orange" (`primary-container`) as a beacon; it should guide the eye to the most important action on the page.
- **Do** ensure 8px (`lg`) roundedness is consistent across all containers to soften the industrial palette.

### Don't:
- **Don't** use 100% white for body text on dark backgrounds; use `on-surface` (#dce2f7) to reduce eye strain and feel more premium.
- **Don't** use standard "Drop Shadows" on every card. Rely on background color shifts first.
- **Don't** clutter the UI. If a section feels "busy," increase the vertical spacing. In this system, space equals luxury.