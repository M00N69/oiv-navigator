import { describe, it, expect } from 'vitest';
import { filterAndSearchDocuments } from './search';
import { getAllCorpusDocuments } from './storage';

describe('filterAndSearchDocuments', () => {
  const docs = getAllCorpusDocuments();

  it('returns all documents with empty query', () => {
    const result = filterAndSearchDocuments(docs, {
      searchQuery: '',
      family: 'all',
      domain: 'all',
      category: 'all',
      euStatus: 'all',
      yearRange: [2005, 2026],
      onlyRecent: false,
      status: 'all',
    });
    expect(result.totalMatches).toBe(docs.length);
  });

  it('finds documents by allergen keyword (French)', () => {
    const result = filterAndSearchDocuments(docs, {
      searchQuery: 'allergène',
      family: 'all',
      domain: 'all',
      category: 'all',
      euStatus: 'all',
      yearRange: [2005, 2026],
      onlyRecent: false,
      status: 'all',
    });
    expect(result.totalMatches).toBeGreaterThan(0);
  });

  it('finds documents by allergen keyword (English, accent-insensitive)', () => {
    const result = filterAndSearchDocuments(docs, {
      searchQuery: 'allergen',
      family: 'all',
      domain: 'all',
      category: 'all',
      euStatus: 'all',
      yearRange: [2005, 2026],
      onlyRecent: false,
      status: 'all',
    });
    expect(result.totalMatches).toBeGreaterThan(0);
  });

  it('finds documents by sulfite keyword', () => {
    const result = filterAndSearchDocuments(docs, {
      searchQuery: 'sulfite',
      family: 'all',
      domain: 'all',
      category: 'all',
      euStatus: 'all',
      yearRange: [2005, 2026],
      onlyRecent: false,
      status: 'all',
    });
    expect(result.totalMatches).toBeGreaterThan(0);
  });

  it('filters by family', () => {
    const result = filterAndSearchDocuments(docs, {
      searchQuery: '',
      family: 'pratiques',
      domain: 'all',
      category: 'all',
      euStatus: 'all',
      yearRange: [2005, 2026],
      onlyRecent: false,
      status: 'all',
    });
    expect(result.results.every((d) => d.family === 'pratiques')).toBe(true);
  });

  it('returns empty for non-existent query', () => {
    const result = filterAndSearchDocuments(docs, {
      searchQuery: 'xyznonexistent123',
      family: 'all',
      domain: 'all',
      category: 'all',
      euStatus: 'all',
      yearRange: [2005, 2026],
      onlyRecent: false,
      status: 'all',
    });
    expect(result.totalMatches).toBe(0);
  });
});
