/** @format */
export interface IUnnormalizedItem {
  id: string;
  title: string;
  body: string;
}

export interface INormalizeData {
  byId: ById;
  allIds: ItemId[];
}

export interface ById {
  [key: ItemId]: INormalizeItem;
}

export interface INormalizeItem {
  id: ItemId;
  title: string;
  body: string;
}

export type ItemId = string
