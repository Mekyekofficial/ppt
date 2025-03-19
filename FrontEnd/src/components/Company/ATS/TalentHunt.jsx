import React, { useState, useEffect } from "react";
import SearchBar from "./TalentHunt/SearchBar";
import TalentPoolStyles from "./css/TalentHunt.module.css";
import API from "../../../api";
import Card from "./TalentHunt/Card";
import { Search, Loader2, AlertCircle, Filter, SlidersHorizontal, Users, Briefcase, GraduationCap } from 'lucide-react';
import Spinner from "../../Animation/Spinner";

const TalentPool = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    experience: [],
    skills: [],
    education: [],
    availability: []
  });

  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('relevance'); // 'relevance', 'experience', 'recent'

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      setLoading(true);
      const response = await API.get("/profile/getAll");
      setProfiles(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch profiles. Please try again later.");
      console.error("Error fetching profiles:", err);
    } finally {
      setLoading(false);
    }
  };

  const filterProfiles = (profiles) => {
    return profiles.filter(profile => {
      const matchesSearch = searchTerm === "" ||
        profile.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.skills?.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesFilters = 
        (filters.experience.length === 0 || filters.experience.includes(profile.experienceLevel)) &&
        (filters.education.length === 0 || filters.education.includes(profile.educationLevel)) &&
        (filters.availability.length === 0 || filters.availability.includes(profile.availability));

      return matchesSearch && matchesFilters;
    });
  };

  const sortProfiles = (profiles) => {
    switch (sortBy) {
      case 'experience':
        return [...profiles].sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);
      case 'recent':
        return [...profiles].sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive));
      default:
        return profiles;
    }
  };

  const filteredAndSortedProfiles = sortProfiles(filterProfiles(profiles));

  const stats = {
    total: profiles.length,
    active: profiles.filter(p => p.isActive).length,
    new: profiles.filter(p => {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      return new Date(p.createdAt) > oneWeekAgo;
    }).length
  };

  return (
    <div className={TalentPoolStyles.talentHunt}>
      <div className={TalentPoolStyles.header}>
        <div className={TalentPoolStyles.headerContent}>
          <h1>Talent Hunt</h1>
          <p>Discover and connect with top talent</p>
        </div>

        <div className={TalentPoolStyles.stats}>
          <div className={TalentPoolStyles.statCard}>
            <Users size={20} />
            <div>
              <h3>{stats.total}</h3>
              <p>Total Profiles</p>
            </div>
          </div>
          <div className={TalentPoolStyles.statCard}>
            <Briefcase size={20} />
            <div>
              <h3>{stats.active}</h3>
              <p>Active Candidates</p>
            </div>
          </div>
          <div className={TalentPoolStyles.statCard}>
            <GraduationCap size={20} />
            <div>
              <h3>{stats.new}</h3>
              <p>New This Week</p>
            </div>
          </div>
        </div>
      </div>

      <div className={TalentPoolStyles.controls}>
        <div className={TalentPoolStyles.searchSection}>
          <div className={TalentPoolStyles.searchBar}>
            <Search className={TalentPoolStyles.searchIcon} />
            <input
              type="text"
              placeholder="Search by name, skills, or experience..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={TalentPoolStyles.searchInput}
            />
          </div>

          <button 
            className={`${TalentPoolStyles.filterButton} ${showFilters ? TalentPoolStyles.active : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>

          <div className={TalentPoolStyles.sortDropdown}>
            <SlidersHorizontal size={20} />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={TalentPoolStyles.sortSelect}
            >
              <option value="relevance">Most Relevant</option>
              <option value="experience">Most Experienced</option>
              <option value="recent">Recently Active</option>
            </select>
          </div>
        </div>

        {showFilters && (
          <div className={TalentPoolStyles.filterPanel}>
            {/* Filter panel content */}
          </div>
        )}
      </div>

      <div className={TalentPoolStyles.content}>
        {loading ? (
          <div className={TalentPoolStyles.loadingState}>
            <Loader2 className={TalentPoolStyles.spinner} size={40} />
            <Spinner />
          </div>
        ) : error ? (
          <div className={TalentPoolStyles.errorState}>
            <AlertCircle size={40} />
            <p>{error}</p>
          </div>
        ) : filteredAndSortedProfiles.length === 0 ? (
          <div className={TalentPoolStyles.emptyState}>
            <Search size={40} />
            <p>No profiles found</p>
            <span>Try adjusting your search or filters</span>
          </div>
        ) : (
          <div className={TalentPoolStyles.cards}>
            {filteredAndSortedProfiles.map((profile) => (
              <Card key={profile._id} profile={profile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TalentPool;
