---
name: nextjs-react-expert
description: Vercel performance standards.
---
# Performance Rules
1. **Server Components:** Use by default. Add "use client" only when needed.
2. **Image Optimization:** Always use `<Image />` with precise dimensions.
3. **Font Loading:** Use `next/font` to load Reachfly/Gilroy without layout shift.
