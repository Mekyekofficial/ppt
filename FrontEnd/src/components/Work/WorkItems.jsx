import React from 'react';
import styles from './css/WorkItems.module.css';
import WorkItem from './WorkItem';
import companyLogo from '../../assets/logo.png';

const jobData = [
    { id: 1, company: 'Amazon', title: 'Software Engineer', logo: companyLogo, location: 'Seattle, WA', salary: '150,000', experience: '3+ years' },
    { id: 2, company: 'Google', title: 'Product Manager', logo: companyLogo, location: 'Mountain View, CA', salary: '200,000', experience: '5+ years' },
    { id: 3, company: 'Facebook', title: 'Data Scientist', logo: companyLogo, location: 'Menlo Park, CA', salary: '180,000', experience: '4+ years' },
    { id: 4, company: 'Apple', title: 'UX Designer', logo: companyLogo, location: 'Cupertino, CA', salary: '160,000', experience: '3+ years' },
    { id: 5, company: 'Microsoft', title: 'Software Engineer', logo: companyLogo, location: 'Redmond, WA', salary: '140,000', experience: '3+ years' },
    { id: 6, company: 'Netflix', title: 'Product Manager', logo: companyLogo, location: 'Los Gatos, CA', salary: '190,000', experience: '5+ years' },
    { id: 7, company: 'Tesla', title: 'Software Engineer', logo: companyLogo, location: 'Palo Alto, CA', salary: '160,000', experience: '3+ years' },
    { id: 8, company: 'Uber', title: 'Product Manager', logo: companyLogo, location: 'San Francisco, CA', salary: '170,000', experience: '4+ years' },
    { id: 9, company: 'Airbnb', title: 'Data Scientist', logo: companyLogo, location: 'San Francisco, CA', salary: '180,000', experience: '4+ years' },
    { id: 10, company: 'Lyft', title: 'UX Designer', logo: companyLogo, location: 'San Francisco, CA', salary: '150,000', experience: '3+ years' },
    { id: 11, company: 'Slack', title: 'Software Engineer', logo: companyLogo, location: 'San Francisco, CA', salary: '140,000', experience: '3+ years' },
    { id: 12, company: 'Zoom', title: 'Product Manager', logo: companyLogo, location: 'San Jose, CA', salary: '160,000', experience: '4+ years' },
    { id: 13, company: 'Salesforce', title: 'Data Scientist', logo: companyLogo, location: 'San Francisco, CA', salary: '180,000', experience: '4+ years' },
    { id: 14, company: 'Twitter', title: 'UX Designer', logo: companyLogo, location: 'San Francisco, CA', salary: '140,000', experience: '3+ years' },
    { id: 15, company: 'Pinterest', title: 'Software Engineer', logo: companyLogo, location: 'San Francisco, CA', salary: '150,000', experience: '3+ years' },
    { id: 16, company: 'Reddit', title: 'Product Manager', logo: companyLogo, location: 'San Francisco, CA', salary: '160,000', experience: '4+ years' },
    { id: 17, company: 'Dropbox', title: 'Data Scientist', logo: companyLogo, location: 'San Francisco, CA', salary: '170,000', experience: '4+ years' },
    { id: 18, company: 'PayPal', title: 'UX Designer', logo: companyLogo, location: 'San Jose, CA', salary: '150,000', experience: '3+ years' },
    { id: 19, company: 'Oracle', title: 'Software Engineer', logo: companyLogo, location: 'Redwood City, CA', salary: '140,000', experience: '3+ years' },
    { id: 20, company: 'IBM', title: 'Product Manager', logo: companyLogo, location: 'Armonk, NY', salary: '160,000', experience: '4+ years' },
    { id: 21, company: 'HP', title: 'Data Scientist', logo: companyLogo, location: 'Palo Alto, CA', salary: '170,000', experience: '4+ years' },
    { id: 22, company: 'Cisco', title: 'UX Designer', logo: companyLogo, location: 'San Jose, CA', salary: '150,000', experience: '3+ years' },
    { id: 23, company: 'Intel', title: 'Software Engineer', logo: companyLogo, location: 'Santa Clara, CA', salary: '140,000', experience: '3+ years' },
    { id: 24, company: 'Dell', title: 'Product Manager', logo: companyLogo, location: 'Round Rock, TX', salary: '160,000', experience: '4+ years' },
    { id: 25, company: 'Sony', title: 'Data Scientist', logo: companyLogo, location: 'Tokyo, Japan', salary: '170,000', experience: '4+ years' },
    { id: 26, company: 'Samsung', title: 'UX Designer', logo: companyLogo, location: 'Seoul, South Korea', salary: '150,000', experience: '3+ years' },
    { id: 27, company: 'LG', title: 'Software Engineer', logo: companyLogo, location: 'Seoul, South Korea', salary: '140,000', experience: '3+ years' },
    { id: 28, company: 'Nvidia', title: 'Product Manager', logo: companyLogo, location: 'Santa Clara, CA', salary: '160,000', experience: '4+ years' },
    { id: 29, company: 'AMD', title: 'Data Scientist', logo: companyLogo, location: 'Santa Clara, CA', salary: '170,000', experience: '4+ years' },
    { id: 30, company: 'Qualcomm', title: 'UX Designer', logo: companyLogo, location: 'San Diego, CA', salary: '150,000', experience: '3+ years' },
    { id: 31, company: 'TSMC', title: 'Software Engineer', logo: companyLogo, location: 'Hsinchu, Taiwan', salary: '140,000', experience: '3+ years' },
];

const WorkItems = () => {
  return (
    <div className={styles.workItemsContainer}>
      {jobData.map((job) => (
        <WorkItem key={job.id} {...job} />
      ))}
    </div>
  );
};

export default WorkItems;
