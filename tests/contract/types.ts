export type ContractFramework = "html" | "vue" | "react";

export type ContractAttribute = string | number | boolean | null | undefined;

export interface ContractNode {
  tag: string;
  attributes?: Record<string, ContractAttribute>;
  properties?: Record<string, unknown>;
  children?: ContractNodeChild[];
}

export type ContractNodeChild = string | ContractNode;

export interface ContractMount {
  attributes?: Record<string, ContractAttribute>;
  properties?: Record<string, unknown>;
  children?: ContractNodeChild[];
}

export interface ContractComponent {
  tag: `super-${string}`;
  name: string;
  mount: ContractMount;
  parts?: string[];
  requiredAria?: boolean;
}

export interface ContractEvent {
  name: `super-${string}`;
  tag: `super-${string}`;
}

export interface RecordedContractEvent {
  name: string;
  detail: unknown;
  bubbles: boolean;
  composed: boolean;
}

export interface ContractPatch {
  attributes?: Record<string, ContractAttribute>;
  properties?: Record<string, unknown>;
  children?: ContractNodeChild[];
}

export interface ContractDebugApi {
  ready: boolean;
  framework: ContractFramework;
  tag: string;
  errors: string[];
  events: RecordedContractEvent[];
  resetEvents(): void;
  dispatch(name: string, detail?: unknown): void;
  patch(patch: ContractPatch): Promise<void>;
  dispose(): Promise<void>;
}

declare global {
  interface Window {
    __SUPER_CONTRACT__?: ContractDebugApi;
  }
}
