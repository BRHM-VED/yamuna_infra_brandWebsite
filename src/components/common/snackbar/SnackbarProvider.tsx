import React from 'react';

type SnackbarVariant = 'default' | 'success' | 'error';

export type SnackbarOptions = {
  message: string;
  durationMs?: number;
  variant?: SnackbarVariant;
  actionLabel?: string;
  onAction?: () => void;
};

type SnackbarState = Required<Pick<SnackbarOptions, 'message'>> &
  Pick<SnackbarOptions, 'actionLabel' | 'onAction'> & {
    open: boolean;
    variant: SnackbarVariant;
  };

type SnackbarContextValue = {
  showSnackbar: (options: SnackbarOptions) => void;
};

const SnackbarContext = React.createContext<SnackbarContextValue | null>(null);

export function useSnackbar(): SnackbarContextValue {
  const ctx = React.useContext(SnackbarContext);
  if (!ctx) throw new Error('useSnackbar must be used within SnackbarProvider');
  return ctx;
}

export const SnackbarProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const timerRef = React.useRef<number | null>(null);
  const [state, setState] = React.useState<SnackbarState>({
    open: false,
    message: '',
    variant: 'default',
  });

  const close = React.useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  const showSnackbar = React.useCallback((options: SnackbarOptions) => {
    const durationMs = options.durationMs ?? 1600;
    const variant = options.variant ?? 'default';

    if (timerRef.current) window.clearTimeout(timerRef.current);

    setState({
      open: true,
      message: options.message,
      variant,
      actionLabel: options.actionLabel,
      onAction: options.onAction,
    });

    timerRef.current = window.setTimeout(() => {
      close();
    }, durationMs);
  }, [close]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close]);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const bg =
    state.variant === 'success'
      ? 'bg-[#0F2F1B]'
      : state.variant === 'error'
        ? 'bg-[#3A0D0D]'
        : 'bg-[#1B1B1B]';

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      {/* Snackbar (native-like toast) */}
      <div
        className={[
          'fixed left-1/2 -translate-x-1/2 z-200',
          'bottom-5 md:bottom-8',
          'transition-all duration-200',
          state.open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
        ].join(' ')}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          className={[
            bg,
            'text-white',
            'min-w-[220px] max-w-[92vw] md:max-w-[520px]',
            'px-4 py-3',
            'rounded-[10px]',
            'shadow-[0_12px_30px_rgba(0,0,0,0.35)]',
            'flex items-center gap-3',
          ].join(' ')}
        >
          <div className="text-[14px] leading-[1.35]">{state.message}</div>
          {state.actionLabel ? (
            <button
              type="button"
              onClick={() => {
                state.onAction?.();
                close();
              }}
              className="ml-auto text-[13px] font-medium underline underline-offset-4 opacity-95 hover:opacity-100"
            >
              {state.actionLabel}
            </button>
          ) : null}
        </div>
      </div>
    </SnackbarContext.Provider>
  );
};

