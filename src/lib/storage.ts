import { OivDocument, UserNote, DossierItem } from '../types/oiv';
import { OIV_CORPUS } from '../data/oivCorpus';
import { normalizeDocument } from './documentSchema';

const STORAGE_KEYS = {
  BOOKMARKS: 'oiv_navigator_bookmarks_v1',
  NOTES: 'oiv_navigator_notes_v1',
  DOSSIER: 'oiv_navigator_dossier_v1',
  CUSTOM_DOCS: 'oiv_navigator_custom_docs_v1',
  RECENT_SEARCHES: 'oiv_navigator_recent_searches_v1',
};

// Bookmarks
export function getStoredBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleStoredBookmark(docId: string): string[] {
  try {
    const current = getStoredBookmarks();
    const updated = current.includes(docId)
      ? current.filter(id => id !== docId)
      : [...current, docId];
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// User Notes
export function getStoredNotes(): Record<string, UserNote> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.NOTES);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStoredNote(documentId: string, content: string): void {
  try {
    const notes = getStoredNotes();
    if (!content.trim()) {
      delete notes[documentId];
    } else {
      notes[documentId] = {
        documentId,
        content,
        updatedAt: new Date().toISOString()
      };
    }
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save note locally', e);
  }
}

// Dossier Items
export function getStoredDossier(): DossierItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DOSSIER);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addToDossier(documentId: string, clientContext?: string): DossierItem[] {
  try {
    const current = getStoredDossier();
    if (current.some(item => item.documentId === documentId)) return current;
    const updated = [
      ...current,
      {
        documentId,
        addedAt: new Date().toISOString(),
        clientContext: clientContext || ''
      }
    ];
    localStorage.setItem(STORAGE_KEYS.DOSSIER, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function removeFromDossier(documentId: string): DossierItem[] {
  try {
    const current = getStoredDossier();
    const updated = current.filter(item => item.documentId !== documentId);
    localStorage.setItem(STORAGE_KEYS.DOSSIER, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// Custom / User-Added Documents (for offline extensibility)
export function getCustomDocuments(): OivDocument[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_DOCS);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const documents: OivDocument[] = [];
    let dropped = 0;

    parsed.forEach((entry) => {
      const result = normalizeDocument(entry);
      if (result.ok) {
        documents.push(result.document);
      } else {
        dropped += 1;
      }
    });

    // Self-healing: a previously corrupted store must not be able to brick the app.
    if (dropped > 0) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_DOCS, JSON.stringify(documents));
    }

    return documents;
  } catch {
    return [];
  }
}

export function saveCustomDocument(doc: OivDocument): boolean {
  const result = normalizeDocument(doc);
  if (!result.ok) return false;

  try {
    const current = getCustomDocuments();
    const filtered = current.filter(d => d.id !== result.document.id);
    localStorage.setItem(
      STORAGE_KEYS.CUSTOM_DOCS,
      JSON.stringify([result.document, ...filtered])
    );
    return true;
  } catch (e) {
    console.error('Failed to save custom doc locally', e);
    return false;
  }
}

// Combined corpus
export function getAllCorpusDocuments(): OivDocument[] {
  const custom = getCustomDocuments();
  return [...custom, ...OIV_CORPUS];
}
