import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ATSOutletStyles from './css/ATSOutlet.module.css';
import logo from '../assets/logo.png';
import {
  LayoutDashboard,
  Users,
  FileText,
  DollarSign,
  Send,
  BarChart2,
  Settings,
  Link2,
  TrendingUp,
  Menu,
  X,
  ChevronLeft,
  Search,
  LogOut
} from 'lucide-react';

const ATSOutlet = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCompanyInfo = async () => {
      try {
        const info = localStorage.getItem('company-info');
        if (info) {
          setCompanyInfo(JSON.parse(info));
        }
      } catch (error) {
        console.error('Error loading company info:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCompanyInfo();
  }, []);

  const menuItems = [
    { path: '/ATS/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/ATS/ats', icon: <Users size={20} />, label: 'ATS' },
    { path: '/ATS/employteam', icon: <Users size={20} />, label: 'Employ Team' },
    { path: '/ATS/documents', icon: <FileText size={20} />, label: 'Documents' },
    { path: '/ATS/payroll', icon: <DollarSign size={20} />, label: 'PayRoll' },
    { path: '/ATS/post', icon: <Send size={20} />, label: 'Post' },
    { path: '/ATS/report', icon: <BarChart2 size={20} />, label: 'Report' },
    { path: '/ATS/configuration', icon: <Settings size={20} />, label: 'Configuration' },
    { path: '/ATS/integration', icon: <Link2 size={20} />, label: 'Integration' },
    { path: '/ATS/promotion', icon: <TrendingUp size={20} />, label: 'Promotion' }
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className={ATSOutletStyles["ATS-container"]}>
      <button 
        className={ATSOutletStyles.mobileToggle}
        onClick={toggleMobile}
        aria-label="Toggle Menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`${ATSOutletStyles.sidebar} ${isCollapsed ? ATSOutletStyles.collapsed : ''} ${isMobileOpen ? ATSOutletStyles.mobileOpen : ''}`}>
        <div className={ATSOutletStyles.sidebarHeader}>
          <div className={ATSOutletStyles.logoContainer}>
            {isLoading ? (
              <div className={ATSOutletStyles.logoSkeleton} />
            ) : (
              <img 
                src={companyInfo?.companyLogo || logo} 
                alt="Company Logo" 
                className={ATSOutletStyles.logo}
                onError={(e) => {
                  e.target.src = logo;
                  e.target.onerror = null;
                }}
              />
            )}
            {!isCollapsed && (
              <span className={ATSOutletStyles.companyName}>
                {companyInfo?.companyName || 'Mekyek'}
              </span>
            )}
          </div>
          <button 
            className={ATSOutletStyles.collapseButton}
            onClick={toggleSidebar}
            aria-label="Collapse Sidebar"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className={ATSOutletStyles.searchContainer}>
          <Search className={ATSOutletStyles.searchIcon} size={18} />
          <input 
            type="text" 
            placeholder={isCollapsed ? '' : 'Search...'}
            className={ATSOutletStyles.searchInput}
          />
        </div>

        <nav className={ATSOutletStyles.navigation}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `${ATSOutletStyles.menuItem} ${isActive ? ATSOutletStyles.active : ''}`
              }
            >
              <span className={ATSOutletStyles.menuIcon}>{item.icon}</span>
              {!isCollapsed && (
                <span className={ATSOutletStyles.menuLabel}>{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={ATSOutletStyles.sidebarFooter}>
          <button className={ATSOutletStyles.logoutButton} onClick={handleLogout}>
            <LogOut size={20} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <main className={ATSOutletStyles["content-area"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default ATSOutlet;
