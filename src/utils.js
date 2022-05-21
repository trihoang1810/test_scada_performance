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
