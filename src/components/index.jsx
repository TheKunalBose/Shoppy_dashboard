// export { default as Button } from './Button';
// export { default as ThemeSettings } from './ThemeSettings';
// export { default as Sidebar } from './Sidebar';
// // eslint-disable-next-line import/no-cycle
// export { default as Navbar } from './Navbar';
// export { default as Footer } from './Footer';
// export { default as Cart } from './Cart';
// export { default as Chat } from './Chat';
// export { default as Notification } from './Notification';
// export { default as UserProfile } from './UserProfile';
// export { default as SparkLine } from './Charts/SparkLine';
// export { default as LineChart } from './Charts/LineChart';
// export { default as Stacked } from './Charts/Stacked';
// export { default as Pie } from './Charts/Pie';
// export { default as ChartsHeader } from './ChartsHeader';
// export { default as Header } from './Header';

// src/components/index.jsx
// Fixed version to avoid circular dependencies

// Basic UI components (no dependencies on other components)
export { default as Button } from './Button';
export { default as ThemeSettings } from './ThemeSettings';

// Layout components (may depend on basic components)
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
export { default as Sidebar } from './Sidebar';

// Complex components (may depend on layout components)
export { default as Header } from './Header';
export { default as Chat } from './Chat';
export { default as Cart } from './Cart';
export { default as UserProfile } from './UserProfile';
export { default as Notification } from './Notification';

// Chart components (separate to avoid cycles)
export { default as LineChart } from './Charts/LineChart';
export { default as SparkLine } from './Charts/SparkLine';
export { default as Stacked } from './Charts/Stacked';
export { default as Pie } from './Charts/Pie';
export { default as ChartsHeader } from './Charts/ChartsHeader';

// If you have circular dependencies, restructure like this:
// Instead of exporting everything from index, import directly in components
// Example: import Navbar from './Navbar' instead of import { Navbar } from './components'
