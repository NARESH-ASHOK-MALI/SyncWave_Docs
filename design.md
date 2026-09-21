---
name: TRAE
url: https://www.trae.ai/
colors:
  primary: '#32f08c'
  primary-text: '#0a0b0d'
  primary-hover: '#28c070'
  background: '#0a0b0d'
  background-light: '#edeff2'
  text-primary: '#f5f9fe'
  text-muted: '#a6aab5'
  text-secondary: '#787d87'
  text-on-dark-hover: '#ffffff'
  surface-dark: '#121314'
  surface-dark-alt: '#171a1c'
  border-dark-muted: '#252729'
  border-light: '#ffffff'
  focus-ring: 'rgba(59,130,246,0.5)'
typography:
  display:
    family: 'Inter'
    size: 72px
    weight: 600
    line-height: 1.2
  heading-xl:
    family: 'Inter'
    size: 56px
    weight: 600
    line-height: 1.2
  heading-lg:
    family: 'Inter'
    size: 48px
    weight: 600
    line-height: 1.2
  heading-md:
    family: 'Inter'
    size: 40px
    weight: 600
    line-height: 1.2
  heading-sm:
    family: 'Inter'
    size: 24px
    weight: 600
    line-height: 1.2
  heading-xs:
    family: 'Inter'
    size: 20px
    weight: 400
    line-height: 1.5
  body:
    family: 'Inter'
    size: 16px
    weight: 400
    line-height: 1.6
  caption:
    family: 'Inter'
    size: 14px
    weight: 400
    line-height: 1.5
  code:
    family: 'JetBrains Mono'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96]
radius:
  xs: 2px
  sm: 3px
  md: 4px
  lg: 8px
elevation:
  card: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px'
  card-hover: 'rgba(0, 0, 2, 0.3) 0px 5px 15px 0px'
  modal: 'rgba(0, 0, 2, 0.3) 0px 10px 30px 0px'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.primary-text}'
    radius: '{radius.xs}'
    padding: '12px 24px'
    font-weight: 500
    font-size: 16px
  button-secondary:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: '1px solid {colors.border-light}'
    radius: '{radius.xs}'
    padding: '12px 24px'
    font-weight: 500
    font-size: 16px
  card-dark:
    bg: '{colors.surface-dark}'
    text: '{colors.text-primary}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
    border: '1px solid {colors.border-dark-muted}'
motion:
  duration-fast: '0.15s'
  duration-base: '1s'
  duration-pulse: '2s'
  easing-standard: 'ease-out'
  easing-linear: 'linear'
---

# Design System Inspired by TRAE

## 1. Visual Theme & Atmosphere

TRAE employs a high-contrast, technically-driven aesthetic, characterized by a dominant dark background (`#0a0b0d`) paired with a vibrant green accent (`#32f08c`). Large, bold typography set in the Inter font family enhances readability and impact across the interface. The visual experience is further defined by a subtle, geometric pixel grid background pattern that subtly animates, creating a dynamic yet focused atmosphere. The presence of video content and CSS keyframe animations (based on partial CSS access) adds to the interactive and engaging nature of the platform.

The design emphasizes clarity and efficiency, utilizing ample dark whitespace to direct user attention to key content and interactive elements. Subtle card elevations and crisp borders provide structure without overwhelming the dark theme. The overall impression is one of modern sophistication, tailored for a developer-centric audience, with a clear focus on functionality and a polished, high-tech presentation.

Key Characteristics:
- Dominant dark background `#0a0b0d` with bright `#32f08c` accent.
- Bold Inter typography for headings, 72px display size.
- Geometric pixel grid background pattern.
- Subtle card elevation using `rgba(0,0,0,0.1)` shadows.
- Minimal border radius of 2px on interactive elements.
- CSS keyframe animations for loading and transitions.
- High contrast text pairs like `#f5f9fe` on `#0a0b0d`.

## 2. Color Palette & Roles

-   **Primary**
    -   `primary` (`#32f08c`) — The vibrant green used for primary calls-to-action, interactive elements, and brand highlights.
    -   `primary-text` (`#0a0b0d`) — The dark text color specifically used on the `primary` green buttons for maximum contrast.
    -   `primary-hover` (`#28c070`) — A slightly darker shade of green, used for the hover state of primary interactive elements (inferred from screenshot).

