export const riderSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    code: { type: "string" }
  },
  required: ["id", "name", "code"],
  additionalProperties: false,
};
