import React from 'react';
import { FileItem } from './Sidebar';

interface BreadcrumbsProps {
  activeTabKey: string;
  files: Record<string, FileItem>;
}

export default function Breadcrumbs({ activeTabKey, files }: BreadcrumbsProps) {
  const f = files[activeTabKey];
  if (!f) return null;

  const folderHtml = f.folder && f.folder !== 'root' ? (
    <>
      <span> › </span>
      <span>{f.folder}</span>
    </>
  ) : null;

  return (
    <div className="breadcrumbs" id="breadcrumbs">
      <span>portfolio</span>
      {folderHtml}
      <span> › </span>
      <span style={{ color: 'var(--plain)' }}>{f.name}</span>
    </div>
  );
}
