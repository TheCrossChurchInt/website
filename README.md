# Prophet Benson Ministry App

A Next.js application for Prophet Benson's ministry, featuring event booking, prophetic journals, and content management.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI (Radix Primitives)
- **Icons:** Lucide React

## Setup & Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Open Browser:**
    Navigate to `http://localhost:3000`

## Features

-   **Public Home:** Welcome page with ministry info and upcoming events.
-   **Booking System:** `/book` - Schedule one-on-one sessions.
-   **Prophetic Journal:** `/prophecies` - Private journal for words/prophecies (Mock protected).
-   **Admin Dashboard:** `/admin` - Upload content and manage bookings (Mock protected).
-   **Authentication:** `/login` - Mock login flow.

## Project Structure

-   `app/`: Application routes and pages.
-   `components/`: Reusable UI components.
-   `lib/`: Utility functions.
-   `public/`: Static assets.
