import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangleIcon, RefreshCwIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <motion.div
            className="flex flex-col items-center gap-6 p-8 max-w-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <AlertTriangleIcon className="h-16 w-16 text-destructive" />
            </motion.div>
            
            <h2 className="text-2xl font-bold">Oops! Something went wrong</h2>
            
            <p className="text-muted-foreground">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="gap-2"
              >
                <RefreshCwIcon className="h-4 w-4" />
                Refresh Page
              </Button>
              
              <Button
                onClick={() => this.setState({ hasError: false })}
                className="gap-2"
              >
                Try Again
              </Button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="mt-4 max-h-40 w-full overflow-auto rounded-lg bg-muted p-4 text-left text-sm">
                {this.state.error.message}
              </pre>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