-   **Neutral Scale**
    -   `background` (`#0a0b0d`) — The main dark background color used across most sections of the website.
    -   `background-light` (`#edeff2`) — A light grey background used for specific content sections, such as the "TraeWork" video player area.
    -   `text-primary` (`#f5f9fe`) — The main light text color used for headings and body copy on dark backgrounds.
    -   `text-muted` (`#a6aab5`) — A medium grey for secondary text, descriptions, and less emphasized information.
    -   `text-secondary` (`#787d87`) — A darker grey for tertiary text, disabled states, and subtle details.
    -   `text-on-dark-hover` (`#ffffff`) — Pure white used for text links on dark backgrounds when hovered, providing a strong visual feedback.

-   **Surface & Borders**
    -   `surface-dark` (`#121314`) — A dark grey used for card backgrounds and other contained UI elements on the main dark background.
    -   `surface-dark-alt` (`#171a1c`) — A slightly different dark grey, observed in elements like the cookie consent banner.
    -   `border-dark-muted` (`#252729`) — A subtle dark grey used for borders on dark surfaces, providing definition without harsh lines.
    -   `border-light` (`#ffffff`) — Pure white used for borders on secondary buttons, offering high contrast.

-   **Interactive**
    -   `focus-ring` (`rgba(59,130,246,0.5)`) — A semi-transparent blue used for visual focus indicators, enhancing accessibility.

## 3. Typography Rules

-   **Font Family**:
    -   Primary: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif
    -   Monospace: 'JetBrains Mono', monospace

-   **Hierarchy**:
    -   **Display**: `Inter` `72px` `600` · line-height `1.2` · tracking `none` · Used for hero headlines.
    -   **Heading XL**: `Inter` `56px` `600` · line-height `1.2` · tracking `none` · For prominent section titles.
    -   **Heading LG**: `Inter` `48px` `600` · line-height `1.2` · tracking `none` · For large content headings.
    -   **Heading MD**: `Inter` `40px` `600` · line-height `1.2` · tracking `none` · For primary content headings.
    -   **Heading SM**: `Inter` `24px` `600` · line-height `1.2` · tracking `none` · For sub-section titles.
    -   **Heading XS**: `Inter` `20px` `400` · line-height `1.5` · tracking `none` · For smaller content headings or lead-in text.
    -   **Body**: `Inter` `16px` `400` · line-height `1.6` · tracking `none` · Standard paragraph text for readability.
    -   **Caption**: `Inter` `14px` `400` · line-height `1.5` · tracking `none` · For small print, metadata, and secondary information.
    -   **Code/Mono**: `JetBrains Mono` `14px` `400` · line-height `1.5` · tracking `none` · For code snippets and technical content.

-   **Principles**
    -   Maintain high contrast between text (`{colors.text-primary}`) and dark backgrounds (`{colors.background}`).
    -   Utilize a clear typographic scale, reserving `Inter` `600` weight for all headings to establish strong hierarchy.
    -   Employ `JetBrains Mono` exclusively for code-related content, distinguishing it from general UI text.
    -   Prioritize `16px` `Inter` `400` with `1.6` line-height for body text to ensure optimal readability on dark surfaces.
    -   Use `14px` `Inter` `400` for captions and subtle information, ensuring it remains legible.

## 4. Component Stylings

### Buttons

Buttons feature a subtle 2px border radius and a consistent padding, ensuring a uniform interactive experience. All buttons include a `0.2s ease-out` transition for smooth visual feedback on interaction.

#### Primary Button

A prominent green button for primary actions, with dark text. On hover, the background darkens slightly. When active, its opacity reduces.

```css
.button-primary {
  background-color: var(--color-primary, #32f08c);
  color: var(--color-primary-text, #0a0b0d);
  font-family: 'Inter', sans-serif;
  font-size: var(--components-button-primary-font-size, 16px);
  font-weight: var(--components-button-primary-font-weight, 500);
  padding: var(--components-button-primary-padding, 12px 24px);
  border: none;
  border-radius: var(--radius-xs, 2px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out),
              opacity var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #28c070); /* inferred from screenshot */
}

.button-primary:active {
  opacity: 0.75; /* extracted from pseudoStates.active */
}

.button-primary:disabled {
  background-color: var(--color-primary, #32f08c); /* inferred from screenshot */
  color: var(--color-text-secondary, #787d87); /* extracted from pseudoStates.disabled */
  cursor: default; /* extracted from pseudoStates.disabled */
  opacity: 0.6; /* inferred from screenshot */
}
```


<details>
<summary>Secondary Button</summary>

