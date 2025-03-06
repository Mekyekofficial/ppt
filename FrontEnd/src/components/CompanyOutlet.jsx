import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CompanyOutletStyles from './css/CompanyOutlet.module.css';
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

const CompanyOutlet = () => {
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

  if(!companyInfo) {
    return null;
  }

  const menuItems = [
    { path: '/Company/Dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/Company/ATS', icon: <Users size={20} />, label: 'ATS' },
    { path: '/Company/Employ-Team', icon: <Users size={20} />, label: 'Employ Team' },
    { path: '/Company/Documents', icon: <FileText size={20} />, label: 'Documents' },
    { path: '/Company/Payroll', icon: <DollarSign size={20} />, label: 'PayRoll' },
    { path: '/Company/Post', icon: <Send size={20} />, label: 'Post' },
    { path: '/Company/Report', icon: <BarChart2 size={20} />, label: 'Report' },
    { path: '/Company/Configuration', icon: <Settings size={20} />, label: 'Configuration' },
    { path: '/Company/Integration', icon: <Link2 size={20} />, label: 'Integration' },
    { path: '/Company/Promotion', icon: <TrendingUp size={20} />, label: 'Promotion' }
  ];

  const handleLogout = () => {
    localStorage.clear();
    console.log('Logged out');
    window.location.href = '/';
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className={CompanyOutletStyles["ATS-container"]}>
      <button 
        className={CompanyOutletStyles.mobileToggle}
        onClick={toggleMobile}
        aria-label="Toggle Menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`${CompanyOutletStyles.sidebar} ${isCollapsed ? CompanyOutletStyles.collapsed : ''} ${isMobileOpen ? CompanyOutletStyles.mobileOpen : ''}`}>
        <div className={CompanyOutletStyles.sidebarHeader}>
          <div className={CompanyOutletStyles.logoContainer}>
            {isLoading ? (
              <div className={CompanyOutletStyles.logoSkeleton} />
            ) : (
              <img 
                src={companyInfo?.companyLogo || logo} 
                alt="Company Logo" 
                className={CompanyOutletStyles.logo}
                onError={(e) => {
                  e.target.src = logo;
                  e.target.onerror = null;
                }}
              />
            )}
            {!isCollapsed && (
              <span className={CompanyOutletStyles.companyName}>
                {companyInfo?.companyName || 'Mekyek'}
              </span>
            )}
          </div>
          <button 
            className={CompanyOutletStyles.collapseButton}
            onClick={toggleSidebar}
            aria-label="Collapse Sidebar"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        <nav className={CompanyOutletStyles.navigation}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `${CompanyOutletStyles.menuItem} ${isActive ? CompanyOutletStyles.active : ''}`
              }
            >
              <span className={CompanyOutletStyles.menuIcon}>{item.icon}</span>
              {!isCollapsed && (
                <span className={CompanyOutletStyles.menuLabel}>{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={CompanyOutletStyles.sidebarFooter}>
          <button className={CompanyOutletStyles.logoutButton} onClick={handleLogout}>
            <LogOut size={20} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <main className={CompanyOutletStyles["content-area"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default CompanyOutlet;
