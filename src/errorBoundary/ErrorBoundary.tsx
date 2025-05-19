// src/ErrorBoundary.tsx
import React from 'react';
import type { ErrorInfo, ReactNode } from 'react'
type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    };
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log this error to an error reporting service
    this.setState({ error, errorInfo });
    console.error("Caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='bg-black w-full h-screen flex justify-center items-center'>
          <div className='w-[50%] h-full font-bold text-white text-4xl'>
            <h2>OOPS... Something went wrong</h2>
            <details className='mt-10 whitespace-pre-wrap'>
              {this.state.error?.toString()}
            </details>
            <details className='mt-10 whitespace-pre-wrap'>
              {this.state.errorInfo?.componentStack}
            </details>
            <button
              onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
              className="mt-8 px-4 py-2 bg-white text-black font-semibold rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
  
    return this.props.children;
  }
  
}

export default ErrorBoundary;
