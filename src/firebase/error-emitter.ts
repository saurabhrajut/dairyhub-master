'use client';
import { EventEmitter } from 'events';
import type { FirestorePermissionError } from './errors';

// This is a client-side only event emitter.
// We use a separate file to ensure it's not bundled in server components.

type AppEvents = {
  'permission-error': (error: FirestorePermissionError) => void;
};

class TypedEventEmitter<TEvents extends Record<string, any>> {
  private emitter = new EventEmitter();

  emit<TEventName extends keyof TEvents>(
    eventName: TEventName,
    ...eventArg: Parameters<TEvents[TEventName]>
  ) {
    this.emitter.emit(eventName as string | symbol, ...eventArg);
  }

  on<TEventName extends keyof TEvents>(
    eventName: TEventName,
    handler: TEvents[TEventName]
  ) {
    this.emitter.on(eventName as string | symbol, handler as any);
  }

  off<TEventName extends keyof TEvents>(
    eventName: TEventName,
    handler: TEvents[TEventName]
  ) {
    this.emitter.off(eventName as string | symbol, handler as any);
  }
}

// Global event emitter
export const errorEmitter = new TypedEventEmitter<AppEvents>();
