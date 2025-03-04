'use client';

import React, { useState } from "react";
import styles from "./css/Payroll.module.css";
import { 
  DollarSign, 
  Users, 
  Clock, 
  AlertCircle, 
  Download, 
  Filter, 
  Search,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Calendar,
  Building2,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Payroll = () => {
  const [payrollHistory, setPayrollHistory] = useState([
    { 
      id: 1, 
      date: "Feb 25, 2025", 
      type: "Regular", 
      amount: 245120.00, 
      status: "Completed",
      employees: 124,
      department: "Engineering",
      processedBy: "John Doe",
      notes: "Monthly payroll for February"
    },
    { 
      id: 2, 
      date: "Jan 25, 2025", 
      type: "Regular", 
      amount: 242890.00, 
      status: "Completed",
      employees: 122,
      department: "Engineering",
      processedBy: "John Doe",
      notes: "Monthly payroll for January"
    },
    { 
      id: 3, 
      date: "Jan 15, 2025", 
      type: "Bonus", 
      amount: 58500.00, 
      status: "Completed",
      employees: 124,
      department: "All",
      processedBy: "John Doe",
      notes: "Annual performance bonus"
    },
    { 
      id: 4, 
      date: "Dec 25, 2024", 
      type: "Regular", 
      amount: 240750.00, 
      status: "Completed",
      employees: 120,
      department: "Engineering",
      processedBy: "John Doe",
      notes: "Monthly payroll for December"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [newPayroll, setNewPayroll] = useState({
    type: "",
    amount: "",
    department: "",
    notes: ""
  });

  const handleAddPayroll = (e) => {
    e.preventDefault();
    if (newPayroll.type && newPayroll.amount && newPayroll.department) {
      const payroll = {
        id: payrollHistory.length + 1,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        ...newPayroll,
        amount: parseFloat(newPayroll.amount),
        status: "Pending",
        employees: 124,
        processedBy: "John Doe"
      };
      setPayrollHistory([payroll, ...payrollHistory]);
      setNewPayroll({
        type: "",
        amount: "",
        department: "",
        notes: ""
      });
      setShowAddForm(false);
    }
  };

  const handleDelete = (id) => {
    setPayrollHistory(payrollHistory.filter(item => item.id !== id));
    setShowActions(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setPayrollHistory(payrollHistory.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  const filteredPayroll = payrollHistory.filter(item => {
    const matchesSearch = item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.amount.toString().includes(searchQuery) ||
                         item.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type.toLowerCase() === filterType.toLowerCase();
    const matchesDepartment = filterDepartment === 'all' || item.department.toLowerCase() === filterDepartment.toLowerCase();
    return matchesSearch && matchesType && matchesDepartment;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return styles.statusCompleted;
      case "Processing":
        return styles.statusProcessing;
      default:
        return styles.statusPending;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const calculateTotalPayroll = () => {
    return payrollHistory.reduce((total, item) => total + item.amount, 0);
  };

  const calculateAveragePayroll = () => {
    return calculateTotalPayroll() / payrollHistory.length;
  };

  const calculatePayrollTrend = () => {
    if (payrollHistory.length < 2) return 0;
    const latest = payrollHistory[0].amount;
    const previous = payrollHistory[1].amount;
    return ((latest - previous) / previous) * 100;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Payroll Management</h1>
          <p className={styles.pageDescription}>Process and manage employee compensation</p>
        </div>
        <button 
          className={styles.generateButton}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Process Payroll
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <DollarSign size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Total Payroll Amount</h3>
            <p className={styles.statValue}>{formatCurrency(calculateTotalPayroll())}</p>
            <p className={styles.statSubtext}>For {payrollHistory[0]?.employees || 0} employees</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Clock size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Next Payroll Run</h3>
            <p className={styles.statValue}>March 25, 2025</p>
            <p className={styles.statSubtext}>21 days remaining</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <AlertCircle size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Pending Approvals</h3>
            <p className={styles.statValue}>3</p>
            <p className={styles.statSubtext}>Overtime and adjustments</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <DollarSign size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Average Payroll</h3>
            <p className={styles.statValue}>{formatCurrency(calculateAveragePayroll())}</p>
            <p className={styles.statSubtext}>
              <span className={calculatePayrollTrend() >= 0 ? styles.trendUp : styles.trendDown}>
                {calculatePayrollTrend() >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {Math.abs(calculatePayrollTrend()).toFixed(1)}% from last month
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search payroll records..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterContainer}>
            <Filter size={20} />
            <select
              className={styles.filterSelect}
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="regular">Regular</option>
              <option value="bonus">Bonus</option>
              <option value="overtime">Overtime</option>
            </select>
            <select
              className={styles.filterSelect}
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Department</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Processed By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayroll.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className={styles.dateCell}>
                        <Calendar size={16} />
                        {item.date}
                      </div>
                    </td>
                    <td>
                      <span className={styles.payrollType}>{item.type}</span>
                    </td>
                    <td>
                      <div className={styles.departmentCell}>
                        <Building2 size={16} />
                        {item.department}
                      </div>
                    </td>
                    <td>
                      <div className={styles.amountCell}>
                        <DollarSign size={16} />
                        {formatCurrency(item.amount)}
                      </div>
                    </td>
                    <td>
                      <span className={`${styles.statusBadge} ${getStatusStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.processedBy}</td>
                    <td>
                      <div className={styles.actionButtons}>
                        <button 
                          className={styles.actionButton}
                          onClick={() => {
                            setSelectedPayroll(item);
                            setShowActions(true);
                          }}
                        >
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showAddForm && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Process New Payroll</h2>
            <p className={styles.cardDescription}>Add a new payroll record</p>
          </div>
          <div className={styles.cardContent}>
            <form onSubmit={handleAddPayroll} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="type" className={styles.label}>
                    Payroll Type
                  </label>
                  <select
                    id="type"
                    className={styles.input}
                    value={newPayroll.type}
                    onChange={(e) => setNewPayroll({ ...newPayroll, type: e.target.value })}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="Regular">Regular</option>
                    <option value="Bonus">Bonus</option>
                    <option value="Overtime">Overtime</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="amount" className={styles.label}>
                    Amount
                  </label>
                  <input
                    id="amount"
                    type="number"
                    className={styles.input}
                    value={newPayroll.amount}
                    onChange={(e) => setNewPayroll({ ...newPayroll, amount: e.target.value })}
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="department" className={styles.label}>
                    Department
                  </label>
                  <select
                    id="department"
                    className={styles.input}
                    value={newPayroll.department}
                    onChange={(e) => setNewPayroll({ ...newPayroll, department: e.target.value })}
                    required
                  >
                    <option value="">Select department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Product">Product</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="All">All Departments</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="notes" className={styles.label}>
                    Notes
                  </label>
                  <input
                    id="notes"
                    type="text"
                    className={styles.input}
                    value={newPayroll.notes}
                    onChange={(e) => setNewPayroll({ ...newPayroll, notes: e.target.value })}
                    placeholder="Enter notes"
                  />
                </div>
              </div>
              <div className={styles.formActions}>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitButton}>
                  Process Payroll
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showActions && selectedPayroll && (
        <div className={styles.actionsMenu}>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedPayroll.id, 'Completed')}
          >
            <CheckCircle2 size={16} />
            Mark as Completed
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedPayroll.id, 'Processing')}
          >
            <Clock size={16} />
            Mark as Processing
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedPayroll.id, 'Pending')}
          >
            <XCircle size={16} />
            Mark as Pending
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => {
              setSelectedPayroll(null);
              setShowActions(false);
            }}
          >
            <Edit2 size={16} />
            Edit Details
          </button>
          <button 
            className={`${styles.actionMenuItem} ${styles.deleteAction}`}
            onClick={() => handleDelete(selectedPayroll.id)}
          >
            <Trash2 size={16} />
            Delete Record
          </button>
        </div>
      )}
    </div>
  );
};

export default Payroll; 