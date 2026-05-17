---
name: Nusantara Narrative
colors:
  surface: '#1f1006'
  surface-dim: '#1f1006'
  surface-bright: '#493528'
  surface-container-lowest: '#190b03'
  surface-container-low: '#28180d'
  surface-container: '#2d1c10'
  surface-container-high: '#38261a'
  surface-container-highest: '#443124'
  on-surface: '#fcdcca'
  on-surface-variant: '#d4c4b0'
  inverse-surface: '#fcdcca'
  inverse-on-surface: '#3f2c20'
  outline: '#9d8f7c'
  outline-variant: '#504536'
  surface-tint: '#fabc53'
  primary: '#fabc53'
  on-primary: '#432c00'
  primary-container: '#c8902a'
  on-primary-container: '#462e00'
  inverse-primary: '#7f5600'
  secondary: '#ffb59f'
  on-secondary: '#5e1700'
  secondary-container: '#822808'
  on-secondary-container: '#ff9b7c'
  tertiary: '#cfc6b3'
  on-tertiary: '#353023'
  tertiary-container: '#a29a89'
  on-tertiary-container: '#373225'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdeae'
  primary-fixed-dim: '#fabc53'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59f'
  on-secondary-fixed: '#3a0a00'
  on-secondary-fixed-variant: '#822808'
  tertiary-fixed: '#ebe1cf'
  tertiary-fixed-dim: '#cfc6b3'
  on-tertiary-fixed: '#1f1b10'
  on-tertiary-fixed-variant: '#4c4638'
  background: '#1f1006'
  on-background: '#fcdcca'
  surface-variant: '#443124'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  chart-label:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1'
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  container-max: 1200px
---

## Brand & Style
The design system is a high-contrast, editorial framework designed for immersive cultural storytelling. It blends the elegance of traditional Indonesian heritage with a sharp, modern minimalist aesthetic. The personality is authoritative yet inviting, treating culinary content as fine art.

The visual style rejects depth metaphors like shadows and blurs in favor of a **Flat / High-Contrast** approach. It utilizes expansive whitespace (or "dark space"), bold typography, and intricate traditional motifs (Batik Kawung, Songket) as structural dividers rather than mere decoration. The emotional goal is to evoke a sense of "prestige and discovery," making the user feel like they are flipping through a luxury limited-edition coffee table book.

## Colors
The palette is rooted in the organic, earthy tones of Indonesian spices and raw materials. 

- **Primary (Spice Gold):** Reserved for interactive elements, highlights, and key data points in charts.
- **Secondary (Spicy Brick Red):** Used for accents, urgent status indicators, or secondary data categories.
- **Main Text (Cream):** High-readability foreground for all primary reading experiences.
- **Muted Text (Light Brown):** Used for metadata, captions, and non-essential labeling.
- **Background (Deep Umber):** A near-black brown that provides a rich, warm canvas for the high-contrast elements.

## Typography
The typography strategy relies on a sophisticated "Serif-Sans" pairing. **Playfair Display** provides a literary, traditional weight to headings, suggesting heritage and craftsmanship. **Inter** is used for all functional text to ensure maximum legibility against the dark background, maintaining a utilitarian and modern contrast.

For mobile, display sizes scale down aggressively to prevent text wrapping issues while maintaining the high-impact editorial feel. All labels and metadata use increased letter spacing to enhance clarity at small sizes.

## Layout & Spacing
The design system uses a **Fixed Grid** model for content readability, set within full-bleed "scrollytelling" sections.

- **Grid:** A 12-column grid on desktop with generous 24px gutters.
- **Margins:** Large 80px side margins on desktop to center the narrative; 20px on mobile for edge-to-edge immersion.
- **Vertical Rhythm:** Spacing follows an 8px base unit. Sections are separated by significant "breathing room" (120px+) to allow the user to process one "taste" or story at a time.
- **Reflow:** On mobile, multi-column cards stack vertically, and decorative motifs scale to act as horizontal dividers.

## Elevation & Depth
This system eschews shadows entirely. Hierarchy is established through **Tonal Separation** and **Graphic Outlines**:

- **Layer 0:** Background (#120906).
- **Layer 1:** Surface containers use a slightly lighter brown or a subtle pattern overlay (Batik).
- **Outlines:** Instead of shadows, use 1px solid borders in #9A8070 (Muted Text color) to define card boundaries or interactive areas.
- **Background Motifs:** Traditional patterns are used at low opacity (5-10%) in the background to create a sense of texture without adding physical depth.

## Shapes
A **Sharp (0px)** roundedness level is mandated to maintain a professional, editorial look. Straight edges reflect the structured nature of woven textiles (Songket) and the precision of modern minimalist architecture. 

Exceptions are made only for flavor radar charts or specific circular UI elements like "Play/Pause" buttons for audio narration, which should be perfect circles.

## Components

### Sticky Navigation
A minimalist top bar with a glass-like backdrop (using background color at 90% opacity). It features a "progress reading bar" in Spice Gold (#C8902A) at the very top to indicate the user's journey through the story.

### Dish Cards
Flat cards with a 1px border. They contain a high-quality cutout image of the dish, a Playfair Display title, and **Flavor Bars**. Flavor bars are horizontal line segments where the filled portion is Spice Gold, showing levels of "Pedas" (Spicy), "Manis" (Sweet), etc.

### Minimalist 2D Charts
- **Radar Charts:** Used for flavor profiles. Use Spice Gold for the data area with a 1px Spicy Brick Red stroke. No background gridlines; only vertex labels.
- **Bar Charts:** Vertical bars with no Y-axis line. Direct labeling on top of bars in Inter SemiBold.
- **Heatmaps:** Used for geographic spice intensity. A monochromatic scale from Background (#120906) to Spicy Brick Red (#9B3A1A).

### Buttons
Primary buttons are solid Spice Gold with Dark Brown text. Secondary buttons are 1px Cream outlines with Cream text. All buttons are rectangular with no corner radius.

### Dividers
Utilize a single row of a Batik Kawung motif pattern in Muted Brown (#9A8070) to separate major narrative chapters.