A transparent button with a white border and light text, used for secondary actions. On hover, the text turns pure white.

```css
.button-secondary {
  background-color: var(--components-button-secondary-bg, transparent);
  color: var(--color-text-primary, #f5f9fe);
  font-family: 'Inter', sans-serif;
  font-size: var(--components-button-secondary-font-size, 16px);
  font-weight: var(--components-button-secondary-font-weight, 500);
  padding: var(--components-button-secondary-padding, 12px 24px);
  border: var(--components-button-secondary-border, 1px solid #ffffff);
  border-radius: var(--radius-xs, 2px);
  cursor: pointer;
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out),
              opacity var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.button-secondary:hover {
  color: var(--color-text-on-dark-hover, #ffffff); /* extracted from pseudoStates.hover */
}

.button-secondary:active {
  opacity: 0.75; /* extracted from pseudoStates.active */
}

.button-secondary:disabled {
  border-color: var(--color-text-secondary, #787d87); /* inferred from screenshot */
  color: var(--color-text-secondary, #787d87); /* extracted from pseudoStates.disabled */
  cursor: default; /* extracted from pseudoStates.disabled */
  opacity: 0.6; /* inferred from screenshot */
}
```

</details>

<details>
<summary>Ghost Button</summary>

A text-only button for tertiary actions, often seen in navigation or subtle prompts. On hover, its text turns pure white.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #f5f9fe);
  font-family: 'Inter', sans-serif;
  font-size: 16px; /* inferred from screenshot */
  font-weight: 400; /* inferred from screenshot */
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-xs, 2px);
  cursor: pointer;
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out),
              opacity var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.button-ghost:hover {
  color: var(--color-text-on-dark-hover, #ffffff); /* extracted from pseudoStates.hover */
}

.button-ghost:active {
  opacity: 0.75; /* extracted from pseudoStates.active */
}

.button-ghost:disabled {
  color: var(--color-text-secondary, #787d87); /* extracted from pseudoStates.disabled */
  cursor: default; /* extracted from pseudoStates.disabled */
  opacity: 0.6; /* inferred from screenshot */
}
```

</details>
### Cards & Containers

Cards are dark, with a subtle border and shadow, used to group related content. On hover, the shadow slightly expands, creating a lift effect.

#### Standard Card (Dark)

```css
.card-dark {
  background-color: var(--colors-surface-dark, #121314);
  color: var(--colors-text-primary, #f5f9fe);
  padding: var(--spacing-48, 48px); /* inferred from screenshot */
  border: var(--components-card-dark-border, 1px solid #252729);
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  transition: box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out);
}

.card-dark:hover {
  box-shadow: var(--elevation-card-hover, rgba(0, 0, 2, 0.3) 0px 5px 15px 0px); /* inferred from screenshot */
}
```

### Inputs & Forms

Form elements are designed for dark backgrounds, with clear light text and subtle borders.

#### Text Input

Text inputs have a dark background, light text, and a subtle dark border. On focus, a blue ring appears.

```css
.input-text {
  background-color: var(--colors-background, #0a0b0d); /* inferred from screenshot */
  color: var(--colors-text-primary, #f5f9fe);
  font-family: 'Inter', sans-serif;
  font-size: 16px; /* inferred from screenshot */
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--colors-border-dark-muted, #252729); /* inferred from screenshot */
  border-radius: var(--radius-xs, 2px);
  transition: border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out),
              box-shadow var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.input-text:focus {
  outline: none; /* extracted from pseudoStates.focus */
  border-color: var(--colors-focus-ring, rgba(59,130,246,0.5)); /* inferred from screenshot */
  box-shadow: 0 0 0 2px var(--colors-focus-ring, rgba(59,130,246,0.5)); /* inferred from pseudoStates.focus */
}

.input-text:disabled {
  background-color: var(--colors-surface-dark, #121314); /* inferred from screenshot */
  color: var(--colors-text-secondary, #787d87);
  cursor: not-allowed; /* inferred from screenshot */
  opacity: 0.6; /* inferred from screenshot */
}
```


<details>
<summary>Form Label</summary>

Labels for form fields are light and slightly bolder to stand out.

```css
.form-label {
  color: var(--colors-text-primary, #f5f9fe);
  font-family: 'Inter', sans-serif;
  font-size: 14px; /* inferred from screenshot */
  font-weight: 500; /* inferred from screenshot */
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
  display: block;
}
```

</details>

<details>
<summary>Checkbox/Radio</summary>

Standard checkboxes and radio buttons are not explicitly visible in the screenshot. (none observed in source)

</details>
### Navigation

#### Top Navigation Bar

The navigation bar is a fixed dark strip at the top, providing global access to key sections. It has a defined height and subtle padding.

```css
.nav-bar {
  background-color: var(--colors-background, #0a0b0d);
  height: 64px; /* extracted from cssVariables */
  padding: 0 var(--spacing-32, 32px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}
```


<details>
<summary>Navigation Link</summary>

Navigation links are light text on the dark navigation bar. On hover, they highlight with the primary green accent. An active state is indicated by the same green.

```css
.nav-link {
  color: var(--colors-text-primary, #f5f9fe);
  font-family: 'Inter', sans-serif;
  font-size: 16px; /* inferred from screenshot */
  font-weight: 400; /* inferred from screenshot */
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.nav-link:hover {
  color: var(--colors-primary, #32f08c); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-primary, #32f08c); /* inferred from screenshot */
  /* Optional: visual indicator for active state, e.g., border-bottom */
  /* border-bottom: 2px solid var(--colors-primary, #32f08c); */ /* inferred from screenshot */
}
```

</details>

<details>
<summary>Dropdown Menu</summary>

Dropdown menus use the `surface-dark` background with a subtle border radius, providing a contained list of options.

```css
.dropdown-menu {
  background-color: var(--colors-surface-dark, #121314);
  border: 1px solid var(--colors-border-dark-muted, #252729); /* inferred from screenshot */
  border-radius: var(--radius-md, 4px);
  padding: var(--spacing-8, 8px) 0;
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px); /* inferred from screenshot */
  transition: opacity var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out); /* inferred from screenshot */
}

.dropdown-menu-item {
  color: var(--colors-text-primary, #f5f9fe);
  font-family: 'Inter', sans-serif;
  font-size: 16px; /* inferred from screenshot */
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.dropdown-menu-item:hover {
  background-color: var(--colors-border-dark-muted, #252729); /* inferred from screenshot */
}
```

</details>
### Links

Links are styled to be easily identifiable and provide clear feedback on interaction.

#### Standard Link

Standard links are highlighted with the primary green color. On hover, they gain an underline.

```css
.link-standard {
  color: var(--colors-primary, #32f08c);
  text-decoration: none;
  transition: text-decoration var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.link-standard:hover {
  text-decoration: underline;
}

.link-standard:visited {
  color: var(--colors-primary, #32f08c); /* inferred to be same as default */
}
```


<details>
<summary>Secondary Link</summary>

Secondary links use a muted grey color for less emphasis. On hover, their color brightens to `text-primary`.

```css
.link-secondary {
  color: var(--colors-text-muted, #a6aab5);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-out);
}

.link-secondary:hover {
  color: var(--colors-text-primary, #f5f9fe);
}

.link-secondary:visited {
  color: var(--colors-text-muted, #a6aab5); /* inferred to be same as default */
}
```

</details>
### Badges

#### Status Badge - Hot

A small, vibrant green badge used to highlight new or popular features, like "Hot" on navigation items.

```css
.badge-hot {
  background-color: var(--colors-primary, #32f08c);
  color: var(--colors-primary-text, #0a0b0d);
  font-family: 'Inter', sans-serif;
  font-size: 12px; /* inferred from screenshot */
  font-weight: 500; /* inferred from screenshot */
  padding: 2px 6px; /* inferred from screenshot */
  border-radius: var(--radius-xs, 2px);
  text-transform: uppercase;
  letter-spacing: 0.05em; /* inferred from screenshot */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
```

## 5. Layout Principles

-   **Spacing System**: The spacing system is built on a `4px` base unit, providing a flexible yet consistent rhythm across the interface.
    -   Base: `4px`
    -   Scale: `[4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96]`
    -   Usage Context:
        -   `4px`: Smallest element spacing, icon-to-text.
        -   `8px`: Inline element separation, small vertical gaps.
        -   `12px`: Button internal padding (vertical), list item spacing.
        -   `16px`: Body text line-height base, component internal padding.
        -   `20px`: Moderate spacing between related elements.
        -   `24px`: Button internal padding (horizontal), standard component separation.
        -   `32px`: Sectional padding, major element separation.
        -   `48px`: Card internal padding, larger content blocks.
        -   `64px`: Significant vertical spacing between major sections.
        -   `80px`: Large hero section padding.
        -   `96px`: Extra large container padding, full page sections.

-   **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from screenshot)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section Padding: `64px` vertical, `32px` horizontal (inferred from screenshot)

-   **Whitespace Philosophy**: TRAE leverages generous dark whitespace (`#0a0b0d`) to create a sense of spaciousness and focus. This ample negative space allows content to breathe, reduces visual clutter, and enhances the readability of high-contrast text. It also serves to highlight key interactive elements and visual assets, guiding the user's eye through the interface with deliberate intent.

-   **Border Radius Scale**:
    -   `xs` (`2px`): Used for subtle rounding on buttons and small interactive elements.
    -   `sm` (`3px`): Slightly more pronounced rounding for input fields.
    -   `md` (`4px`): Standard rounding for cards and larger containers.
    -   `lg` (`8px`): Larger rounding for distinct UI elements or modals (not explicitly seen, but a logical extension).

## 6. Depth & Elevation

TRAE uses subtle shadows to create a sense of depth on its dark interface, primarily for cards and modal overlays.

-   **Flat (z-0)**: `none` — Default state for most background elements and text.
-   **Card (z-1)**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` — Used for standard cards and elevated content blocks.
-   **Card Hover (z-1)**: `rgba(0, 0, 2, 0.3) 0px 5px 15px 0px` — A slightly more pronounced shadow to indicate interactive card states (inferred from screenshot).
-   **Header (z-10)**: `none` — Used for the fixed top navigation bar, ensuring it stays above page content.
-   **Modal (z-9999)**: `rgba(0, 0, 2, 0.3) 0px 10px 30px 0px` — Applied to modal dialogs and overlays, creating a strong visual separation.
-   **Cookie Consent (z-2147483647)**: `none` — The highest z-index, reserved for critical, always-on UI elements like cookie banners.

Shadow Philosophy: Shadows are used sparingly and with low opacity to provide a subtle sense of hierarchy and interaction feedback on the dark background. The `card` shadow is minimal, while `modal` shadows are more pronounced to clearly differentiate overlaid content. Hover states for cards utilize a slightly softer, more spread shadow to suggest a "lift" effect.

## 7. Do's and Don'ts

### Do's

-   **Do** use `{colors.primary, #32f08c}` for all primary calls-to-action and interactive highlights.
-   **Do** ensure body text uses `{colors.text-primary, #f5f9fe}` on `{colors.background, #0a0b0d}` for AAA contrast (ratio 18.62).
-   **Do** apply `Inter` `600` weight for all headings to maintain a strong visual hierarchy.
-   **Do** use `16px` with `1.6` line-height for body text to ensure optimal readability on dark themes.
-   **Do** utilize `{spacing.scale}` values like `24px` for component separation and `64px` for section breaks.
-   **Do** apply `{radius.xs, 2px}` to buttons and `{radius.md, 4px}` to cards for consistent subtle rounding.
-   **Do** use `JetBrains Mono` `14px` for all code snippets and technical content.
-   **Do** ensure interactive elements like `button-primary` have a `0.2s ease-out` transition for smooth feedback.
-   **Do** use `{colors.border-dark-muted, #252729}` for subtle borders on dark `card-dark` components.
-   **Do** highlight navigation links with `{colors.primary, #32f08c}` on hover and for active states.

### Don'ts

-   **Don't** use `{colors.text-primary, #f5f9fe}` on `{colors.background-light, #edeff2}`; its ratio of 1.09 fails AA.
-   **Don't** use `{colors.text-muted, #a6aab5}` on `{colors.background-light, #edeff2}`; its ratio of 2.02 fails AA.
-   **Don't** introduce custom spacing values; adhere strictly to the `{spacing.scale}` of `4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96`.
-   **Don't** use `Inter` `400` weight for headings; reserve `Inter` `600` for all heading roles.
-   **Don't** apply strong, opaque shadows; use the subtle `elevation.card` and `elevation.modal` values.
-   **Don't** use a border radius larger than `{radius.md, 4px}` on standard `card-dark` components.
-   **Don't** use `{colors.text-secondary, #787d87}` on `{colors.background, #0a0b0d}` for critical information; its ratio of 4.76 only passes AA.
-   **Don't** use `text-decoration: underline` on standard links by default; reserve it for the `:hover` state.
-   **Don't** use `background-color: transparent` for a `button-primary`; it must always use `{colors.primary, #32f08c}`.
-   **Don't** modify the `64px` height of the `nav-bar`; it is fixed for consistent global navigation.

## 8. Responsive Behavior
_Note: breakpoints below are measured from the source. Adjust to the brand's actual media queries when implementing._

-   **Breakpoints**:
    -   **Mobile Small** (~640px): Content stacks vertically, typography sizes reduce, and padding adjusts.
    -   **Mobile Large / Tablet** (~768px): Navigation may collapse into a hamburger menu, card layouts adapt.
    -   **Tablet Landscape** (~744px): Layouts may transition to 2-column, with adjusted image sizes.
    -   **Desktop** (~1200px): Standard desktop layout with full navigation and multi-column content.
    -   **Desktop Large** (~1280px): Wider containers and increased spacing for large screens.

-   **Touch Targets**:
    -   Ensure all interactive elements, especially `button-primary` and `nav-link`, are at least `44px` by `44px` (inferred from screenshot).
    -   Maintain a minimum of `8px` (`{spacing.8}`) clear space around touch targets to prevent accidental taps.

-   **Collapsing Strategy**:
    -   **Navigation**: The main navigation links collapse into a hamburger menu below `768px` breakpoint.
    -   **Cards**: `card-dark` components transition from multiple columns to a single column stack on mobile.
    -   **Typography**: Display and heading sizes (`display` `72px`, `heading-xl` `56px`) scale down for smaller viewports.
    -   **Padding**: Vertical section padding (`64px`) and horizontal container padding (`32px`) reduce on mobile.
    -   **Forms**: Input fields and form layouts adapt to full width on mobile devices.
    -   **Spacing**: Larger spacing values like `48px` and `64px` are often reduced to `24px` or `32px` on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#32f08c`
    -   `primary-text`: `#0a0b0d`
    -   `primary-hover`: `#28c070`
    -   `background`: `#0a0b0d`
    -   `background-light`: `#edeff2`
    -   `text-primary`: `#f5f9fe`
    -   `text-muted`: `#a6aab5`
    -   `text-secondary`: `#787d87`
    -   `text-on-dark-hover`: `#ffffff`
    -   `surface-dark`: `#121314`
    -   `surface-dark-alt`: `#171a1c`
    -   `border-dark-muted`: `#252729`
    -   `border-light`: `#ffffff`
    -   `focus-ring`: `rgba(59,130,246,0.5)`

-   **Iteration Guide**:
    1.  Always use `{colors.primary, #32f08c}` for main call-to-action backgrounds.
    2.  Ensure `button-primary` text is `{colors.primary-text, #0a0b0d}`.
    3.  Set all body text to `{typography.body.size, 16px}` in `Inter` `400` weight.
    4.  Apply `{spacing.base, 4px}` increments for all internal and external spacing.
    5.  Use `{radius.xs, 2px}` for all buttons and `{radius.md, 4px}` for cards.
    6.  Default `card-dark` components to `background-color: {colors.surface-dark, #121314}` with `1px solid {colors.border-dark-muted, #252729}`.
    7.  Implement `button-primary:hover` with `background-color: {colors.primary-hover, #28c070}`.
    8.  Ensure `input-text:focus` displays a `2px` `box-shadow` with `{colors.focus-ring, rgba(59,130,246,0.5)}`.
    9.  The `nav-bar` must maintain a fixed `64px` height and `background-color: {colors.background, #0a0b0d}`.
    10. Use `elevation.card` for standard card shadows and `elevation.modal` for overlays.
    11. Collapse navigation and stack cards vertically below the `768px` breakpoint.
    12. Verify text contrast, especially for `{colors.text-muted, #a6aab5}` on `{colors.background-light, #edeff2}` which fails AA (2.02 ratio).

<!-- DESIGNMD_VALIDATOR_WARNINGS
{
  "version": 1,
  "generatedAt": "2026-08-10T09:51:21.234Z",
  "summary": {
    "unpairedBanned": 2,
    "bannedPhrase": 0,
    "total": 2
  },
  "warnings": [
    {
      "kind": "unpaired-banned-word",
      "term": "modern",
      "sentence": "The overall impression is one of modern sophistication, tailored for a developer-centric audience, with a clear focus on functionality and a polished, high-tech presentation."
    },
    {
      "kind": "unpaired-banned-word",
      "term": "polished",
      "sentence": "The overall impression is one of modern sophistication, tailored for a developer-centric audience, with a clear focus on functionality and a polished, high-tech presentation."
    }
  ]
}
-->
