import { describe, it, expect } from 'vitest';
import { normalizeDocument } from './documentSchema';

describe('normalizeDocument', () => {
  it('validates a valid document', () => {
    const doc = {
      id: 'test-doc',
      officialReference: 'OIV-TEST 001-2024',
      title: 'Test Document',
      family: 'pratiques',
      domain: 'Test',
      category: 'Vins',
      adoptionYear: 2024,
      euRegulation: { euStatus: 'autorise_ue', primaryReference: 'EU Reg' },
      prescriptions: ['Prescription 1'],
      versions: [{ versionLabel: 'v1', adoptionYear: 2024, isCurrent: true }],
    };
    const result = normalizeDocument(doc);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.document.id).toBe('test-doc');
      expect(result.document.officialReference).toBe('OIV-TEST 001-2024');
      expect(result.document.euRegulation.euStatus).toBe('autorise_ue');
    }
  });

  it('rejects document without officialReference', () => {
    const result = normalizeDocument({ title: 'No ref' });
    expect(result.ok).toBe(false);
  });

  it('rejects document without title', () => {
    const result = normalizeDocument({ officialReference: 'OIV-TEST 002' });
    expect(result.ok).toBe(false);
  });

  it('rejects non-object input', () => {
    const result = normalizeDocument(null);
    expect(result.ok).toBe(false);
  });

  it('normalizes euRegulation when missing', () => {
    const doc = {
      id: 'test-doc-2',
      officialReference: 'OIV-TEST 003-2024',
      title: 'Test Document 2',
    };
    const result = normalizeDocument(doc);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.document.euRegulation).toBeDefined();
      expect(result.document.euRegulation.euStatus).toBe('non_applicable');
    }
  });

  it('preserves versions', () => {
    const doc = {
      id: 'test-doc-3',
      officialReference: 'OIV-TEST 004-2024',
      title: 'Test Document 3',
      versions: [
        { versionLabel: 'v1', adoptionYear: 2024, isCurrent: true },
        { versionLabel: 'v2', adoptionYear: 2023, isCurrent: false },
      ],
    };
    const result = normalizeDocument(doc);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.document.versions.length).toBe(2);
    }
  });
});
