'use client';

import React, { useState, useEffect } from "react";
import styles from "./css/EmployTeam.module.css";
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Mail, 
  Phone, 
  MapPin, 
  Building2,
  Calendar,
  Clock,
  Star,
  MoreVertical,
  Edit2,
  Trash2,
  Send,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import API from "../../../api";

const EmployTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
    await API.get("/company/team-members")
      .then((res) => {
        setTeamMembers(res.data.teamMembers);
      })
      .catch((err) => {
        console.error("Error fetching team members:", err);
      });
    };
    fetchMembers();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
    phone: "",
    location: ""
  });

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (newMember.name && newMember.role && newMember.department && newMember.email) {
      try {
        const res = await API.post("/company/team-members", {
          ...newMember,
          status: 'active',
          joinDate: new Date().toISOString().split('T')[0],
          performance: 0,
          projects: 0,
          tasks: 0
        });
        setTeamMembers([res.data, ...teamMembers]);
        setNewMember({
          name: "",
          role: "",
          department: "",
          email: "",
          phone: "",
          location: ""
        });
        setShowAddForm(false);
        window.location.reload();
      } catch (error) {
        console.error("Error adding member:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/company/team-members/${id}`);
      setTeamMembers(teamMembers.filter(member => member.id !== id));
      setSelectedMember(null);
      setShowActions(false);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const res = await API.patch(`/company/team-members/${id}`, { status });
      setTeamMembers(teamMembers.map(member => member._id === id ? res.data : member));
      setSelectedMember(null);
      setShowActions(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating member status:", error);
    }
  };

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
                         member.email?.toLowerCase().includes(searchQuery?.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || member.department?.toLowerCase() === filterDepartment?.toLowerCase();
    const matchesStatus = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <span className={`${styles.statusBadge} ${styles.active}`}>
          <CheckCircle2 size={14} />
          Active
        </span>;
      case 'on-leave':
        return <span className={`${styles.statusBadge} ${styles.onLeave}`}>
          <Clock size={14} />
          On Leave
        </span>;
      default:
        return <span className={`${styles.statusBadge} ${styles.inactive}`}>
          <XCircle size={14} />
          Inactive
        </span>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Team Management</h1>
          <p className={styles.pageDescription}>Manage your team members and their roles</p>
        </div>
        <button 
          className={styles.addButton}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Add Team Member
        </button>
      </div>

      {showAddForm && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Add Team Member</h2>
            <p className={styles.cardDescription}>Add a new member to your team</p>
          </div>
          <div className={styles.cardContent}>
            <form onSubmit={handleAddMember} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={styles.input}
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="role" className={styles.label}>
                    Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    className={styles.input}
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    placeholder="Enter role"
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
                    value={newMember.department}
                    onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
                    required
                  >
                    <option value="">Select department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Product">Product</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={styles.input}
                    value={newMember.email}
                    onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={styles.input}
                    value={newMember.phone}
                    onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location" className={styles.label}>
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    className={styles.input}
                    value={newMember.location}
                    onChange={(e) => setNewMember({ ...newMember, location: e.target.value })}
                    placeholder="Enter location"
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
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Total Team Members</h3>
            <p className={styles.statValue}>{teamMembers.length}</p>
            <p className={styles.statSubtext}>Across all departments</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Building2 size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Departments</h3>
            <p className={styles.statValue}>4</p>
            <p className={styles.statSubtext}>Organized teams</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Calendar size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>On Leave</h3>
            <p className={styles.statValue}>
              {teamMembers.filter(m => m.status === 'on-leave').length}
            </p>
            <p className={styles.statSubtext}>Current status</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Star size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Average Performance</h3>
            <p className={styles.statValue}>
              {(teamMembers.reduce((acc, member) => acc + member.performance, 0) / teamMembers.length).toFixed(1)}
            </p>
            <p className={styles.statSubtext}>Team rating</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search team members..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterContainer}>
            <Filter size={20} />
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
            <select
              className={styles.filterSelect}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="on-leave">On Leave</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Performance</th>
                  <th>Projects</th>
                  <th>Tasks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <div className={styles.memberInfo}>
                        <div className={styles.memberAvatar}>
                          {member.name.charAt(0)}
                        </div>
                        <div className={styles.memberDetails}>
                          <div className={styles.memberName}>{member.name}</div>
                          <div className={styles.memberContact}>
                            <Mail size={14} />
                            {member.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{member.role}</td>
                    <td>{member.department}</td>
                    <td>{getStatusBadge(member.status)}</td>
                    <td>
                      <div className={styles.performance}>
                        <Star size={14} className={styles.starIcon} />
                        {member.performance}
                      </div>
                    </td>
                    <td>{member.projects}</td>
                    <td>{member.tasks}</td>
                    <td>
                      <div className={styles.actionButtons}>
                        <button 
                          className={styles.actionButton}
                          onClick={() => {
                            setSelectedMember(member);
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

      {showActions && selectedMember && (
        <div className={styles.actionsMenu}>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedMember._id, 'active')}
          >
            <CheckCircle2 size={16} />
            Mark as Active
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedMember._id, 'on-leave')}
          >
            <Clock size={16} />
            Mark as On Leave
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedMember._id, 'inactive')}
          >
            <XCircle size={16} />
            Mark as Inactive
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => {
              setSelectedMember(null);
              setShowActions(false);
            }}
          >
            <Edit2 size={16} />
            Edit Details
          </button>
          <button 
            className={`${styles.actionMenuItem} ${styles.deleteAction}`}
            onClick={() => handleDelete(selectedMember._id)}
          >
            <Trash2 size={16} />
            Delete Member
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployTeam; 