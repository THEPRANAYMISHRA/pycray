# Mini Event Manager

A simple client-side event management page built using **Next-Forge Turbo template** with  
Next.js (App Router), TypeScript & TailwindCSS.

---

## 🚀 How to Run

```bash
pnpm install  
pnpm dev
````

The application will start on for web:
`http://localhost:3001`

---

## 📍 Page Path

Event Manager UI is available at:
**/events**
→ [http://localhost:3001/events](http://localhost:3001/events)

---

## ✨ Features

* Add Event (name & date)
* Events stored in in-memory list
* Delete Event
* Search (with debounce)
* Persists events to `localStorage` (so refresh won’t delete them)
* Fully client-side — no API

---

## 📌 Notes / Assumptions

* Designed using the **web app** inside the monorepo — other workspaces (api, studio, etc.) are disabled and not required.
* No authentication, databases or backend services are used.
* Compatible with **Turborepo + pnpm monorepo setup** from the Next-Forge template.
* You can remove all unused apps/workspaces (api, docs, etc.) to keep the repo light.

## 📌 Screenshots

<img width="1470" height="956" alt="Screenshot 2025-08-18 at 6 27 15 PM" src="https://github.com/user-attachments/assets/3f6f4525-6c86-41ff-acc5-5b00d3db84db" />
<img width="1470" height="956" alt="Screenshot 2025-08-18 at 6 26 32 PM" src="https://github.com/user-attachments/assets/f557da1f-7ec9-4165-9318-7afe44509efb" />
<img width="1470" height="956" alt="Screenshot 2025-08-18 at 6 27 00 PM" src="https://github.com/user-attachments/assets/d0522f68-770f-45c0-aefe-486d7215eca0" />
