export async function getTagsData(
  connection,
  eonNodeId,
  deviceQueries,
  tagNames
) {
  const nodeQuery = {
    EonNodeId: eonNodeId,
    DeviceQueries: deviceQueries.map((deviceQuery, index) => {
      return {
        DeviceId: deviceQuery,
        TagNames: tagNames[index],
      };
    }),
  };
  var result = await connection.invoke("GetListTags", nodeQuery);
  return result;
}
export const tagReferences = [
  {
    node: "imm",
    numberOfDevices: 5,
    tags: [`CycleTime`, `OpenTime`, `CounterShot`, `SetCycle`, `MachineStatus`],
  },
  {
    node: "ps",
    numberOfDevices: 6,
    tags: ["ErrorProduct", "CompletedProduct", "MachineStatus"],
  },
  {
    node: "as",
    numberOfDevices: 5,
    tags: ["MachineStatus", "CurrentValue"],
  },
];
