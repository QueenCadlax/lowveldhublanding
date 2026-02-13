import React, { Component, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error captured by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-luxury-black text-white flex items-center justify-center p-6">
          <div className="max-w-md text-center border border-luxury-gold/20 rounded-sm p-8 bg-white/[0.02]">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-luxury-gold" />
            <h1 className="text-2xl font-serif mb-4">Something went wrong</h1>
            <p className="text-white/60 mb-6 text-sm">
              We encountered an unexpected error. Please refresh the page or contact support if this persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-luxury-gold text-black font-bold text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left text-xs text-white/40">
                <summary className="cursor-pointer hover:text-white/60">Error Details</summary>
                <pre className="mt-2 overflow-auto bg-black/50 p-3 rounded text-left whitespace-pre-wrap break-words">
                  {this.state.error?.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
