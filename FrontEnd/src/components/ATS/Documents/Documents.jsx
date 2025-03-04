'use client';

import React, { useState } from "react";
import styles from "./css/Documents.module.css";
import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  Folder, 
  File, 
  Download, 
  Trash2,
  Plus,
  MoreVertical,
  Star,
  Share2,
  Eye,
  Clock,
  AlertCircle
} from 'lucide-react';

const Documents = () => {
  const [documents, setDocuments] = useState([
    { 
      id: 1, 
      name: "Project Proposal.pdf", 
      type: "PDF", 
      size: "2.4 MB", 
      date: "2025-03-15", 
      author: "John Doe",
      category: "Projects",
      starred: false,
      shared: false,
      views: 128
    },
    { 
      id: 2, 
      name: "Meeting Minutes.docx", 
      type: "DOCX", 
      size: "1.8 MB", 
      date: "2025-03-14", 
      author: "Jane Smith",
      category: "Meetings",
      starred: true,
      shared: true,
      views: 256
    },
    { 
      id: 3, 
      name: "Budget Report.xlsx", 
      type: "XLSX", 
      size: "3.2 MB", 
      date: "2025-03-13", 
      author: "Mike Johnson",
      category: "Finance",
      starred: false,
      shared: false,
      views: 89
    },
    { 
      id: 4, 
      name: "Employee Handbook.pdf", 
      type: "PDF", 
      size: "4.1 MB", 
      date: "2025-03-12", 
      author: "HR Team",
      category: "HR",
      starred: true,
      shared: true,
      views: 512
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [newDocument, setNewDocument] = useState({ name: "", category: "", file: null });
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showActions, setShowActions] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    if (newDocument.name && newDocument.category && newDocument.file) {
      const newDoc = {
        id: documents.length + 1,
        name: newDocument.name,
        type: newDocument.file.name.split('.').pop().toUpperCase(),
        size: "0 MB", // You would calculate this from the actual file
        date: new Date().toISOString().split('T')[0],
        author: "Current User",
        category: newDocument.category,
        starred: false,
        shared: false,
        views: 0
      };
      setDocuments([newDoc, ...documents]);
      setNewDocument({ name: "", category: "", file: null });
      setShowUploadForm(false);
    }
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
    setShowActions(false);
  };

  const handleStar = (id) => {
    setDocuments(documents.map(doc => 
      doc.id === id ? { ...doc, starred: !doc.starred } : doc
    ));
  };

  const handleShare = (id) => {
    setDocuments(documents.map(doc => 
      doc.id === id ? { ...doc, shared: !doc.shared } : doc
    ));
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || doc.category.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <File className={styles.fileIcon} size={20} />;
      case 'docx':
        return <FileText className={styles.fileIcon} size={20} />;
      case 'xlsx':
        return <File className={styles.fileIcon} size={20} />;
      default:
        return <File className={styles.fileIcon} size={20} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Documents</h1>
          <p className={styles.pageDescription}>Manage and organize your documents</p>
        </div>
        <button 
          className={styles.uploadButton}
          onClick={() => setShowUploadForm(!showUploadForm)}
        >
          <Plus size={20} />
          Upload Document
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FileText size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Total Documents</h3>
            <p className={styles.statValue}>{documents.length}</p>
            <p className={styles.statSubtext}>Across all categories</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Folder size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Categories</h3>
            <p className={styles.statValue}>4</p>
            <p className={styles.statSubtext}>Organized folders</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Clock size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Recent Updates</h3>
            <p className={styles.statValue}>3</p>
            <p className={styles.statSubtext}>In the last 24 hours</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <AlertCircle size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Storage Used</h3>
            <p className={styles.statValue}>11.5 GB</p>
            <p className={styles.statSubtext}>Of 50 GB total</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search documents..."
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
              <option value="all">All Categories</option>
              <option value="projects">Projects</option>
              <option value="meetings">Meetings</option>
              <option value="finance">Finance</option>
              <option value="hr">HR</option>
            </select>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>Views</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id}>
                    <td>
                      <div className={styles.fileName}>
                        {getFileIcon(doc.type)}
                        {doc.name}
                      </div>
                    </td>
                    <td>
                      <span className={styles.categoryBadge}>
                        {doc.category}
                      </span>
                    </td>
                    <td>{doc.author}</td>
                    <td>{doc.date}</td>
                    <td>{doc.size}</td>
                    <td>
                      <div className={styles.views}>
                        <Eye size={16} />
                        {doc.views}
                      </div>
                    </td>
                    <td>
                      <div className={styles.actionButtons}>
                        <button 
                          className={`${styles.actionButton} ${doc.starred ? styles.active : ''}`}
                          onClick={() => handleStar(doc.id)}
                        >
                          <Star size={16} />
                        </button>
                        <button 
                          className={`${styles.actionButton} ${doc.shared ? styles.active : ''}`}
                          onClick={() => handleShare(doc.id)}
                        >
                          <Share2 size={16} />
                        </button>
                        <button className={styles.actionButton}>
                          <Download size={16} />
                        </button>
                        <button 
                          className={styles.actionButton}
                          onClick={() => {
                            setSelectedDocument(doc);
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

      {showUploadForm && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Upload Document</h2>
            <p className={styles.cardDescription}>Add a new document to your library</p>
          </div>
          <div className={styles.cardContent}>
            <form onSubmit={handleUpload} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Document Name:
                </label>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  value={newDocument.name}
                  onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
                  placeholder="Enter document name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="category" className={styles.label}>
                  Category:
                </label>
                <select
                  id="category"
                  className={styles.input}
                  value={newDocument.category}
                  onChange={(e) => setNewDocument({ ...newDocument, category: e.target.value })}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="projects">Projects</option>
                  <option value="meetings">Meetings</option>
                  <option value="finance">Finance</option>
                  <option value="hr">HR</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="file" className={styles.label}>
                  File:
                </label>
                <input
                  id="file"
                  type="file"
                  className={styles.fileInput}
                  onChange={(e) => setNewDocument({ ...newDocument, file: e.target.files[0] })}
                  required
                />
              </div>
              <div className={styles.formActions}>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={() => setShowUploadForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitButton}>
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showActions && selectedDocument && (
        <div className={styles.actionsMenu}>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleDelete(selectedDocument.id)}
          >
            <Trash2 size={16} />
            Delete
          </button>
          <button className={styles.actionMenuItem}>
            <Download size={16} />
            Download
          </button>
          <button className={styles.actionMenuItem}>
            <Share2 size={16} />
            Share
          </button>
        </div>
      )}
    </div>
  );
};

export default Documents; 