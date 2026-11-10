import React from 'react';

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('OIV Navigator error:', error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role="alert" className="min-h-screen flex items-center justify-center bg-surface p-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold text-ink">Une erreur est survenue</h1>
          <p className="text-sm text-muted">
            L'application a rencontré un problème inattendu. Vos favoris, notes et dossier restent
            enregistrés sur cet appareil.
          </p>
          <button
            onClick={() => {
              window.location.hash = '#/';
              window.location.reload();
            }}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Recharger l'application
          </button>
        </div>
      </div>
    );
  }
}
