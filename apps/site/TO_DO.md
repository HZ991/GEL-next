# GEL SITE To Do

### /(home)

1. Create and add GEL Brand

   - Refactor to remove hardcoded colors
   - GEL brand is only used home page and article pages

   ```
   const GEL_COLORS = {
       primary: '#C80038',
       background: '#F3F5F6',
       border: '#CFD8DC',
       icon: '#1976D2',
       text: '#122935',
       link: '#1871C9',
       muted: '#575F65',
       hover: '#F9FAFB',
   };
   ```

   - Update typography font family to use `graphik` + default font fallback stack

### /design-system

1. Integrate content blocks with keystatic
2. Add box shadow to brand selector on navigation scroll

#### code tab

1. Package info table used in intro section
2. Update Live code block to look like current gel site
   - Update Show code text to Show live code
3. Props table

### /articles

1. Create content blocks and integrate with keystatic

### General

1. Fix list component styling, changing line height breaks current list component
2. Update component slugs to match current GEL navigation grouping