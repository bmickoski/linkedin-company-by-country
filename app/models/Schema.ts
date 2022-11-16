export const RoomSchema = {
  name: "Room",
  primaryKey: "id",
  properties: {
    id: "string",
    participants: "Person[]",
  },
};

export const PersonSchema = {
  name: "Person",
  properties: {
    id: "string?",
    name: "string?",
  },
};

export const Country = {
  name: "Country",
  primaryKey: "id",
  properties: {
    id: "string",
    code: "string",
    companies: "Company[]",
  },
};

export const Company = {
  name: "Company",
  properties: {
    id: "string?",
    name: "string?",
    websiteUrl: "string?",
    address: "string?",
  },
};
