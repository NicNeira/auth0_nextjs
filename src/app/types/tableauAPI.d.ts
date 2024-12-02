declare namespace JSX {
  interface IntrinsicElements {
    'tableau-viz': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src: string;
      toolbar?: 'hidden' | 'top' | 'bottom';
      hideTabs?: boolean;
      onFirstInteractive?: (event: CustomEvent) => void;
      onTabSwitched?: (event: CustomEvent) => void;
    };
    'viz-filter': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      field: string;
      value: any;
    };

    'viz-parameter': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      name: string;
      value: any;
    };
  }
}

// Tipos para Workbook, ActiveSheet, etc.
interface TableauViz {
  addFilter(fieldName: string, values: any, updateType: string): Promise<void>;
  workbook: TableauWorkbook;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
}

interface TableauWorkbook {
  name: string;
  activeSheet: TableauSheet;
  activateSheetAsync(sheetNameOrIndex: string | number): Promise<TableauSheet>;
  getParametersAsync(): Promise<TableauParameter[]>;
}

interface TableauSheet {
  name: string;
  sheetType: 'worksheet' | 'dashboard' | 'story';
  worksheets: TableauWorksheet[];
}

interface TableauWorksheet {
  getSummaryDataAsync(): Promise<any>;
  getFiltersAsync(): Promise<any>;
  getName(): string;
}

interface TableauParameter {
  name: string;
  changeValueAsync(value: any): Promise<void>;
}

declare const tableau: any;
