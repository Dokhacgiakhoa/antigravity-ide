# Optimization Steps

#### 1. Replace Heavy Dependencies

\`\`\`bash
# Remove moment.js (67KB) → Use date-fns (12KB)
npm uninstall moment
npm install date-fns

# Before
import moment from 'moment';
const formatted = moment(date).format('YYYY-MM-DD');

# After
import { format } from 'date-fns';
const formatted = format(date, 'yyyy-MM-dd');
\`\`\`

**Savings:** 55KB

#### 2. Use Lodash Selectively

\`\`\`javascript
// Before: Import entire library (72KB)
import _ from 'lodash';
const unique = _.uniq(array);

// After: Import only what you need (5KB)
import uniq from 'lodash/uniq';
const unique = uniq(array);

// Or use native methods
const unique = [...new Set(array)];
\`\`\`

**Savings:** 67KB

#### 3. Implement Code Splitting

\`\`\`javascript
// Next.js example
import dynamic from 'next/dynamic';

// Lazy load heavy components
const Chart = dynamic(() => import('./Chart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
});

const AdminPanel = dynamic(() => import('./AdminPanel'), {
  loading: () => <div>Loading...</div>
});

// Route-based code splitting (automatic in Next.js)
// pages/admin.js - Only loaded when visiting /admin
// pages/dashboard.js - Only loaded when visiting /dashboard
\`\`\`

#### 4. Remove Dead Code

\`\`\`javascript
// Enable tree shaking in webpack.config.js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,
    sideEffects: false
  }
};

// In package.json
{
  "sideEffects": false
}
\`\`\`

#### 5. Optimize Third-Party Scripts

\`\`\`html
<!-- Before: Loads immediately -->
<script src="https://analytics.com/script.js"></script>

<!-- After: Load after page interactive -->
<script>
  window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = 'https://analytics.com/script.js';
    script.async = true;
    document.body.appendChild(script);
  });
</script>
\`\`\`