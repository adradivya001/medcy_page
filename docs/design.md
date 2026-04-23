# Medcy Landing Page: Design Document

## 1. Visual Identity: Enterprise Cobalt
The design system for Medcy aims to convey **deterministic logic**, **clinical precision**, and **authoritative infrastructure**. We have pivoted away from generic "Healthcare Green" toward a deep, technical "Enterprise Cobalt" theme.

### 1.1. Color Palette
- **Deep Space Navy** (`#020617`): Primary canvas background, providing depth and high contrast.
- **Electric Blue** (`#3B82F6`): Primary action color, used for buttons, active states, and focus glows.
- **Cyan Highlight** (`#22D3EE`): Secondary accent for categorical tags and decorative pulses.
- **Slate Textures**: Grays and Slates (Slate 200-500) for hierarchical subtext and borders.

## 2. Typography Pairing
We utilize a two-tier typography system to balance the "Human Clinical" feel with "Technical Infrastructure."

- **Primary Headline**: **PT Serif** (`font-light`). Provides a traditional, stable, and authoritative feel. Used for all section H1s and H2s.
- **Narrative Subtext**: **Abhaya Libre**. Optimized for longer descriptive blocks, providing a refined, readable flow.
- **UI & Controls**: **Plus Jakarta Sans**. A geometric sans-serif used for navigation, buttons, and numeric metrics for maximum legibility.

## 3. Interactive Patterns

### 3.1. Infrastructure Pulsing
Dynamic visual alerts used in the Problem/Solution grid:
- **Red Pulse** (`redPulse`): Periodic box-shadow fluctuation indicating clinical bottlenecks and legacy friction.
- **Green Pulse** (`greenPulse`): Success indicator signaling Medcy's deterministic engine outcomes.

### 3.2. 3D Architectural Deep-Dive
- **Portfolio Flip Cards**: Utilizes `perspective-1000` and `rotateY(180deg)` to reveal module-specific strategy details. This encourages user interaction without cluttering the primary grid.

### 3.3. Skewed Action UI
- **Partnership CTA**: Custom Skew-expension animation on buttons (1000ms duration) to create a "tactile focus" effect when hovering over partnership opportunities.

### 3.4. Gentle Glow (SoftAurora)
- **WebGL Background**: A high-performance shader layer positioned behind the Hero text.
- **Narrative Logic**: Mimics the soft gradients of clinical diagnostic imaging, providing a secondary layer of "operational heartbeat" to the landing page.
- **Interactivity**: Cursor-reactive noise offsets allow the glow to "follow" the user's intent, increasing engagement without distracting from the CTA.

## 4. Layout Architecture

### 4.1. Single-Viewport Narrative
Key structural blocks (Hero, Problem/Solution, Portfolio) are optimized for **information density**, ensuring the complete core narrative fits within a single viewport on desktop.

### 4.2. Edge-to-Edge Navigation
The Navbar utilizes a full-width container (`w-full`) to anchor the logo and CTA to the absolute horizontal edges of the screen, reinforcing the "Borderless" clinical infrastructure identity.

### 4.3. Glassmorphism & Depth
Extensive use of semi-transparent layers (`glass-light`) and ambient orbs (`blur-3xl`) to create a sense of three-dimensional depth and premium technical quality.
