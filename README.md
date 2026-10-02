# JEV AI Assistant Demo

A two-page Shopify-style demo showcasing a premium e-commerce storefront with an embedded AI chat assistant and a comprehensive admin dashboard.

## 🎨 Design System

Built with **Neumorphism (Soft UI)** design system featuring:
- Cool grey monochromatic palette (`#E0E5EC` base)
- Dual RGB shadow system for realistic depth
- Soft, hyper-rounded corners (32px containers, 16px buttons)
- WCAG AA compliant contrast ratios
- Smooth micro-interactions (300ms transitions)
- Mobile-first responsive design

## 📦 Tech Stack

- **Framework**: Next.js 16.3.8 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans (display) + DM Sans (body)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to the storefront.

## 📄 Pages

### 1. **Storefront** (`/storefront`)

**Premium Noise-Canceling Headphones Product Page**

Features:
- **Interactive Image Gallery**: 4 product images with thumbnail navigation
- **Product Details**: Price, stock status, specs grid
- **Color Selection**: 3 color variants with neumorphic toggles
- **Quantity Selector**: Inset number input with +/- controls
- **Rating & Feedback Form**: Interactive 1–5 star rating with comment submission
- **JEV AI Chat Widget**: Floating chat button with collapsible conversation interface

Components:
- `StorefrontHeader` — Sticky navigation with cart badge
- `ProductView` — Main product display and purchase controls
- `RatingFeedback` — Star rating and feedback form
- `ChatWidget` — AI assistant chat interface (bottom-right FAB)

### 2. **Admin Dashboard** (`/admin`)

**JEV Operations & Analytics Dashboard**

Four sections (tabbed navigation):

#### 📊 **Decision Logs** (default)
Real-time telemetry stream showing:
- Live request logs with timestamp, route, schema validation, latency, reference ID, and status
- Stats cards: Total requests, avg latency, schema pass rate, errors
- Color-coded latency badges (green <100ms, amber <200ms, red ≥200ms)

#### 🎫 **Tickets Management**
Real-time ticket table with:
- User profile, subject, priority badge, category tag
- Purchase intent gauge (visual progress bar)
- Status indicator with live pulse animation
- Quick action buttons: Respond, Escalate, More
- Filter tabs: All, Open, Critical

#### 🤖 **AI Resolved Cases**
Audit log of AI-handled resolutions:
- Confidence score ring (animated SVG progress circle)
- Sentiment badges (positive/negative/neutral with icons)
- Resolution summary in inset panel
- Audit and Re-route action buttons

#### ⚡ **Scenario Quick-Launcher**
4 pre-configured test scenarios:
1. **Bulk Order Intent 92%** — Corporate buyer, high revenue potential
2. **Angry Defective Unit** — Critical priority, churn risk
3. **Positive 5-Star Review** — NPS 10, referral potential
4. **Shipping FAQ** — Low complexity, auto-resolve 96%

Each scenario card shows icon well, metrics, and launch button.

Components:
- `AdminSidebar` — Desktop sidebar + mobile hamburger menu
- `DecisionLogs` — Live telemetry stream
- `TicketsTable` — Active ticket management
- `AIResolvedCases` — Resolution audit log
- `ScenarioLauncher` — Pre-configured test scenarios

## 🎯 Key Features

### Neumorphic Design Elements
- **Extruded shadows**: Default resting state (cards, buttons)
- **Inset shadows**: Pressed states, input fields, icon wells
- **Deep inset**: Text areas, avatar containers, carved elements
- **Hover states**: Lift animation (-1px translateY) + enhanced shadow
- **Active states**: Press down (+0.5px translateY) + inset shadow

### Interactive Components
- **Star rating**: Hover preview + click to rate
- **Chat widget**: Collapsible with message history
- **Quantity selector**: Inset number input with smooth transitions
- **Color picker**: Neumorphic toggle with focus rings
- **Confidence rings**: Animated SVG progress circles
- **Intent gauges**: Colored progress bars (green/amber/red)

### Responsive Behavior
- **Mobile**: Hamburger menus, single-column layouts, touch-friendly 44px targets
- **Tablet** (≥768px): Two-column grids, expanded navigation
- **Desktop** (≥1024px): Sidebar navigation, three-column grids, full feature set

## 🎨 Color Palette

```css
--background: #E0E5EC      /* Base cool grey surface */
--foreground: #3D4852      /* Primary text (7.5:1 contrast) */
--muted: #6B7280           /* Secondary text (4.6:1 contrast) */
--accent: #6C63FF          /* Soft violet for CTAs */
--accent-secondary: #38B2AC /* Teal for success states */
```

## 📝 Notes

- **UI Only**: All interactions are mocked (no backend logic)
- **Static Data**: Sample tickets, logs, and products are hardcoded
- **Chat Widget**: Replies with demo message after 1s delay
- **Scenarios**: Launch buttons are visual-only (no execution)

## 🔗 Navigation

- **Storefront → Admin**: Click "Admin" button in header
- **Admin → Storefront**: Click "Back to Store" in sidebar
- **Admin Tabs**: Click sidebar items or use mobile dropdown

## ♿ Accessibility

- WCAG AA compliant contrast ratios
- Keyboard navigation support
- Focus indicators on all interactive elements
- Semantic HTML structure
- Screen reader friendly labels

---

**Demo ready at**: http://localhost:3000
